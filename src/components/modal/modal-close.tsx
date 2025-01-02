import { XIcon } from 'lucide-react';
import { ComponentProps } from 'react';
import { getContext } from './modal-context';

type ModalCloseProps = ComponentProps<'button'> & {
	
};

export function ModalClose({ ...props }: ModalCloseProps) {
	const { formId, handleIsOpen } = getContext();

	return (
		<button form={formId} onClick={() => handleIsOpen(false)} {...props}>
			<XIcon className="bg-rose-300 rounded-full p-0.5 size-5" />
		</button>
	);
}
