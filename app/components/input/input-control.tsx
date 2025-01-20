import { LucideProps } from 'lucide-react';
import { ComponentProps, ComponentType, forwardRef } from 'react';

import { tv } from 'tailwind-variants';
import { getContext } from './input-context';
import { InputErrorMessage } from './input-error-message';

type InputControlProps = ComponentProps<'input'> & {
	inputMask?: string;
	icon?: ComponentType<LucideProps>;
	error?: string | null;
};

const inputControl = tv({
	base: [
		'border-0 outline outline-1 outline-zinc-300 bg-none rounded-md px-3 py-1 w-full',
		'focus:ring-2 focus:ring-zinc-300',
	],
	variants: {
		danger: {
			true: 'ring-2 ring-rose-500',
		},
	},
});

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
	({ className, icon: Icon, inputMask, error, ...props }, ref) => {
		const { inputId } = getContext();

		return (
			<>
				<input
					ref={ref}
					id={inputId}
					className={inputControl({ danger: !!error, className })}
					{...props}
				/>
				{error && <InputErrorMessage message={error} />}
			</>
		);
	},
);
