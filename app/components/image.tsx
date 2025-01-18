import {
	ComponentProps,
	ElementRef,
	ReactNode,
	memo,
	useEffect,
	useRef,
	useState,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { Show } from './utils/show';

type ImageSourceProps = ComponentProps<'img'> & {
	fallback?: ReactNode;
};

memo(() => {
	return <></>;
});

export const Image = memo(
	({ src, fallback, className, ...props }: ImageSourceProps) => {
		const [isLoaded, setIsLoaded] = useState<boolean>(false);
		const imageRef = useRef<ElementRef<'img'>>(null);

		useEffect(() => {
			if (imageRef.current) {
				setIsLoaded(imageRef.current.naturalWidth > 0);
			}
		}, [imageRef.current?.complete]);

		return (
			<div className={twMerge('overflow-hidden', className)}>
				<Show condition={!isLoaded}>{fallback}</Show>
				<img
					src={src}
					ref={imageRef}
					onLoad={() => setIsLoaded(true)}
					onError={() => setIsLoaded(false)}
					className={!isLoaded ? 'hidden' : 'size-full object-cover'}
					{...props}
				/>
			</div>
		);
	},
);
