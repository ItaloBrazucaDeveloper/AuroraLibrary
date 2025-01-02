import { ComponentProps, MouseEvent, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { getContext } from './modal-context';

type ModalContentProps = ComponentProps<'dialog'>;

export function ModalContent({ children, ...props }: ModalContentProps) {
	const { isOpen, formId, handleIsOpen } = getContext();

	const modalRef = useRef<HTMLDialogElement>(null);

	function onBackdropClicked(e: MouseEvent<HTMLDialogElement>) {
		if (e.target === e.currentTarget) {
			handleIsOpen(false);
		}
	}

	useEffect(() => {
		if (isOpen) {
			modalRef.current?.showModal();
		} else {
			modalRef.current?.close();
		}
	}, [isOpen]);

	return createPortal(
		<dialog
			ref={modalRef}
			onClick={onBackdropClicked}
			className="inset-0 z-10 rounded-lg shadow backdrop:backdrop-blur-sm"
			{...props}
		>
			<form
				id={formId}
				method="dialog"
				className="flex flex-col gap-7 px-6 py-4 min-w-96 min-h-80"
			>
				{children}
			</form>
		</dialog>,
		document.querySelector('#root') as HTMLElement,
	);
}
