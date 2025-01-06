import { ComponentProps } from 'react';

type ModalContentProps = ComponentProps<'div'>;

export function ModalContent({ className, ...props }: ModalContentProps) {
	return <div className="flex flex-col gap-7 px-5 py-3" {...props} />;
}
