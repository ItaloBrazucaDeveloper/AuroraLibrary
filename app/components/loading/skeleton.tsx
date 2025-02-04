import { VariantProps, tv } from 'tailwind-variants';
import { loading } from './styles-variants';

type SkeletonLoadingProps = VariantProps<typeof skeletonLoading>;

const skeletonLoading = tv({
	extend: loading,
	base: '',
	variants: {
		format: {
			circle: 'rounded-full',
			square: 'rounded-md',
			text: '',
		},
	},
});

export function SkeletonLoading({ size, format }: SkeletonLoadingProps) {
	return <div className={skeletonLoading({ format, size })} />;
}
