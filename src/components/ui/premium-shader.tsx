import { useEffect, useRef } from "react";
import * as THREE from "three";

interface PremiumShaderProps {
  className?: string;
}

// Stripe/Vercel inspired aurora gradient shader
const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;

  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    vec2 pos = uv * 2.0 - 1.0;
    pos.x *= uResolution.x / uResolution.y;

    // Very slow time for elegant movement
    float t = uTime * 0.08;

    // Color palette - Lime green brand colors
    vec3 primaryGreen = vec3(0.73, 0.92, 0.35);   // hsl(84 81% 63%) - Brand lime
    vec3 darkGreen = vec3(0.35, 0.55, 0.18);      // Darker lime
    vec3 bgColor = vec3(0.024, 0.027, 0.035);     // Very dark background

    // Create smooth flowing gradients using layered noise
    // Layer 1: Large scale slow movement
    float flow1 = snoise(vec3(pos.x * 0.3, pos.y * 0.3 + t * 0.2, t * 0.1));

    // Layer 2: Medium scale
    float flow2 = snoise(vec3(pos.x * 0.5 + 50.0, pos.y * 0.4 - t * 0.15, t * 0.08));

    // Layer 3: Subtle detail
    float flow3 = snoise(vec3(pos.x * 0.8 + 100.0, pos.y * 0.6 + t * 0.1, t * 0.12));

    // Combine flows into smooth gradient
    float gradient = flow1 * 0.5 + flow2 * 0.35 + flow3 * 0.15;

    // Create vertical gradient bias (stronger at top)
    float verticalBias = smoothstep(-0.5, 1.5, pos.y + 0.5);

    // Create diagonal light sweep
    float diagonal = (pos.x + pos.y) * 0.3;
    float sweep = smoothstep(-1.0, 1.0, sin(diagonal + t * 0.3)) * 0.3;

    // Combine everything into intensity
    float intensity = (gradient * 0.5 + 0.5) * verticalBias;
    intensity = intensity * 0.25 + sweep * 0.1;

    // Smooth falloff from edges
    float edgeFade = 1.0 - pow(length(pos) * 0.5, 2.0);
    edgeFade = max(0.0, edgeFade);
    intensity *= edgeFade;

    // Apply color with smooth gradient between dark and primary
    vec3 finalColor = bgColor;
    finalColor = mix(finalColor, darkGreen * 0.6, intensity * 0.8);
    finalColor = mix(finalColor, primaryGreen * 0.4, intensity * intensity * 1.2);

    // Subtle top glow
    float topGlow = smoothstep(0.0, 1.5, pos.y + 0.8) * 0.15;
    finalColor += primaryGreen * topGlow * edgeFade;

    // Very subtle grain for texture
    float grain = snoise(vec3(gl_FragCoord.xy * 0.5, t)) * 0.015;
    finalColor += grain;

    // Soft vignette
    float vignette = 1.0 - pow(length(uv - 0.5) * 1.2, 2.0);
    vignette = smoothstep(0.0, 1.0, vignette);
    finalColor *= vignette * 0.95 + 0.05;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

export function PremiumShader({ className }: PremiumShaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Shader material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new THREE.Vector2(
            container.clientWidth * window.devicePixelRatio,
            container.clientHeight * window.devicePixelRatio
          ),
        },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      },
    });
    materialRef.current = material;

    // Full-screen quad
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop
    let startTime = Date.now();

    const animate = () => {
      const elapsedTime = (Date.now() - startTime) / 1000;
      material.uniforms.uTime.value = elapsedTime;
      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      material.uniforms.uResolution.value.set(
        width * window.devicePixelRatio,
        height * window.devicePixelRatio
      );
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameRef.current);

      if (rendererRef.current) {
        rendererRef.current.dispose();
        container.removeChild(rendererRef.current.domElement);
      }

      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    />
  );
}
