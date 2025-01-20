import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { InputContext, getProviders } from './input-context';

type InputContainerProps = ComponentProps<'div'> & {
	flowDirection?: 'row' | 'col';
};

export function InputContainer({
	flowDirection = 'col',
	className,
	...props
}: InputContainerProps) {
	const providers = getProviders();
	
	return (
		<InputContext.Provider value={providers}>
			<div
				className={twMerge(
					`relative flex flex-${flowDirection} gap-2`,
					className,
				)}
				{...props}
			/>
		</InputContext.Provider>
	);
}
