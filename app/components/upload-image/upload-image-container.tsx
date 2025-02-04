import { ComponentProps } from 'react';

type UploadImageContainerProps = ComponentProps<'div'>;

export function UploadImageContainer({ ...props }: UploadImageContainerProps) {
	return <div className="relative min-w-[420px] space-y-2" {...props} />;
}
