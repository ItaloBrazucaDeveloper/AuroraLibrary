import { Input } from "@components/input";
import { ComponentProps } from "react";
import { DatalistContext, getProviders } from "./data-list-context";

export function DataListContainer({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <DatalistContext.Provider value={getProviders()}>
      <Input.Container className="group" {...props} />
    </DatalistContext.Provider>
  );
}
