import { LucideProps } from 'lucide-react';
import { ComponentProps, ComponentType } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentProps<'button'> & {
	variant?: 'default' | 'dark' | 'outlined';
	icon?: ComponentType<LucideProps>;
};

export function Button({
	variant = 'default',
	className,
	icon: Icon,
	children,
	...props
}: ButtonProps) {
	const styles = {
		default:
			'group flex items-center gap-2 border-none border-none hover:opacity-80 rounded-lg px-3 py-1',
		dark: 'bg-zinc-800 text-zinc-100',
		outlined: 'bg-none ring ring-1 ring-zinc-300',
	};

	return (
		<button
			data-theme={variant}
			className={twMerge(styles.default, styles[variant], className)}
			{...props}
		>
			{Icon && (
				<Icon className="size-5 stroke-2 group-data-[theme='outlined']:opacity-65" />
			)}
			{children}
		</button>
	);
}
