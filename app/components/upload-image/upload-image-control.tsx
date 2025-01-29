import { ComponentProps } from "react";

type UploadImageControlProps = Omit<ComponentProps<'input'>, 'type'>;

export function UploadImageControl({ ...props }: UploadImageControlProps) {
  return <input type="file" {...props} />;
}