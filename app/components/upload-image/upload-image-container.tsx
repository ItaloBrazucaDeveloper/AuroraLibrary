import { ComponentProps } from 'react';

type UploadImageContainerProps = ComponentProps<'div'>;

export function UploadImageContainer({ ...props }: UploadImageContainerProps) {
	return <div className="grid gap-2 relative" {...props} />;
}
