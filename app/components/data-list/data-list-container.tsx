import { Input } from "@components/input";
import { ComponentProps } from "react";

export function DataListContainer(props: ComponentProps<"div">) {
  return <Input.Container {...props} />;
}
