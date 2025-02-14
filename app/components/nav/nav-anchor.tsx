import { NavLink, NavLinkProps } from 'react-router';
import { tv } from 'tailwind-variants';

const navAnchor = tv({
	base: [
		'flex items-center gap-2 text-zinc-500 after:absolute after:top-full relative',
		'after:-left-3 after:h-0.5 after:w-1/2 after:ml-2 after:bg-zinc-800 after:mt-1',
		'after:scale-x-0 hover:after:animate-underline-appear transition-all'
	],
	variants: {
		isActive: {
			true: 'text-zinc-900 after:scale-x-50 hover:opacity-80',
		},
		isPending: {
			true: 'animate-pulse',
		},
		isTransitioning: {
			true: 'after:animate-underline-appear',
		},
	},
});

type NavAnchorProps = Omit<NavLinkProps, 'className'> & {
	className?: string;
};

export function NavAnchor({ to, className, ...props }: NavAnchorProps) {
	return (
		<NavLink
			to={to}
			className={({ isActive, isPending, isTransitioning }) =>
				navAnchor({ isActive, isPending, isTransitioning, className })
			}
			{...props}
		/>
	);
}
