import { LucideProps } from 'lucide-react';
import { ComponentProps, ComponentType } from 'react';
import { tv } from 'tailwind-variants';

export type ButtonProps = ComponentProps<'button'> & {
	variant?: 'dark' | 'outlined';
	icon?: ComponentType<LucideProps>;
};

const button = tv({
	base: [
		'group flex items-center justify-center gap-2 border-none border-none',
		'hover:opacity-80 disabled:hover:opacity-100 rounded-lg px-3 py-1',
	],
	variants: {
		theme: {
			dark: 'bg-zinc-800 text-zinc-100',
			outlined: 'bg-none ring ring-1 ring-zinc-300',
		},
	},
});

export function Button({
	variant = 'outlined',
	icon: Icon,
	className,
	children,
	...props
}: ButtonProps) {
	return (
		<button
			data-theme={variant}
			className={button({ theme: variant, className })}
			{...props}
		>
			{Icon && (
				<Icon className="size-5 stroke-2 group-data-[theme='outlined']:opacity-65" />
			)}
			{children}
		</button>
	);
}
