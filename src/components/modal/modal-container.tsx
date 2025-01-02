import { ComponentProps } from 'react';
import { ModalContext, getProviders } from './modal-context';

type ModalContainerProps = ComponentProps<'div'>;

export function ModalContainer({ children }: ModalContainerProps) {
	const providers = getProviders();

	return (
		<ModalContext.Provider value={providers}>{children}</ModalContext.Provider>
	);
}
