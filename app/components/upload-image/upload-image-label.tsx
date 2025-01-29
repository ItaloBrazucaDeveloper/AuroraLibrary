import { ComponentProps } from "react";

type UploadImageLabelProps = ComponentProps<'label'>;

export function UploadImageLabel({ ...props }: UploadImageLabelProps) {
  return <label {...props} />;
}