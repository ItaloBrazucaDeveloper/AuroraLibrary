import { Input } from '@components/input';
import { UploadImage } from '@components/upload-image';
import { Form } from '@components/form';
import { BookSchemaType } from '~validation/books';

export function BookForm({ book }: { book?: BookSchemaType }) {
	return (
		<Form method="post">
			<Input.Container>
				<Input.Label>Título</Input.Label>
				<Input.Control
					name="title"
					placeholder="ex: A banana que devia ao agiota 2"
					defaultValue={book?.title}
				/>
			</Input.Container>

			<Input.Container>
				<Input.Label>Autor(a)</Input.Label>
				<Input.Control
					name="author"
					placeholder="ex: João da Silva"
					defaultValue={book?.author}
				/>
			</Input.Container>

			<Input.Container>
				<Input.Label>Editora</Input.Label>
				<Input.Control
					name="publisher"
					placeholder="ex: Editora XYZ"
					defaultValue={book?.publisher}
				/>
			</Input.Container>
			
			<div className="flex justify-between gap-3">
				<Input.Container>
					<Input.Label>Ano</Input.Label>
					<Input.Control
						min={1900}
						type="number"
						name="year"
						placeholder="ex: 1990"
						defaultValue={''}
					/>
				</Input.Container>

				<Input.Container>
					<Input.Label>Quantidade</Input.Label>
					<Input.Control
						min={1}
						type="number"
						name="quantity_books"
						placeholder="ex: 10"
						defaultValue={''}
					/>
				</Input.Container>
			</div>

			<UploadImage.Container>
				<UploadImage.Label>Capa do livro</UploadImage.Label>
				<UploadImage.Control name="book_cover" />
			</UploadImage.Container>
		</Form>
	);
}
