import { Button } from '@components/button';
import { DataTable } from '@components/data-table';
import { Modal } from '@components/modal';

import { Search } from '@components/search-tool';
import { useModal } from '@hooks/useModal';
import { BookPlusIcon, XIcon } from 'lucide-react';

import { Pagination } from '@components/pagination';
import { Route } from '@router-types/books';
import { BookForm } from './books-form';

export function BooksPage({ loaderData }: Route.ComponentProps) {
	const modalCreateBookForm = useModal();
	const modalEditBookForm = useModal();
	const modalDeleteBook = useModal();

	function onActionsClicked(action: 'edit' | 'delete') {
		if (action === 'edit') {
			modalEditBookForm.openModal();
		} else if (action === 'delete') {
			modalDeleteBook.openModal();
		}
	}

	return (
		<>
			<div className="flex flex-wrap gap-5 justify-between mx-5 mt-5">
				<h1 className="flex items-center font-semibold text-3xl">Livros</h1>
				<div className="flex gap-5">
					<Search.Container>
						<Search.Control />
					</Search.Container>
					<Button
						theme="dark"
						onClick={() => modalCreateBookForm.openModal()}
						className="text-nowrap md:m-0 md:px-4 md:py-1 md:rounded-lg md:relative"
					>
						<BookPlusIcon className="mr-2" />
						<span className="hidden md:block">Cadastrar livro</span>
					</Button>
				</div>
			</div>

			<DataTable
				onActionsClicked={onActionsClicked}
				headers={[
					'Capa',
					'Título',
					'Categoria',
					'Autor(a)',
					'Editora',
					'Ano',
					'Quantidade',
					'Ações',
				]}
				data={loaderData.books}
			/>

			<Pagination.Container className="mt-auto mb-4">
				<Pagination.Arrow direction="left" />
				<Pagination.Pages>
					<Pagination.Page number={1} variant="selected" link="#" />
					<Pagination.Page number={2} />
					<Pagination.Page number={3} />
					<Pagination.Page number={4} />
					<Pagination.Page number={5} />
				</Pagination.Pages>
				<Pagination.Arrow direction="right" />
			</Pagination.Container>

			<Modal.Container open={modalCreateBookForm.isOpen}>
				<Modal.Content>
					<Modal.Header>
						<h2 className="text-2xl font-semibold text-zinc-800">Novo Livro</h2>
						<Button
							title="Fechar"
							onClick={() => modalCreateBookForm.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						>
							<XIcon />
						</Button>
					</Modal.Header>
					<BookForm />
					<Modal.Footer>
						<Button
							className="px-4"
							theme="outlined"
							onClick={() => modalCreateBookForm.closeModal()}
						>
							Cancelar
						</Button>
						<Button theme="dark" className="px-4">
							Cadastrar
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>

			<Modal.Container open={modalEditBookForm.isOpen}>
				<Modal.Content>
					<Modal.Header>
						<h2 className="text-2xl font-semibold text-zinc-800">
							Atualizar Livro
						</h2>
						<Button
							title="Fechar"
							onClick={() => modalEditBookForm.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						>
							<XIcon />
						</Button>
					</Modal.Header>
					<BookForm />
					<Modal.Footer>
						<Button
							className="px-4"
							onClick={() => modalEditBookForm.closeModal()}
						>
							Cancelar
						</Button>
						<Button theme="dark" className="px-4">
							Cadastrar
						</Button>
					</Modal.Footer>
				</Modal.Content>
			</Modal.Container>

			<Modal.Container open={modalDeleteBook.isOpen}>
				<Modal.Content>
					<Modal.Header>
						Este livro será excluído. Deseja continuar?
					</Modal.Header>
					<Modal.Footer>
						<Button
							className="px-4"
							onClick={() => modalDeleteBook.closeModal()}
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
