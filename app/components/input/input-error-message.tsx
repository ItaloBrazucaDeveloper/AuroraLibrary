import { ComponentProps } from 'react';

type InputErrorMessageProps = ComponentProps<'span'> & {
	message: string | null;
};

export function InputErrorMessage({
	message = null,
	...props
}: InputErrorMessageProps) {
	return (
		<span className="text-rose-600 font-light" {...props}>
			{message}
		</span>
	);
}
