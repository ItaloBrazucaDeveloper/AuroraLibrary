import { ComponentProps } from 'react';
import { getContext } from './modal-context';

type ModalTriggerProps = ComponentProps<'div'>;

export function ModalTrigger({ ...props }: ModalTriggerProps) {
	const { handleIsOpen } = getContext();

	return <div onClick={() => handleIsOpen(true)} {...props} />;
}
