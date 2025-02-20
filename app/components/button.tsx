import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: [
    "group flex items-center justify-center gap-2 border-none border-none transition-all",
    "hover:opacity-80 disabled:hover:opacity-100 hover:cursor-pointer rounded-lg px-3 py-1",
  ],
  variants: {
    theme: {
      dark: "bg-zinc-800 text-zinc-100",
      outlined: "bg-none ring ring-1 ring-zinc-300 hover:opacity-60",
      "no-outlined": "ring-none",
      disabled: "",
    },
  },
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export function Button({
  theme = "outlined",
  className,
  ...props
}: ButtonProps) {
  return <button className={button({ theme, className })} {...props} />;
}
