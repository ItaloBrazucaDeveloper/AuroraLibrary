import { createContext, useContext, useId } from 'react';

interface InputContextProps {
	inputId: string;
}

export const InputContext = createContext<InputContextProps>(
	{} as InputContextProps,
);

export function getProviders() {
	return {
		inputId: useId(),
	};
}

export function getContext() {
	return useContext(InputContext);
}
