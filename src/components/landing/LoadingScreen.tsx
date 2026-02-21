import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

export function LoadingScreen({ onComplete, minDuration = 2500 }: LoadingScreenProps) {
  // Remove the static HTML preloader synchronously before the first paint.
  // LoadingScreen covers the full screen with the same background, so there is
  // no visual change — this eliminates the black flash between the two preloaders.
  useLayoutEffect(() => {
    const el = document.getElementById('_html-preloader');
    if (el) el.remove();
  }, []);

  const [phase, setPhase] = useState<"loading" | "revealing" | "exiting">("loading");
  const [progress, setProgress] = useState(0);
  const [hasWindowLoaded, setHasWindowLoaded] = useState(
    () => typeof document !== "undefined" && document.readyState === "complete"
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const hasWindowLoadedRef = useRef(hasWindowLoaded);

  useEffect(() => {
    hasWindowLoadedRef.current = hasWindowLoaded;
  }, [hasWindowLoaded]);

  useEffect(() => {
    if (hasWindowLoaded) {
      return;
    }

    const handleLoad = () => {
      setHasWindowLoaded(true);
    };

    window.addEventListener("load", handleLoad, { once: true });
    return () => window.removeEventListener("load", handleLoad);
  }, [hasWindowLoaded]);

  useEffect(() => {
    const startTime = Date.now();
    let revealTimeout: ReturnType<typeof setTimeout> | null = null;
    let exitTimeout: ReturnType<typeof setTimeout> | null = null;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const minDurationReached = elapsed >= minDuration;
      const readyToExit = minDurationReached && hasWindowLoadedRef.current;
      const maxProgress = readyToExit ? 100 : 95;
      const newProgress = Math.min((elapsed / minDuration) * 100, maxProgress);
      setProgress(newProgress);

      if (readyToExit) {
        clearInterval(interval);
        setPhase("revealing");
        revealTimeout = setTimeout(() => {
          setPhase("exiting");
          exitTimeout = setTimeout(onComplete, 800);
        }, 600);
      }
    }, 16);

    return () => {
      clearInterval(interval);
      if (revealTimeout) clearTimeout(revealTimeout);
      if (exitTimeout) clearTimeout(exitTimeout);
    };
  }, [minDuration, onComplete]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(240,10%,4%)] overflow-hidden",
        phase === "exiting" && "pointer-events-none"
      )}
    >
      {/* Animated background lines */}
      <div className="absolute inset-0">
        {/* Vertical lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              transform: phase === "exiting" ? "scaleY(0)" : "scaleY(1)",
              transformOrigin: i % 2 === 0 ? "top" : "bottom",
              transition: `transform 0.6s ease-in-out ${i * 0.05}s`,
            }}
          />
        ))}

        {/* Horizontal lines */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              transform: phase === "exiting" ? "scaleX(0)" : "scaleX(1)",
              transition: `transform 0.6s ease-in-out ${i * 0.08}s`,
            }}
          />
        ))}
      </div>

      {/* Center glow */}
      <div
        className={cn(
          "absolute w-[400px] h-[400px] rounded-full transition-all duration-1000",
          phase === "loading" && "bg-primary/5 blur-[100px] scale-100",
          phase === "revealing" && "bg-primary/10 blur-[120px] scale-110",
          phase === "exiting" && "bg-primary/20 blur-[150px] scale-150 opacity-0"
        )}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo mark */}
        <div className="relative mb-8">
          {/* Outer ring */}
          <div
            className={cn(
              "absolute -inset-4 rounded-full border border-white/[0.08] transition-all duration-700",
              phase === "revealing" && "scale-125 opacity-0",
              phase === "exiting" && "scale-150 opacity-0"
            )}
          />

          {/* Inner ring with progress */}
          <svg
            className="w-20 h-20"
            viewBox="0 0 80 80"
          >
            {/* Background circle */}
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
            {/* Progress circle */}
            <circle
              cx="40"
              cy="40"
              r="36"
              fill="none"
              stroke="hsl(84, 81%, 63%)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 36}`}
              strokeDashoffset={`${2 * Math.PI * 36 * (1 - progress / 100)}`}
              className="transition-all duration-100 ease-out"
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "center",
                opacity: phase === "exiting" ? 0 : 1,
                transition: phase === "exiting" ? "opacity 0.3s" : "stroke-dashoffset 0.1s",
              }}
            />
          </svg>

          {/* Center logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                "relative transition-all duration-500",
                phase === "revealing" && "scale-110",
                phase === "exiting" && "scale-125 opacity-0"
              )}
            >
              {/* Logo: matches Navigation */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-[0_0_30px_rgba(186,234,89,0.3)]">
                <Layers className="w-5 h-5 text-black" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Brand name with reveal effect */}
        <div className="relative overflow-hidden">
          <h1
            className={cn(
              "text-3xl font-semibold text-white tracking-tight transition-all duration-700",
              phase === "exiting" && "opacity-0 translate-y-4"
            )}
          >
            ordefy
          </h1>
          {/* Shimmer effect */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full",
              phase === "revealing" && "animate-[shimmer_0.8s_ease-out_forwards]"
            )}
          />
        </div>

        {/* Tagline */}
        <p
          className={cn(
            "mt-4 text-sm text-white/30 tracking-widest uppercase transition-all duration-500",
            phase === "loading" && "opacity-0 translate-y-2",
            phase === "revealing" && "opacity-100 translate-y-0",
            phase === "exiting" && "opacity-0 -translate-y-2"
          )}
          style={{
            transitionDelay: phase === "revealing" ? "200ms" : "0ms"
          }}
        >
          E-commerce Operations
        </p>
      </div>

      {/* Split curtain exit effect */}
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-1/2 bg-[hsl(240,10%,4%)] z-20 transition-transform duration-700 ease-in-out",
          phase === "exiting" ? "-translate-x-full" : "translate-x-0"
        )}
        style={{ transitionDelay: phase === "exiting" ? "200ms" : "0ms" }}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 w-1/2 bg-[hsl(240,10%,4%)] z-20 transition-transform duration-700 ease-in-out",
          phase === "exiting" ? "translate-x-full" : "translate-x-0"
        )}
        style={{ transitionDelay: phase === "exiting" ? "200ms" : "0ms" }}
      />

      {/* Corner accents */}
      <div className={cn(
        "absolute top-8 left-8 w-12 h-12 border-l border-t border-white/[0.06] transition-all duration-500",
        phase === "exiting" && "opacity-0 -translate-x-4 -translate-y-4"
      )} />
      <div className={cn(
        "absolute top-8 right-8 w-12 h-12 border-r border-t border-white/[0.06] transition-all duration-500",
        phase === "exiting" && "opacity-0 translate-x-4 -translate-y-4"
      )} />
      <div className={cn(
        "absolute bottom-8 left-8 w-12 h-12 border-l border-b border-white/[0.06] transition-all duration-500",
        phase === "exiting" && "opacity-0 -translate-x-4 translate-y-4"
      )} />
      <div className={cn(
        "absolute bottom-8 right-8 w-12 h-12 border-r border-b border-white/[0.06] transition-all duration-500",
        phase === "exiting" && "opacity-0 translate-x-4 translate-y-4"
      )} />
    </div>
  );
}
