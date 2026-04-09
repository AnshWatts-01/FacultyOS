import { cn } from "@/lib/utils";

type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "grain rounded-[28px] border border-white/70 bg-white/75 p-6 shadow-soft backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
