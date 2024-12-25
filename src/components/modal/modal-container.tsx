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
			className="inset-0 z-10 rounded-lg shadow backdrop:backdrop-blur-sm"
			onClick={onBackdropClicked}
			{...props}
		/>
	);
});
