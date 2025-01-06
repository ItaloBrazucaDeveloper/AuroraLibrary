import { ComponentProps } from 'react';

type SelectProps = ComponentProps<'select'>;

export function SelectOptions({ ...props }: SelectProps) {
	return (
		<select
			{...props}
			className="outline outline-1 outline-zinc-300 px-3 py-2 rounded-md"
		/>
	);
}
