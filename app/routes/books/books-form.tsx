import { Input } from '@components/input';
import { UploadImage } from '@components/upload-image';
import { Form } from 'react-router';
import { BookSchemaType } from '~validation/books';

export function BookForm({ book }: { book?: BookSchemaType }) {
	return (
		<Form method="post" className="flex flex-col gap-5 px-4">
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

			<div>
				<label htmlFor="">Ano</label>
				<select name="">
					{Array.from({ length: 2025 - 1900 }, (_, i) => i + 1).map((year) => (
						<option key={year} value={year}>
							{1909 + year}
						</option>
					))}
				</select>
			</div>

			<UploadImage.Container>
				<UploadImage.Label>Capa do livro</UploadImage.Label>
				<UploadImage.Control name="book_cover" />
				<UploadImage.Types types={['jpg', 'png', 'webp']} />
				<UploadImage.MaxSize maxSize={5} />
			</UploadImage.Container>
		</Form>
	);
}
