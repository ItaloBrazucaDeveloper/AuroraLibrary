import { ComponentProps, MouseEvent, forwardRef } from 'react';
import { ModalContext, getProviders } from './modal-context';

type ModalContainerProps = ComponentProps<'dialog'>;

export const ModalContainer = forwardRef<
	HTMLDialogElement,
	ModalContainerProps
>(({ ...props }, ref) => {
	const providers = getProviders();

	function onBackdropClicked(e: MouseEvent<HTMLDialogElement>) {
		if (e.target === e.currentTarget) {
			e.currentTarget.close();
		}
	}

	return (
		<ModalContext.Provider value={providers}>
			<dialog
				ref={ref}
				className="inset-0 z-10 rounded-lg shadow backdrop:backdrop-blur-sm"
				onClick={onBackdropClicked}
				{...props}
			/>
		</ModalContext.Provider>
	);
});
