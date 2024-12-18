import { ComponentProps, useContext } from 'react';

type ImageFallbackProps = ComponentProps<'div'>;

import { Show } from '../utils/show';
import { ImageContext } from './image-context';
import { ImageContextProps } from './image-context';

export function ImageFallback({ ...props }: ImageFallbackProps) {
	const { isLoaded } = useContext<ImageContextProps>(ImageContext);

	return (
		<Show condition={!isLoaded}>
			<div {...props} />
		</Show>
	);
}
