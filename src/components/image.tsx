import { ComponentProps, ReactNode, useState } from 'react';
import { Show } from './utils/show';

type ImageSourceProps = ComponentProps<'img'> & {
	fallback?: ReactNode;
};

export function Image({ fallback, className, ...props }: ImageSourceProps) {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	return (
		<div className={`overflow-hidden ${className}`}>
			<Show condition={!isLoaded}>{fallback}</Show>
			<img
				onError={() => setIsLoaded(false)}
				onLoad={() => setIsLoaded(true)}
				className={`${!isLoaded ? 'hidden' : 'size-full object-contain'}`}
				{...props}
			/>
		</div>
	);
}
