import { XIcon } from 'lucide-react';
import { ComponentProps, useContext } from 'react';
import { ModalContext } from './modal-context';

type ModalCloseProps = ComponentProps<'button'>;

export function ModalClose({ ...props }: ModalCloseProps) {
	const { formId } = useContext(ModalContext);

	return (
		<button form={formId} {...props}>
			<XIcon className="bg-rose-300 rounded-full p-0.5 size-5" />
		</button>
	);
}
