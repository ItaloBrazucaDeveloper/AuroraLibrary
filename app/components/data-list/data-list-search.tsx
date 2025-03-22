import { Input } from "@components/input";
import { ChevronUp } from "lucide-react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { getContext } from "./data-list-context";

type DatalistControlProps = ComponentProps<"input">;

export function DataListControl({ className, ...props }: DatalistControlProps) {
  const { handleSerchChange, toggleShowOptions, showOptions } = getContext();

  return (
    <div className="relative mb-2">
      <Input.Control
        type="text"
        className={twMerge("peer *:pr-6", className)}
        onChange={handleSerchChange}
        {...props}
      />
      <ChevronUp
        onClick={toggleShowOptions}
        data-direction={showOptions ? "down" : "up"}
        className="data-[direction=down]:rotate-180 transition-all duration-300 absolute -translate-y-1/2 top-1/2 right-2 text-zinc-500 stroke-2"
      />
    </div>
  );
}
