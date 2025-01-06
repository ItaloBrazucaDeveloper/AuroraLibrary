import { ComponentProps } from 'react';

type SelectOptionProps = ComponentProps<'option'>;

export function SelectOption({ ...props }: SelectOptionProps) {
	return <option {...props} />;
}
