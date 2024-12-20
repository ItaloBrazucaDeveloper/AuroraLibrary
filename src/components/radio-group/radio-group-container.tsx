import { ComponentProps } from 'react';
import {
	RadioGroupContext,
	RadioGroupControlValue,
	getProviders,
} from './radio-group-context';

type RadioGroupContainerProps = ComponentProps<'ul'> & {
	defaultSelected?: string;
	name: string;
	onChangeSelected?: (value: RadioGroupControlValue) => void;
};

export function RadioGroupContainer({
	name = '',
	defaultSelected = '',
	onChangeSelected,
	...props
}: RadioGroupContainerProps) {
	const providers = getProviders(name, defaultSelected, onChangeSelected);

	return (
		<RadioGroupContext.Provider value={providers}>
			<ul {...props} className="" />
		</RadioGroupContext.Provider>
	);
}
