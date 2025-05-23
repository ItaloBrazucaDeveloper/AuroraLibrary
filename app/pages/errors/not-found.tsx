import { Button } from '@components/button';
import { Image } from '@components/image';
import { ArrowBigLeftDashIcon, HomeIcon } from 'lucide-react';
import { Link } from 'react-router';

export default function NotFound() {
	return (
		<>
			<header className="p-4 text-xl">
				<h1 className="font-semibold text-3xl">
					<span className="text-zinc-500 font-normal">Not Found \ </span>
					...
				</h1>
			</header>

			<main className="flex flex-wrap justify-center items-center gap-10">
				<Image.Container>
					<Image.Control
						src="/undraw_bibliophile_sbt0.svg"
						className="w-2/3 md:h-2/3 md:w-auto"
						alt="Menina procurando uma página do livro"
					/>
				</Image.Container>

				<div className="grid place-items-center gap-5">
					<div className="text-center">
						<h1 className="font-medium text-3xl md:text-4xl mb-3">
							Oops... página não econtrada
						</h1>
						<span className="text-lg md:text-xl text-zinc-700">
							Desculpa, não achamos esta página em nosso livro
						</span>
					</div>

					<div className="space-x-7">
						<Button
							className="inline-flex px-6 py-2 rounded-full text-lg"
							onClick={(_) => window.history.back()}
						>
							<ArrowBigLeftDashIcon className='stroke-1' /> Voltar
						</Button>

						<Link to="/home">
							<Button
								theme="dark"
								className="inline-flex px-6 py-2 rounded-full text-lg"
							>
								<HomeIcon className='stroke-1' /> Home
							</Button>
						</Link>
					</div>
					
				</div>
			</main>
		</>
	);
}
