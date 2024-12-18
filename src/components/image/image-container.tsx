import { ComponentProps } from 'react';
import { ImageContext, getProviders } from './image-context';

type ImageContainerProps = ComponentProps<'div'>;

export function ImageContainer({ ...props }: ImageContainerProps) {
	const providers = getProviders();

	return (
		<ImageContext.Provider value={providers}>
			<div {...props} />
		</ImageContext.Provider>
	);
}
