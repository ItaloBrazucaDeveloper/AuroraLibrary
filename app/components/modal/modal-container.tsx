import { ComponentProps, MouseEvent, forwardRef } from 'react';

type ModalContainerProps = ComponentProps<'dialog'>;

export const ModalContainer = forwardRef<
	HTMLDialogElement,
	ModalContainerProps
>(({ ...props }, ref) => {
	function onBackdropClicked(e: MouseEvent<HTMLDialogElement>) {
		if (e.target === e.currentTarget) {
			e.currentTarget.close();
		}
	}

	return (
		<dialog
			ref={ref}
			onClick={onBackdropClicked}
			className="shadow backdrop:backdrop-blur-sm rounded-lg scrollbar-hide"
			role="dialog"
			aria-modal="true"
			{...props}
		/>
	);
});
