import { Button } from '@components/button';
import { DataTable } from '@components/data-table';
import { Modal } from '@components/modal';

import { Pagination } from '@components/pagination';
import { Search } from '@components/search';
import { useModal } from '@hooks/useModal';

import { BookPlusIcon, XIcon } from 'lucide-react';
import { LoanForm } from './loan-form';

export default function LoansPage() {
	const modalCreateLoan = useModal();
	const modalEditLoan = useModal();
	const modalDeleteLoan = useModal();

	function onActionsClicked(action: 'edit' | 'delete') {
		if (action === 'edit') {
			modalEditLoan.openModal();
		} else if (action === 'delete') {
			modalDeleteLoan.openModal();
		}
	}

	return (
		<>
			<div className="flex flex-wrap gap-5 justify-between mx-5 mt-5">
				<h1 className="flex items-center font-semibold text-3xl">
					Empréstimos
				</h1>
				<div className="flex gap-5">
					<Search.Container>
						<Search.Control />
					</Search.Container>
					<Button
						variant="dark"
						icon={BookPlusIcon}
						onClick={() => modalCreateLoan.openModal()}
						className="text-nowrap md:m-0 md:px-4 md:py-1 md:rounded-lg md:relative"
					>
						<span className="hidden md:block">Novo empréstimo</span>
					</Button>
				</div>
			</div>

			<hr className="mx-2 my-2" />
			<DataTable
				onActionsClicked={onActionsClicked}
				headers={[
					'Livro',
					'Cliente',
					'Data de empréstimo',
					'Data de devolução',
					'Multa',
					'Finalizado',
					'Ações',
				]}
				data={[]}
			/>

			<Pagination.Container className="mt-auto mb-4">
				<Pagination.Arrow direction="left" />
				<Pagination.Pages>
					<Pagination.Page number={1} variant="selected" link="#" />
					<Pagination.Page number={2} />
					<Pagination.Page number={3} />
					<Pagination.Page number={4} />
					<Pagination.Page number={5} />
					<Pagination.NextPages link="" />
				</Pagination.Pages>
				<Pagination.Arrow direction="right" />
			</Pagination.Container>

			<Modal.Container open={modalCreateLoan.isOpen}>
				<Modal.Content>
					<Modal.Header>
						<h2 className="text-2xl font-semibold text-zinc-800">
							Novo Empréstimo
						</h2>
						<Button
							icon={XIcon}
							title="Fechar"
							onClick={() => modalCreateLoan.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						/>
					</Modal.Header>
					<LoanForm />
					<Modal.Footer>
						<Button
							className="px-4"
							variant="outlined"
							onClick={() => modalCreateLoan.closeModal()}
						>
							Cancelar
						</Button>
						<Button variant="dark" className="px-4">
							Cadastrar
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>

			<Modal.Container open={modalEditLoan.isOpen}>
				<Modal.Content>
					<Modal.Header>
						<h2 className="text-2xl font-semibold text-zinc-800">
							Atualizar Empréstimo
						</h2>
						<Button
							icon={XIcon}
							title="Fechar"
							onClick={() => modalEditLoan.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						/>
					</Modal.Header>
					<LoanForm />
					<Modal.Footer>
						<Button
							className="px-4"
							variant="outlined"
							onClick={() => modalEditLoan.closeModal()}
						>
							Cancelar
						</Button>
						<Button variant="dark" className="px-4">
							Cadastrar
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>

			<Modal.Container open={modalDeleteLoan.isOpen}>
				<Modal.Content>
					<Modal.Header>
						Este empréstimo será excluído. Deseja continuar?
					</Modal.Header>
					<Modal.Footer>
						<Button
							variant="outlined"
							className="px-4"
							onClick={() => modalDeleteLoan.closeModal()}
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
