import { ComponentProps, MouseEvent } from 'react';
import { tv } from 'tailwind-variants';

type ModalContainerProps = ComponentProps<'dialog'> & {
	hasBackdrop?: boolean;
	onBackdropClicked?: (e: MouseEvent<HTMLDivElement>) => void;
};

const modalContainer = tv({
	slots: {
		modal: 'scrollbar-hide fixed z-50 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 shadow rounded-lg min-w-96',
		backdrop: 'fixed inset-0 z-50 size-full bg-zinc-950/50',
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
			<dialog open={open} className={modal()} {...props} />
		</>
	);
}
