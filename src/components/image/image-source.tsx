import { ComponentProps, useContext } from 'react';

type ImageSourceProps = ComponentProps<'img'>;

import { Show } from '../utils/show';
import { ImageContext, ImageContextProps } from './image-context';

export function ImageSource({ ...props }: ImageSourceProps) {
	const { isLoaded, handleIsLoaded } =
		useContext<ImageContextProps>(ImageContext);

	return (
		<Show condition={isLoaded}>
			<img {...props} onError={() => handleIsLoaded(false)} />
		</Show>
	);
}
