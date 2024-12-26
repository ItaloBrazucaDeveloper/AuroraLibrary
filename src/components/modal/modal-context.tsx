import { createContext, useId } from 'react';

interface ModalContext {
	formId: string;
}

export const ModalContext = createContext<ModalContext>({} as ModalContext);

export function getProviders() {
	const formId = useId();

	return {
		formId,
	};
}
