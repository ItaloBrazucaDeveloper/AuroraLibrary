import { ComponentProps } from 'react';

type SelectProps = ComponentProps<'div'>;

export function SelectContainer({ ...props }: SelectProps) {
	return <div className='flex flex-col gap-1' {...props} />;
}
