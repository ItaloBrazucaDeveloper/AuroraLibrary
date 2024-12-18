import { ComponentProps, useState } from 'react';
import { RadioGroupContext, RadioGroupControlValue } from './radio-group-context';

type RadioGroupContainerProps = ComponentProps<'ul'> & {
	defaultValue?: string;
	name: string;
	onChangeSelected?: (value: RadioGroupControlValue) => void;
};

export function RadioGroupContainer({
	name,
	defaultValue = '',
	onChangeSelected,
	...props
}: RadioGroupContainerProps) {
	const [selected, setSelected] = useState<RadioGroupControlValue>(defaultValue);

	function handleChange(value: RadioGroupControlValue) {
		setSelected(value);
		onChangeSelected?.(selected);
	}

	const providers = {
		name,
		defaultValue,
		handleChange,
	};

	return (
		<RadioGroupContext.Provider value={providers}>
			<ul {...props} className="" />
		</RadioGroupContext.Provider>
	);
}
