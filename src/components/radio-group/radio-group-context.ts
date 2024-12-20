import { createContext, useState } from 'react';

export type RadioGroupControlValue =
	| string
	| number
	| readonly string[]
	| undefined;

export interface RadioGroupContextProps {
	name: string;
	defaultSelected: RadioGroupControlValue;
	handleChange: (value: RadioGroupControlValue) => void;
}

export const RadioGroupContext = createContext<RadioGroupContextProps>(
	{} as RadioGroupContextProps,
);

export function getProviders(
	name: string,
	defaultSelected: RadioGroupControlValue,
	onChangeSelected?: (value: RadioGroupControlValue) => void,
) {
	const [selected, setSelected] =
		useState<RadioGroupControlValue>(defaultSelected);

	function handleChange(value: RadioGroupControlValue) {
		setSelected(value);
		onChangeSelected?.(selected);
	}

	return {
		name,
		defaultSelected,
		handleChange,
	};
}
