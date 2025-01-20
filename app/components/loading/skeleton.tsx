import { ComponentProps } from 'react';

type SkeletonLoadingProps = ComponentProps<'div'> & {
	
};

export function SkeletonLoading({ ...props }: SkeletonLoadingProps) {
	return <div className='' />;
}
