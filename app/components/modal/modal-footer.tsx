import { ComponentProps } from 'react';

type ModalFooterProps = ComponentProps<'footer'>;

export function ModalFooter({ ...props }: ModalFooterProps) {
	return <footer className='flex justify-end gap-3 mt-auto' {...props} />;
}
