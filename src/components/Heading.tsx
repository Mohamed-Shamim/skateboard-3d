import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

const responsiveSizeClasses = {
  xl: "text-[clamp(2rem,5vw,4rem)]", // 32px → 64px
  lg: "text-[clamp(1.75rem,4.5vw,3rem)]", // 28px → 48px
  md: "text-[clamp(1.5rem,4vw,2.5rem)]", // 24px → 40px
  sm: "text-[clamp(1.25rem,3.5vw,2rem)]", // 20px → 32px
  xs: "text-[clamp(1rem,3vw,1.5rem)]", // 16px → 24px
};

export function Heading({
  as: Comp = "h1",
  size = "lg",
  children,
  className,
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-sans uppercase",
        responsiveSizeClasses[size],
        className
      )}
    >
      {children}
    </Comp>
  );
}
