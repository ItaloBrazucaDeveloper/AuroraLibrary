import { ComponentProps } from 'react';

type SelectLabelProps = ComponentProps<'label'>;

export function SelectLabel({ ...props }: SelectLabelProps) {
	return <label {...props} />;
}
