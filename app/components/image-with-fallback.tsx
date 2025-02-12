import { ComponentProps, ReactNode, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Show } from './utils/show';

type ImageSourceProps = ComponentProps<'img'> & {
	fallback?: ReactNode;
};

export const ImageWithFallback = ({
	src = '',
	fallback,
	className,
	...props
}: ImageSourceProps) => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		const image = new Image();
		image.onload = () => setIsLoaded(true);
		image.onerror = () => setIsLoaded(false);
		image.src = src;
	}, []);

	return (
		<div className={twMerge('overflow-hidden', className)}>
			<Show condition={isLoaded} fallback={fallback}>
				<img src={src} className="size-full object-cover" {...props} />
			</Show>
		</div>
	);
};
