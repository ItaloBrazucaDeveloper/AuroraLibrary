import { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

type NavContentProps = ComponentProps<'div'> & {
	open?: boolean;
};

const navContent = tv({
	base: [
		'flex flex-col justify-between px-2 flex-1 overflow-y-auto scrollbar-hide',
		'mt-5 space-y-3 hidden data-[open=true]:flex md:flex',
	],
	variants: {
		open: {
			true: 'absolute inset-0 top-14 z-10 p-2 bg-white',
		},
	},
});

export function NavContent({ open = false, ...props }: NavContentProps) {
	return <nav data-open={open} className={navContent({ open })} {...props} />;
}
