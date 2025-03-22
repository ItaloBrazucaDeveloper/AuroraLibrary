import { MapList } from "@components/map-list";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { getContext } from "./data-list-context";

type DataListOptionsProps = {
  className?: string;
  list: string[];
  callback: (item: string, index: number) => ReactNode;
};

export function DataListOptions({
  className,
  list = [],
  callback,
  ...props
}: DataListOptionsProps) {
  const { showOptions } = getContext();

  return (
    <ul
      className={twMerge(
        "max-h-80 border border-zinc-300 shadow rounded-md block transition-all",
        showOptions ? "block" : "hidden",
        className
      )}
      {...props}
    >
      <MapList list={list} callback={callback} />
    </ul>
  );
}
