import { ComponentProps } from "react"

type SelectContainerProps = ComponentProps<'select'>;

export function SelectContainer({ ...props }: SelectContainerProps) {
  return <select className="" {...props} />;
}