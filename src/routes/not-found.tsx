import { Button } from '@components/button';
import { HeaderRoute } from '@components/header-route';
import { Image } from '@components/image';

export default function NotFound() {
	return (
		<div className="flex flex-col gap-3 h-full w-full bg-white/85 shadow-md rounded-lg">
			<HeaderRoute routeName="Erro 404" action="..." />
			<div className="flex flex-col md:flex-row justify-center items-center size-full gap-7">
				<Image
					alt="Menina procurando uma página do livro"
					src="/public/undraw_bibliophile_sbt0.svg"
					className="w-1/2 md:h-2/3 md:w-auto"
				/>
				<div className="grid place-items-center gap-5">
					<div className="text-center">
						<h1 className="font-medium text-3xl md:text-4xl mb-3">
							Oops... página não econtrada
						</h1>
						<span className="text-xl text-zinc-700">
							Desculpa, não achamos esta página em nosso livro
						</span>
					</div>
					<Button variant="dark" className="px-6 py-2 rounded-full text-lg">
						Voltar para a home
					</Button>
				</div>
			</div>
		</div>
	);
}
