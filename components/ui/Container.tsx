import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
};

export function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-7xl px-6 md:px-8 ${className}`} {...props}>
      {children}
    </div>
  );
}
