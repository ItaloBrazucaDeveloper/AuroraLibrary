import { XIcon } from "lucide-react";
import { ComponentProps } from "react";

type ModalCloseProps = ComponentProps<'button'>;

export function ModalClose({ ...props }: ModalCloseProps) {
  return (
    <button {...props}>
      <XIcon className="bg-rose-300 rounded-full p-0.5 size-5" />
    </button>
  );
}