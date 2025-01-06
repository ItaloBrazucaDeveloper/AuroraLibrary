import { LucideProps } from 'lucide-react';
import { ComponentProps, ComponentType, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type InputControlProps = ComponentProps<'input'> & {
	mask?: () => void;
	icon?: ComponentType<LucideProps>;
};

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
	({ className, type = 'text', icon: Icon, ...props }, ref) => {
		return (
			<input
				ref={ref}
				type={type}
				className={twMerge(
					'border-0 outline outline-1 outline-zinc-300 bg-none rounded-md px-3 py-2 w-full',
					className,
				)}
				{...props}
			/>
		);
	},
);
