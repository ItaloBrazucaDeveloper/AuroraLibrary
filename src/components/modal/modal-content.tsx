import { ComponentProps, useContext } from 'react';
import { ModalContext } from './modal-context';

type ModalContentProps = ComponentProps<'form'>;

export function ModalContent({ ...props }: ModalContentProps) {
	const { formId } = useContext(ModalContext);

	return (
		<form
			id={formId}
			method="dialog"
			className="flex flex-col gap-7 px-6 py-4 min-w-96 min-h-80"
			{...props}
		/>
	);
}
