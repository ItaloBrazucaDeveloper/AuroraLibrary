import { ComponentProps } from 'react';
import {
	RadioGroupContext,
	RadioGroupControlValue,
	getProviders,
} from './radio-group-context';

type RadioGroupContainerProps = ComponentProps<'ul'> & {
	name: string;
	defaultSelected?: string;
	onChangeSelected?: (value: RadioGroupControlValue) => void;
};

export function RadioGroupContainer({
	name = '',
	defaultSelected = '',
	onChangeSelected,
	className,
	...props
}: RadioGroupContainerProps) {
	const providers = getProviders(name, defaultSelected, onChangeSelected);

	return (
		<RadioGroupContext.Provider value={providers}>
			<ul {...props} className={className} />
		</RadioGroupContext.Provider>
	);
}
