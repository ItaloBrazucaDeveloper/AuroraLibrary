import { Input } from "@components/input";
import { ChevronUp } from "lucide-react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type DatalistControlProps = ComponentProps<"input">;

export function DataListControl({ className, ...props }: DatalistControlProps) {
  return (
    <div className="relative mb-2">
      <ChevronUp className="absolute -translate-y-1/2 top-1/2 right-2 text-zinc-500 stroke-2" />
      <Input.Control
        type="text"
        className={twMerge("*:pr-6", className)}
        {...props}
      />
    </div>
  );
}
