import { NavLink, NavLinkProps } from 'react-router';
import { tv } from 'tailwind-variants';

const navAnchor = tv({
	base: 'flex items-center gap-2 text-zinc-500 hover:opacity-80 transition-all duration-200',
	variants: {
		isActive: {
			true: [
				'relative text-zinc-900 after:absolute after:top-full after:-left-2',
				'after:h-0.5 after:w-1/2 after:ml-2 after:bg-zinc-800 after:mt-1',
			],
		},
		isPending: {
			true: 'bg-zinc-900',
		},
		isTransitioning: {
			true: 'bg-zinc-900',
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
