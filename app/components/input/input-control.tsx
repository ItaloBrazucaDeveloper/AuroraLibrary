import { ComponentProps, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

type InputControlProps = {
	mask?: string;
} & ComponentProps<'input'> &
	VariantProps<typeof inputControl>;

const inputControl = tv({
	base: [
		'outline outline-1 outline-zinc-300 shadow w-full rounded-lg overflow-hidden',
		'focus-within:outline focus-within:outline-2 focus-within:outline-zinc-300',
		'px-3 py-2',
	],
	variants: {
		theme: {
			danger: 'outline-rose-500',
		},
	},
});

export function InputControl({ ref, className, mask, theme, ...props }: InputControlProps) {
	return (
		<div className={inputControl({ theme, className })}>
			<input
				ref={ref}
				className="border-0 outline-0 bg-transparent size-full"
				{...props}
			/>
		</div>
	);
};
