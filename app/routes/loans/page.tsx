import { Button } from '@components/button';
import { DataTable } from '@components/data-table';
import { Modal } from '@components/modal';

import { Pagination } from '@components/pagination';
import { Search } from '@components/search-tool';
import { useModal } from '@hooks/useModal';

import { BookPlusIcon, XIcon } from 'lucide-react';
import { Route } from './+types/route';
import { LoanForm } from './loan-form';

export function LoansPage({ loaderData }: Route.ComponentProps) {
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
						theme="dark"
						onClick={() => modalCreateLoan.openModal()}
						className="text-nowrap md:m-0 md:px-4 md:py-1 md:rounded-lg md:relative"
					>
						<BookPlusIcon className="mr-2" />
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
					'Pegou em',
					'Devolveu em',
					'Devolução prevista',
					'Multa',
					'Devolvido',
					'Ações',
				]}
				data={loaderData.loans}
			/>

			<Pagination.Container className="mt-auto mb-4">
				<Pagination.Arrow direction="left" />
				<Pagination.Pages>
					<Pagination.Page number={1} variant="selected" link="#" />
					<Pagination.Page number={2} />
					<Pagination.Page number={3} />
					<Pagination.Page number={4} />
					<Pagination.Page number={5} />
					<Pagination.Page />
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
							title="Fechar"
							onClick={() => modalCreateLoan.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						>
							<XIcon />
						</Button>
					</Modal.Header>
					<LoanForm />
					<Modal.Footer>
						<Button
							className="px-4"
							onClick={() => modalCreateLoan.closeModal()}
						>
							Cancelar
						</Button>
						<Button theme="dark" className="px-4">
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
							title="Fechar"
							onClick={() => modalEditLoan.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						>
							<XIcon />
						</Button>
					</Modal.Header>
					<LoanForm />
					<Modal.Footer>
						<Button className="px-4" onClick={() => modalEditLoan.closeModal()}>
							Cancelar
						</Button>
						<Button theme="dark" className="px-4">
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
							className="px-4"
							onClick={() => modalDeleteLoan.closeModal()}
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
