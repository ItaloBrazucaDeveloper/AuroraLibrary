import { ComponentProps, useId } from "react";
import { tv } from "tailwind-variants";

type DataListOptionProps = ComponentProps<"li"> & {
  selected?: boolean;
  name: string;
};

const datalistOption = tv({
  base: "relative p-2 hover:bg-zinc-50 border-b border-zinc-200 first:rounded-t-md last:rounded-b-md",
  variants: {
    selected: {
      true: "bg-emerald-100/55 hover:bg-emerald-100/70",
      false: "",
    },
  },
});

export function DataListOption({
  key,
  children,
  selected = false,
  onClick,
  name,
}: DataListOptionProps) {
  const id = useId();

  return (
    <li className={datalistOption({ selected })} key={key} onClick={onClick}>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        name={name}
        type="radio"
        className="absolute size-full inset-0 opacity-0"
      />
    </li>
  );
}
