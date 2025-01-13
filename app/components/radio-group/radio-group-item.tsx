import { ComponentProps } from 'react';

type RadioGroupItemProps = ComponentProps<'li'>;

export function RadioGroupItem({ ...props }: RadioGroupItemProps) {
	return <li {...props} />;
}
