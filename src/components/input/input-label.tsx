import { ComponentProps } from 'react';

type InputLabelProps = ComponentProps<'label'>;

export function InputLabel({ ...props }: InputLabelProps) {
	return <label {...props} />;
}
