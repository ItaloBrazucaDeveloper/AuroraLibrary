import { Image } from './image';

export function Logo() {
	return (
		<div className="flex items-center gap-3">
			<Image.Container>
				<Image.Source
					src="/logo.png"
					alt="Lucas Almeida"
					className="h-10 w-auto p-1.5 rounded-md bg-zinc-950"
				/>
			</Image.Container>
			<h3 className="text-xl font-semibold">Aurora Library</h3>
		</div>
	);
}
