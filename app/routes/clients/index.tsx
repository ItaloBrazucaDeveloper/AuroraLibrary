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
import { Route } from './+types/index';
import { getSession } from '~app/sessions.server';
import { ClientAddress } from './client-address';

export async function loader({ params, request }: Route.LoaderArgs) {
	const api = useFetchApi();
	const getById = !!params.clientId;

	const session = await getSession(request.headers.get('Cookie'));
	const token = session.get('token') ?? '';

	if (getById) {
		const client = await api.get<ClientType[]>(`/clients/${params.clientId}`, token);
		return client;
	}

	const response = await api.get<ClientType[]>('/clients', token);

	if (response.success) {
		const clients = response.success.data;

		return clients.map(({ address: { cep, number, id_address, ...rest }, ...props }) => {
			return {
				...props,
				address: <ClientAddress {...rest} />
			}
		});
	}
	
}

export default function Clients({ loaderData }: Route.ComponentProps) {
	const modalClientForm = useModal();
	const modalDeleteClient = useModal();

	function onActionsClicked(action: 'edit' | 'delete') {
		if (action === 'edit') {
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
						className="p-4 absolute bottom-0 right-0 m-8 rounded-full md:m-0 md:px-4 md:py-1 md:rounded-lg md:relative"
					>
						<span className="hidden md:block">Cadastrar cliente</span>
					</Button>
				</div>
			</div>

			<hr className="mx-2 my-2" />
			<DataTable
				onActionsClicked={onActionsClicked}
				headers={['Nome', 'Telefone', 'Email', 'CPF', 'Endereço', 'Ações']}
				data={loaderData}
			/>

			<Modal.Container open={modalClientForm.isOpen}>
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
					<ClientForm data={loaderData} />
					<Modal.Footer>
						<Button
							className="px-4"
							variant="outlined"
							onClick={() => modalClientForm.closeModal()}
						>
							Cancelar
						</Button>
						<Button variant="dark" className="px-4">
							Cadastrar
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>

			<Modal.Container open={modalDeleteClient.isOpen}>
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
