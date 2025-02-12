import { ComponentProps, forwardRef } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

type InputControlProps = {
	mask?: string;
} & ComponentProps<'input'> &
	VariantProps<typeof inputControl>;

const inputControl = tv({
	base: [
		'outline outline-1 outline-zinc-300 shadow',
		'focus-within:outline focus-within:outline-2 focus-within:outline-zinc-300',
		'w-full rounded-lg overflow-hidden px-3 py-2',
	],
	variants: {
		outline: {
			danger: 'outline-rose-500',
		},
	},
});

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
	({ className, mask, outline, ...props }, ref) => {
		return (
			<div className={inputControl({ outline, className })}>
				<input
					ref={ref}
					className="border-0 outline-0 bg-transparent size-full [&[type=search]]:clear-button-serch-input"
					{...props}
				/>
			</div>
		);
	},
);
