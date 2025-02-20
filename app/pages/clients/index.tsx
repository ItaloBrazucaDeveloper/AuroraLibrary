import { Button } from '@components/button';
import { DataTable } from '@components/data-table';
import { Modal } from '@components/modal';

import { Search } from '@components/search-tool';
import { useModal } from '@hooks/useModal';
import { FilterIcon, UserPlusIcon, XIcon } from 'lucide-react';

import { Route } from '@router-types/clients';
import { ClientForm } from './client-form';

export function ClientsPage({ loaderData }: Route.ComponentProps) {
	const modalCreateClientForm = useModal();
	const modalEditClientForm = useModal();
	const modalDeleteClient = useModal();

	function onActionsClicked(action: 'edit' | 'delete') {
		if (action === 'edit') {
			modalEditClientForm.openModal();
		} else if (action === 'delete') {
			modalDeleteClient.openModal();
		}
	}

	return (
		<>
			<header className="p-4 text-xl">
				<h1 className="font-semibold text-3xl">Clientes</h1>
			</header>
			<div className="flex justify-between mx-2 mt-5">
				<Button className="h-fit rounded-md">
					<FilterIcon className="size-5 mr-2" />
					<span>Filtros</span>
				</Button>

				<div className="flex gap-5">
					<Search.Container>
						<Search.Control />
					</Search.Container>
					<Button
						theme="dark"
						onClick={() => modalCreateClientForm.openModal()}
						className="p-4 absolute bottom-0 right-0 m-8 rounded-full md:m-0 md:px-4 md:py-1 md:rounded-lg md:relative"
					>
						<UserPlusIcon className="mr-2" />
						<span className="hidden md:block">Cadastrar cliente</span>
					</Button>
				</div>
			</div>

			<hr className="mx-2 my-2" />
			<DataTable
				onActionsClicked={onActionsClicked}
				headers={['Nome', 'Telefone', 'Email', 'CPF', 'Endereço', 'Ações']}
				data={loaderData.clients}
			/>

			<Modal.Container open={modalCreateClientForm.isOpen}>
				<Modal.Content>
					<Modal.Header>
						<h2 className="text-2xl font-semibold text-zinc-800">
							Novo Cliente
						</h2>
						<Button
							title="Fechar"
							onClick={() => modalCreateClientForm.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						>
							<XIcon />
						</Button>
					</Modal.Header>
					<ClientForm />
					<Modal.Footer>
						<Button
							className="px-4"
							onClick={() => modalCreateClientForm.closeModal()}
						>
							Cancelar
						</Button>
						<Button theme="dark" className="px-4">
							Cadastrar
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>

			<Modal.Container open={modalEditClientForm.isOpen}>
				<Modal.Content>
					<Modal.Header>
						<h2 className="text-2xl font-semibold text-zinc-800">
							Atualizar Cliente
						</h2>
						<Button
							title="Fechar"
							onClick={() => modalEditClientForm.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						>
							<XIcon />
						</Button>
					</Modal.Header>
					<ClientForm client={loaderData.client} />
					<Modal.Footer>
						<Button
							className="px-4"
							onClick={() => modalEditClientForm.closeModal()}
						>
							Cancelar
						</Button>
						<Button theme="dark" className="px-4">
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
							className="px-4"
							onClick={() => modalDeleteClient.closeModal()}
						>
							Cancelar
						</Button>
						<Button className="px-4" theme="dark">
							Excluir
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>
		</>
	);
}
