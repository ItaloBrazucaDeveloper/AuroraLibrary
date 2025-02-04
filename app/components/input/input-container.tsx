import { ComponentProps } from 'react';
import { VariantProps, tv } from 'tailwind-variants';
import { InputContext, getProviders } from './input-context';

type InputContainerProps = ComponentProps<'div'> &
	VariantProps<typeof inputContainer>;

const inputContainer = tv({
	base: 'relative flex flex-col gap-2 rounded-lg w-full',
	variants: {
		rowDirection: {
			true: 'flex-row',
		},
	},
});

export function InputContainer({
	rowDirection = false,
	className,
	...props
}: InputContainerProps) {
	const providers = getProviders();

	return (
		<InputContext.Provider value={providers}>
			<div className={inputContainer({ rowDirection, className })} {...props} />
		</InputContext.Provider>
	);
}
