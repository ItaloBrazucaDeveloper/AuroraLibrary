import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { getProviders, ImageContext } from "./image-context";

type ImageContainerProps = ComponentProps<'div'>;

export function ImageContainer({ className, ...props }: ImageContainerProps) {
  return (
    <ImageContext.Provider value={getProviders()}>

      <div className={twMerge('', className)} {...props} />

    </ImageContext.Provider>
  );
}