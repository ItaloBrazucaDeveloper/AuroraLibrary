import { ComponentProps } from "react";

type UploadImageContainerProps = ComponentProps<'div'>;

export function UploadImageContainer({ ...props }: UploadImageContainerProps) {
  return <div className="grid grid-cols-2 gap-2" {...props} />;
}