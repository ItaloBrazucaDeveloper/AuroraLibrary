import { ComponentProps, MouseEvent } from 'react';

type ModalContainerProps = ComponentProps<'dialog'> & {
	hasBackdrop?: boolean;
	onBackdropClicked?: (e: MouseEvent<HTMLDivElement>) => void;
};

export function ModalContainer({
	hasBackdrop = true,
	onBackdropClicked,
	open = false,
	...props
}: ModalContainerProps) {
	return (
		open && (
			<div
				className={
					hasBackdrop ? 'absolute inset-0 bg-zinc-950/40 size-full' : ''
				}
				onClick={onBackdropClicked}
			>
				<dialog
					open={true}
					className="z-50 inset-0 shadow backdrop:bg-zinc-900 rounded-lg scrollbar-hide"
					aria-modal="true"
					role="dialog"
					{...props}
				/>
			</div>
		)
	);
}
