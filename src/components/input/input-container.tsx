import { ComponentProps } from 'react';

type InputContainerProps = ComponentProps<'div'>;

export function InputContainer({ ...props }: InputContainerProps) {
	return <div {...props} />;
}
