import { Button } from '@components/button';
import { DataTable } from '@components/data-table';
import { Modal } from '@components/modal';

import { Search } from '@components/search';
import { useModal } from '@hooks/useModal';
import { BookPlusIcon, BookmarkIcon, XIcon } from 'lucide-react';

import { Route } from './+types/route';
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
				<h1 className="flex items-center font-semibold text-3xl">
					<BookmarkIcon className="size-7" /> Livros
				</h1>
				<div className="flex gap-5">
					<Search.Container>
						<Search.Control />
					</Search.Container>
					<Button
						variant="dark"
						icon={BookPlusIcon}
						onClick={() => modalCreateBookForm.openModal()}
						className="text-nowrap p-4 absolute bottom-0 right-0 m-8 rounded-full md:m-0 md:px-4 md:py-1 md:rounded-lg md:relative"
					>
						<span className="hidden md:block">Cadastrar livro</span>
					</Button>
				</div>
			</div>

			<hr className="mx-2 my-2" />
			<DataTable
				onActionsClicked={onActionsClicked}
				headers={['Capa', 'Título', 'Autor(a)', 'Editora', 'Ano', 'Ações']}
				data={[
					{
						capa: (
							<img
								className="size-8 rounded-sm"
								src="https://github.com/ItaloBrazucaDeveloper.png"
							/>
						),
						titulo: 'Livro 1',
						autor: 'Autor 1',
						editora: 'Editora 1',
						ano: '2022',
					},
					{
						capa: (
							<img
								className="size-8 rounded-sm"
								src="https://github.com/ItaloBrazucaDeveloper.png"
							/>
						),
						titulo: 'Livro 1',
						autor: 'Autor 1',
						editora: 'Editora 1',
						ano: '2022',
					},
				]}
			/>

			<Modal.Container open={modalCreateBookForm.isOpen}>
				<Modal.Content>
					<Modal.Header>
						<h2 className="text-2xl font-semibold text-zinc-800">Novo Livro</h2>
						<Button
							icon={XIcon}
							title="Fechar"
							onClick={() => modalCreateBookForm.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						/>
					</Modal.Header>
					<BookForm />
					<Modal.Footer>
						<Button
							className="px-4"
							variant="outlined"
							onClick={() => modalCreateBookForm.closeModal()}
						>
							Cancelar
						</Button>
						<Button variant="dark" className="px-4">
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
							icon={XIcon}
							title="Fechar"
							onClick={() => modalEditBookForm.closeModal()}
							className="p-0.5 size-5 bg-rose-300 rounded-full"
						/>
					</Modal.Header>
					<BookForm book={loaderData?.book} />
					<Modal.Footer>
						<Button
							className="px-4"
							variant="outlined"
							onClick={() => modalEditBookForm.closeModal()}
						>
							Cancelar
						</Button>
						<Button variant="dark" className="px-4">
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
							variant="outlined"
							className="px-4"
							onClick={() => modalDeleteBook.closeModal()}
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
