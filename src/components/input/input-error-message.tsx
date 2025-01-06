import { ComponentProps } from 'react';

type InputErrorMessageProps = ComponentProps<'span'> & {
	message?: string;
};

export function InputErrorMessage({
	message,
	...props
}: InputErrorMessageProps) {
	return (
		message && (
			<span className="text-rose-600 font-light" {...props}>
				{message}
			</span>
		)
	);
}
