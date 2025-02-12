import { ComponentProps, MouseEvent } from 'react';
import { tv } from 'tailwind-variants';

type ModalContainerProps = ComponentProps<'dialog'> & {
	hasBackdrop?: boolean;
	onBackdropClicked?: (e: MouseEvent<HTMLDivElement>) => void;
};

const modalContainer = tv({
	slots: {
		modal: 'scrollbar-hide fixed z-50 inset-0 shadow rounded-lg',
		backdrop: 'fixed z-50 size-full bg-zinc-950/50',
	},
	variants: {
		open: {
			true: {
				modal: 'animate-appear',
				backdrop: 'block',
			},
			false: {
				modal: 'animate-disappear',
				backdrop: 'hidden',
			},
		},
	},
});

export function ModalContainer({
	open,
	onBackdropClicked,
	hasBackdrop = true,
	...props
}: ModalContainerProps) {
	const { modal, backdrop } = modalContainer({ open });

	return (
		<>
			{hasBackdrop && (
				<div className={backdrop()} onClick={onBackdropClicked} />
			)}
			<dialog className={modal()} {...props} />
		</>
	);
}
