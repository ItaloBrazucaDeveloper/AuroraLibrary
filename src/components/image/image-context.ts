import { createContext, useState } from 'react';

export interface ImageContextProps {
	isLoaded: boolean;
	handleIsLoaded: (isLoading: boolean) => void;
}

export const ImageContext = createContext<ImageContextProps>(
	{} as ImageContextProps,
);

export function getProviders(): ImageContextProps {
	const [isLoaded, setIsLoaded] = useState<boolean>(true);

	function handleIsLoaded(isLoading: boolean) {
		setIsLoaded(isLoading);
	}

	return {
		isLoaded,
		handleIsLoaded,
	};
}
