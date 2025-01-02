import { createContext, useContext, useId, useState } from 'react';

interface ModalContextProps {
	formId: string;
	isOpen: boolean;
	handleIsOpen: (isOpen: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>(
	{} as ModalContextProps,
);

export function getProviders() {
	const formId = useId();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function handleIsOpen(isOpen: boolean) {
		setIsOpen(oldIsOPen => {
			console.log(oldIsOPen);
			console.log(isOpen);
			return isOpen;
		});
	}

	return {
		formId,
		isOpen,
		handleIsOpen,
	};
}

export function getContext() {
	return useContext<ModalContextProps>(ModalContext);
}
