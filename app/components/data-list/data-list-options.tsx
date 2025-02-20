import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type DataListOptionsProps = ComponentProps<"ul">;

export function DataListOptions({ className, ...props }: DataListOptionsProps) {
  return (
    <ul
      className={twMerge("max-h-80 border border-zinc-300 shadow rounded-md", className)}
      {...props}
    />
  );
}
