import { Button } from '@components/button';
import { HeaderRoute } from '@components/header-route';
import { Image } from '@components/image';
import { ArrowBigLeftDashIcon, HomeIcon } from 'lucide-react';
import { Link } from 'react-router';

export default function NotFound() {
	return (
		<div>
			<HeaderRoute routeName="Erro 404" action="..." />
			<main className="flex flex-wrap justify-center items-center gap-10">
				<Image
					alt="Menina procurando uma página do livro"
					src="/undraw_bibliophile_sbt0.svg"
					className="w-2/3 md:h-2/3 md:w-auto"
				/>
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
							variant="outlined"
							className="inline-flex px-6 py-2 rounded-full text-lg"
							onClick={() => window.history.back()}
						>
							<ArrowBigLeftDashIcon strokeWidth={1.5} /> Voltar
						</Button>
						<Link to="/">
							<Button
								variant="dark"
								className="inline-flex px-6 py-2 rounded-full text-lg"
							>
								<HomeIcon strokeWidth={1.5} /> Home
							</Button>
						</Link>
					</div>
				</div>
			</main>
		</div>
	);
}
