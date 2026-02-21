import { cn } from "@/lib/utils";

interface MeshGradientProps {
  className?: string;
  variant?: "hero" | "section" | "subtle" | "features";
}

export function MeshGradient({ className, variant = "hero" }: MeshGradientProps) {
  const variants = {
    hero: (
      <>
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(240,10%,4%)] via-[hsl(240,10%,6%)] to-[hsl(240,10%,4%)]" />

        {/* Primary glow - top center */}
        <div
          className="absolute -top-[30%] left-1/2 -translate-x-1/2 h-[60%] w-[80%] rounded-full opacity-20 blur-[150px]"
          style={{
            background: "radial-gradient(circle, hsl(84 81% 63%) 0%, transparent 70%)",
          }}
        />

        {/* Subtle accent - bottom */}
        <div
          className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 h-[40%] w-[60%] rounded-full opacity-10 blur-[120px]"
          style={{
            background: "radial-gradient(circle, hsl(84 81% 63%) 0%, transparent 70%)",
          }}
        />

        {/* Noise overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </>
    ),
    section: (
      <>
        <div className="absolute inset-0 bg-[hsl(240,10%,4%)]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] opacity-20 blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse, hsl(84 81% 63%) 0%, transparent 70%)",
          }}
        />
      </>
    ),
    subtle: (
      <>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,10%,4%)] to-[hsl(240,10%,6%)]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, hsl(84 81% 63% / 0.15) 0%, transparent 50%)",
          }}
        />
      </>
    ),
    features: (
      <>
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(240,10%,4%)] via-[hsl(240,10%,5%)] to-[hsl(240,10%,4%)]" />

        {/* Multiple gradient orbs for depth */}
        <div
          className="absolute top-[10%] left-[20%] h-[50%] w-[40%] rounded-full opacity-10 blur-[150px]"
          style={{
            background: "radial-gradient(circle, hsl(84 81% 63%) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute top-[40%] right-[15%] h-[40%] w-[35%] rounded-full opacity-8 blur-[120px]"
          style={{
            background: "radial-gradient(circle, hsl(84 81% 63%) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-[20%] left-[50%] -translate-x-1/2 h-[30%] w-[50%] rounded-full opacity-12 blur-[100px]"
          style={{
            background: "radial-gradient(circle, hsl(84 81% 63%) 0%, transparent 70%)",
          }}
        />

        {/* Noise overlay for texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </>
    ),
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {variants[variant]}
    </div>
  );
}
