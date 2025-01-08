import { ElementRef, useRef } from 'react';

export function useModal() {
	const modalRef = useRef<ElementRef<'dialog'>>(null);

	function openModal() {
		modalRef.current?.showModal();
	}

	function closeModal() {
		modalRef.current?.close();
	}

	return {
		modalRef,
		openModal,
		closeModal,
	};
}
