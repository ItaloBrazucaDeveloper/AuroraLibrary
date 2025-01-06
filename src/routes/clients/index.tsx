import { Button } from '@components/button';
import { DataTable } from '@components/data-table';
import { HeaderRoute } from '@components/header-route';
import { Input } from '@components/input';
import { Modal } from '@components/modal';

import { ClientType } from '@src/types/client.type';
import { FilterIcon, SearchIcon, UserPlusIcon, XIcon } from 'lucide-react';

import { useFetchApi } from '@services/api';
import { useEffect, useId, useRef, useState } from 'react';
import { ClientForm } from './client-form';

export default function Clients() {
	const api = useFetchApi();

	const [clients, setClients] = useState<ClientType[]>([]);
	const [selectedClient, setSelectedClient] = useState<ClientType>(
		{} as ClientType,
	);

	const modalDeleteClientRef = useRef<HTMLDialogElement>(null);
	const modalClientFormRef = useRef<HTMLDialogElement>(null);
	const modalClientFormId = useId();

	useEffect(() => {
		api
			.get<ClientType[]>('/users')
			.then((data) => setClients(data))
			.catch(console.error);
	}, []);

	function onActionsClicked(action: 'edit' | 'delete', dataRow: {}) {
		if (action === 'edit') {
			setSelectedClient(dataRow as ClientType);
			modalDeleteClientRef.current?.showModal();
		} else if (action === 'delete') {
			modalDeleteClientRef.current?.showModal();
		}
	}

	return (
		<div className="flex flex-col gap-3 h-full w-full bg-white/85 shadow-md rounded-lg">
			<HeaderRoute routeName="Clientes" action="Listagem" />
			<div className="flex justify-between mx-2 mt-5">
				<Button
					variant="outlined"
					icon={FilterIcon}
					className="h-fit rounded-md"
				>
					Filtros
				</Button>
				<div className="flex gap-5">
					<Input.Container flowDirection="row" className="items-center gap-2">
						<Input.Label
							htmlFor="serch-client"
							title="Buscar"
							className="outline outline-1 outline-zinc-300 p-1.5 rounded-full"
						>
							<SearchIcon className="size-5 text-zinc-600" />
						</Input.Label>
						<Input.Control
							id="serch-client"
							type="text"
							placeholder="Buscar por cliente..."
							className="outline outline-1 outline-zinc-200 border-0 rounded-full px-4 py-1 focus:outline-2 focus:outline-zinc-300 w-64"
						/>
					</Input.Container>
					<Button
						variant="dark"
						icon={UserPlusIcon}
						title="Cadastrar cliente"
						onClick={() => modalClientFormRef.current?.showModal()}
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
				headers={['Nome', 'Email', 'Telefone', 'CPF', 'Endereço', 'Ações']}
				data={clients}
			/>
			<Modal.Container ref={modalClientFormRef}>
				<Modal.Content>
					<Modal.Header>
						<h2 className="text-2xl font-semibold text-zinc-800">
							Novo Cliente
						</h2>
						<Button
							icon={XIcon}
							title="Fechar"
							onClick={() => modalClientFormRef.current?.close()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						/>
					</Modal.Header>
					<ClientForm id={modalClientFormId} data={selectedClient} />
					<Modal.Footer>
						<Button
							className="px-4"
							variant="outlined"
							onClick={() => modalClientFormRef.current?.close()}
						>
							Cancelar
						</Button>
						<Button form={modalClientFormId} variant="dark" className="px-4">
							Cadastrar
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>
			<Modal.Container ref={modalDeleteClientRef}>
				<Modal.Content>
					<Modal.Header>
						Este cliente será excluído. Deseja continuar?
					</Modal.Header>
					<Modal.Footer>
						<Button variant="outlined" className="px-4">
							Cancelar
						</Button>
						<Button className="px-4" variant="dark">
							Excluir
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>
		</div>
	);
}
