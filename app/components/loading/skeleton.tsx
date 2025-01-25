import { tv, VariantProps } from 'tailwind-variants';

const skeletonLoading = tv({
	base: '',
	variants: {
		format: {
			circle: '',
			square: '',
			text: '',
		},
		size: {
			xs: '',
			sm: '',
			lg: '',
			xl: '',
		},
	},
	compoundVariants: [
		{
			
		}
	]
});

type SkeletonLoadingProps = VariantProps<typeof skeletonLoading>;

export function SkeletonLoading({ size, format }: SkeletonLoadingProps) {
	return <div className={skeletonLoading({ format, size })} />;
}
