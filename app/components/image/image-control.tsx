import { ComponentProps, useEffect } from "react";
import { getContext } from "./image-context";
import { Show } from "@components/show";
import { twMerge } from "tailwind-merge";

type ImageControlProps = ComponentProps<"img">;

export function ImageControl({ className, src, ...props }: ImageControlProps) {
  const { setImageSrc, state } = getContext();

  useEffect(() => {
    setImageSrc(src ?? "");
  }, [src]);

  return (
    <Show condition={state.showFallback === false}>
      <img className={twMerge("", className)} src={src} {...props} />
    </Show>
  );
}
