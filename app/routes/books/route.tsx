import { Route } from './+types/route';
import { BooksPage } from './page';

export async function loader({ request, params }: Route.LoaderArgs) {
	console.log(request, params);
	return {
		books: [
			{
				capa: (
					<img
						className="size-8 rounded-sm"
						src="https://github.com/ItaloBrazucaDeveloper.png"
					/>
				),
				titulo: 'Livro 1',
				category: 'Categoria 1',
				autor: 'Autor 1',
				editora: 'Editora 1',
				ano: '2022',
				quantidade: '10 unidades',
			},
			{
				capa: (
					<img
						className="size-8 rounded-sm"
						src="https://github.com/ItaloBrazucaDeveloper.png"
					/>
				),
				titulo: 'Livro 1',
				category: 'Categoria 1',
				autor: 'Autor 1',
				editora: 'Editora 1',
				ano: '2022',
				quantidade: '10 unidades',
			},
			{
				capa: (
					<img
						className="size-8 rounded-sm"
						src="https://github.com/ItaloBrazucaDeveloper.png"
					/>
				),
				titulo: 'Livro 1',
				category: 'Categoria 1',
				autor: 'Autor 1',
				editora: 'Editora 1',
				ano: '2022',
				quantidade: '10 unidades',
			},
		],
		book: {
			title: 'Banana com manga',
			author: 'Julio Verne',
			publisher: 'Nova Era',
			year: 2021,
			book_cover: 'http://localhost:3000/static/media/placeholder.3b1b2b7d.svg',
		},
	};
}

export default function Books(props: Route.ComponentProps) {
	return <BooksPage {...props} />;
}

export async function action({ request }: Route.ActionArgs) {
	return request;
}
