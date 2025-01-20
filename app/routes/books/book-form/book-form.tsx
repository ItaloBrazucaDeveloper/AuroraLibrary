import { type ComponentProps, type FormEvent } from 'react';

import { Input } from '@components/input';
import { useFetchApi } from '@hooks/useFetchApi';

import { bookSchema } from './book-schema';
import type { BookSchemaType } from './book-schema-type';

type BookFormProps = ComponentProps<'form'> & {
	data?: BookSchemaType;
};

export function BookForm({ data, ...props }: BookFormProps) {
	const api = useFetchApi();

	function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const dataToSend: BookSchemaType = {
			title: String(formData.get('title')),
			author: String(formData.get('author')),
			publisher: String(formData.get('publisher')),
			year: new Date(String(formData.get('year'))),
			quantity_books: Number(formData.get('quantity_books')),
			book_cover: String(formData.get('book_cover')),
		};
	}

	return (
		<form
			method="dialog"
			onSubmit={handleSubmitForm}
			className="flex flex-col gap-7"
			{...props}
		>
			<Input.Container>
				<Input.Label>Título</Input.Label>
				<Input.Control
					name="title"
					placeholder="ex: O Senhor dos Anéis"
					value={data?.title}
					className="py-2"
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>Autor</Input.Label>
				<Input.Control
					name="author"
					placeholder="ex: J.R.R. Tolkien"
					value={data?.author}
					className="py-2"
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>Editora</Input.Label>
				<Input.Control
					name="publisher"
					placeholder="ex: HarperCollins"
					value={data?.publisher}
					className="py-2"
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>Ano</Input.Label>
				<Input.Control
					name="year"
					type="date"
					value={data?.year?.toISOString().split('T')[0]}
					className="py-2"
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>Quantidade</Input.Label>
				<Input.Control
					name="quantity_books"
					type="number"
					placeholder="ex: 10"
					value={data?.quantity_books}
					className="py-2"
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>Capa do Livro</Input.Label>
				<Input.Control
					name="book_cover"
					placeholder="URL da capa do livro"
					value={data?.book_cover}
					className="py-2"
				/>
			</Input.Container>
		</form>
	);
}
