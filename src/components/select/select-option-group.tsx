import { ComponentProps } from 'react';

type SelectOptionGroup = ComponentProps<'optgroup'>;

export function SelectOptionGroup({ ...props }: SelectOptionGroup) {
	return <optgroup {...props} />;
}
