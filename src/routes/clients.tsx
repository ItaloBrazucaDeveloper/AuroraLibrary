import { Button } from '@components/button';
import { FilterIcon, Search, UserPlusIcon } from 'lucide-react';
import { DataTable } from '../components/data-table';

export default function Clients() {
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
					<Button icon={UserPlusIcon} variant="dark" className="px-4">
						Novo cliente
					</Button>
				</div>
			</div>
			<hr className="mx-2" />
			<DataTable
				hasEnumarate
				headers={['Nome', 'Email', 'Telefone', 'CPF']}
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
		</div>
	);
}
