import {
	ComponentProps,
	ElementRef,
	ReactNode,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Show } from './utils/show';

type ImageSourceProps = ComponentProps<'img'> & {
	fallback?: ReactNode;
};

export function Image({
	src,
	fallback,
	className,
	...props
}: ImageSourceProps) {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const imageRef = useRef<ElementRef<'img'>>(null);

	useEffect(() => {
		if (imageRef.current) {
			setIsLoaded(imageRef.current.naturalWidth > 0);
		}
	}, [imageRef.current?.complete]);

	return (
		<div className={`overflow-hidden ${className}`}>
			<Show condition={!isLoaded}>{fallback}</Show>
			<img
				src={src}
				ref={imageRef}
				onLoad={() => setIsLoaded(true)}
				onError={() => setIsLoaded(false)}
				className={`${!isLoaded ? 'hidden' : 'size-full object-contain'}`}
				{...props}
			/>
		</div>
	);
}
