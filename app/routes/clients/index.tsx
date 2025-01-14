import { Button } from '@components/button';
import { DataTable } from '@components/data-table';
import { HeaderRoute } from '@components/header-route';
import { Input } from '@components/input';
import { Modal } from '@components/modal';

import type { ClientType } from '~types/client-type';
import { ClientForm } from './client-form';

import { useFetchApi } from '@hooks/useFetchApi';
import { useModal } from '@hooks/useModal';

import { FilterIcon, SearchIcon, UserPlusIcon, XIcon } from 'lucide-react';
import { type ReactNode, useId, useState } from 'react';
import { Route } from './+types';

import { ClientAddress } from './client-address';

type DataTableClientsType = Array<
	Omit<ClientType, 'id_user' | 'address'> & {
		Address: ReactNode;
	}
>;

export async function loader() {
	try {
		const api = useFetchApi();
		const clients = await api.get<ClientType[]>('/users');
		return clients;
	} catch (error) {
		console.error(error);
	}
}

export default function Clients({ loaderData: clients }: Route.ComponentProps) {
	const [selectedClient, setSelectedClient] = useState<ClientType>();

	const modalClientFormId = useId();
	const modalClientForm = useModal();
	const modalDeleteClient = useModal();

	function onActionsClicked(action: 'edit' | 'delete', dataRow: {}) {
		if (action === 'edit') {
			setSelectedClient(dataRow as ClientType);
			modalClientForm.openModal();
		} else if (action === 'delete') {
			modalDeleteClient.openModal();
		}
	}

	return (
		<>
			<HeaderRoute routeName="Clientes" action="Listagem" />
			<div className="flex justify-between mx-2 mt-5">
				<Button
					icon={FilterIcon}
					variant="outlined"
					className="h-fit rounded-md"
				>
					Filtros
				</Button>
				<div className="flex gap-5">
					<Input.Container flowDirection="row" className="items-center gap-2">
						<Input.Label
							title="Buscar"
							htmlFor="serch-client"
							className="outline outline-1 outline-zinc-300 p-1.5 rounded-full"
						>
							<SearchIcon className="size-5 text-zinc-600" />
						</Input.Label>
						<Input.Control
							id="serch-client"
							type="text"
							placeholder="Buscar por cliente..."
							className="rounded-full px-4 focus:outline-2 focus:outline-zinc-300 w-64"
						/>
					</Input.Container>
					<Button
						variant="dark"
						icon={UserPlusIcon}
						title="Cadastrar cliente"
						onClick={() => modalClientForm.openModal()}
						className="p-4 absolute bottom-0 right-0 m-8 rounded-full md:m-0 md:px-4 md:py-1 md:rounded-md md:relative"
					>
						<span className="hidden md:block">Cadastrar cliente</span>
					</Button>
				</div>
			</div>
			<hr className="mx-2 my-2" />
			<DataTable
				hasEnumarate
				onActionsClicked={onActionsClicked}
				headers={['Nome', 'Telefone', 'Email', 'CPF', 'Endereço', 'Ações']}
				data={clients}
			/>
			{/* Client Form - Create|Edit */}
			<Modal.Container ref={modalClientForm.modalRef}>
				<Modal.Content>
					<Modal.Header>
						<h2 className="text-2xl font-semibold text-zinc-800">
							Novo Cliente
						</h2>
						<Button
							icon={XIcon}
							title="Fechar"
							onClick={() => modalClientForm.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						/>
					</Modal.Header>
					<ClientForm id={modalClientFormId} />
					<Modal.Footer>
						<Button
							className="px-4"
							variant="outlined"
							onClick={() => modalClientForm.closeModal()}
						>
							Cancelar
						</Button>
						<Button form={modalClientFormId} variant="dark" className="px-4">
							Cadastrar
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>
			{/* Delete Client */}
			<Modal.Container ref={modalDeleteClient.modalRef}>
				<Modal.Content>
					<Modal.Header>
						Este cliente será excluído. Deseja continuar?
					</Modal.Header>
					<Modal.Footer>
						<Button
							variant="outlined"
							className="px-4"
							onClick={() => modalDeleteClient.closeModal()}
						>
							Cancelar
						</Button>
						<Button className="px-4" variant="dark">
							Excluir
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>
		</>
	);
}
