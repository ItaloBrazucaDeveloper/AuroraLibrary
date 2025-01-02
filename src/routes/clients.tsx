import { Button } from '@components/button';
import { Modal } from '@components/modal';
import { FilterIcon, Search, UserPlusIcon } from 'lucide-react';
import { useState } from 'react';
import { DataTable } from '../components/data-table';

export default function Clients() {
	const [wichModalIsOpen, setWichModalIsOpen] = useState<string | null>(null);
	const [dataRow, setDataRow] = useState({});

	function onActionsClicked(action: 'edit' | 'delete', dataRow: {}) {
		setWichModalIsOpen(action);
		if (dataRow) {
			setDataRow(dataRow);
		}
	}

	return (
		<div className="flex flex-col gap-3 h-full w-full bg-white/85 shadow-md rounded-lg">
			<header className="p-4 text-xl">
				<h1 className="font-semibold text-3xl">
					<span className="text-zinc-500 font-normal">Clientes \</span> Lista
				</h1>
			</header>
			<div className="flex justify-between mx-2">
				<Button variant="outlined" icon={FilterIcon} className="rounded-md">
					Filtros
				</Button>
				<div className="flex gap-4">
					<div className="flex items-center gap-2">
						<Button
							title="Buscar"
							icon={Search}
							variant="outlined"
							className="h-full px-2 rounded-full"
						/>
						<input
							type="text"
							placeholder="Buscar por cliente..."
							className="outline outline-1 outline-zinc-200 border-0 rounded-full px-4 py-1 focus:outline-2 focus:outline-zinc-300 w-64"
						/>
					</div>
					<Modal.Container>
						<Modal.Trigger>
							<Button icon={UserPlusIcon} variant="dark" className="px-4">
								Novo cliente
							</Button>
						</Modal.Trigger>
						<Modal.Content>
							<Modal.Header>
								<h2 className="text-2xl font-semibold text-zinc-800">
									Novo cliente
								</h2>
								<Modal.Close />
							</Modal.Header>
							<div className="flex flex-col gap-2">
								<label htmlFor="nome">Nome</label>
								<input
									type="text"
									name="nome"
									id="nome"
									placeholder="Nome completo"
									className="outline outline-1 outline-zinc-200 border-0 rounded-md px-4 py-1 focus:outline-2 focus:outline-zinc-300"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									className="outline outline-1 outline-zinc-200 border-0 rounded-md px-4 py-1 focus:outline-2 focus:outline-zinc-300"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="telefone">Telefone</label>
								<input
									type="tel"
									name="telefone"
									id="telefone"
									placeholder="Telefone"
									className="outline outline-1 outline-zinc-200 border-0 rounded-md px-4 py-1 focus:outline-2 focus:outline-zinc-300"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<label htmlFor="cpf">CPF</label>
								<input
									type="text"
									name="cpf"
									id="cpf"
									placeholder="CPF"
									className="outline outline-1 outline-zinc-200 border-0 rounded-md px-4 py-1 focus:outline-2 focus:outline-zinc-300"
								/>
							</div>
							<Modal.Footer>
								<Button variant="outlined" className="px-4">
									Cancelar
								</Button>
								<Button className="px-4" variant="dark">
									Salvar
								</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Container>
				</div>
			</div>
			<hr className="mx-2" />
			<DataTable
				hasEnumarate
				actions="edit-delete"
				headers={['Nome', 'Email', 'Telefone', 'CPF', 'Ações']}
				onActionsClicked={onActionsClicked}
				data={[
					{
						nome: 'João Silva',
						email: 'joao.silva@email.com',
						telefone: '(11) 98765-4321',
						cpf: '123.456.789-00',
					},
					{
						nome: 'Maria Santos',
						email: 'maria.santos@email.com',
						telefone: '(21) 97654-3210',
						cpf: '987.654.321-00',
					},
					{
						nome: 'Pedro Oliveira',
						email: 'pedro.oliveira@email.com',
						telefone: '(31) 96543-2109',
						cpf: '456.789.123-00',
					},
					{
						nome: 'Ana Costa',
						email: 'ana.costa@email.com',
						telefone: '(41) 95432-1098',
						cpf: '789.123.456-00',
					},
					{
						nome: 'Lucas Pereira',
						email: 'lucas.pereira@email.com',
						telefone: '(51) 94321-0987',
						cpf: '321.654.987-00',
					},
				]}
			/>
			<Modal.Container>
				<Modal.Content open={wichModalIsOpen === 'delete'}>
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
