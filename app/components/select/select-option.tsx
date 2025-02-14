import { ComponentProps } from "react"

type SelectOptionProps = Omit<ComponentProps<'option'>, 'value'> & {
  optionId: string | number;
};

export function SelectOption({ optionId, ...props }: SelectOptionProps) {
  return <option value={optionId} className="" {...props} />
}