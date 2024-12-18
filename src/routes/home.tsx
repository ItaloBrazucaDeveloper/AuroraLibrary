import { SearchIcon } from 'lucide-react';

export default function Home() {
	return (
		<div className="flex flex-col gap-3 h-full w-full bg-white/85 shadow-md rounded-lg">
			<header className="p-4">
				<h1 className="font-semibold text-4xl">
					<span className="text-zinc-500 font-normal">Home \</span> Olá, Júlia!
				</h1>
			</header>
			<main className="flex flex-col items-center justify-center gap-10 h-full">
				<ul className="flex justify-center flex-wrap gap-3 max-w-xl text-zinc-800">
					<li>
						<label
							htmlFor="romance"
							className="text-lg px-3 py-1 rounded-sm ring-1 ring-rose-500 bg-rose-300 hover:opacity-80 cursor-pointer"
						>
							Romance
						</label>
						<input
							type="radio"
							name="book-category"
							id="romance"
							className="hidden"
						/>
					</li>
					<li>
						<label
							htmlFor="action"
							className="text-zinc-600 text-lg px-3 py-1 rounded-sm outline outline-1 outline-violet-500 hover:opacity-80 cursor-pointer"
						>
							Ação
						</label>
						<input
							type="radio"
							name="book-category"
							id="action"
							className="hidden"
						/>
					</li>
					<li>
						<label
							htmlFor="aventura"
							className="text-lg px-3 py-1 rounded-sm outline outline-1 outline-yellow-500 hover:opacity-80 cursor-pointer"
						>
							Aventura
						</label>
						<input
							type="radio"
							name="book-category"
							id="adventure"
							className="hidden"
						/>
					</li>
					<li>
						<label
							htmlFor="fantasia"
							className="text-lg px-3 py-1 rounded-sm outline outline-1 outline-lime-500 hover:opacity-80 cursor-pointer"
						>
							Fantasia
						</label>
						<input
							type="radio"
							name="book-category"
							id="fantasy"
							className="hidden"
						/>
					</li>
					<li>
						<label
							htmlFor="hqs"
							className="text-lg px-3 py-1 rounded-sm outline outline-1 outline-sky-500 hover:opacity-80 cursor-pointer"
						>
							Hqs
						</label>
						<input
							type="radio"
							name="book-category"
							id="hqs"
							className="hidden"
						/>
					</li>
					<li>
						<label
							htmlFor="manga"
							className="text-lg px-3 py-1 rounded-sm outline outline-1 outline-zinc-500 hover:opacity-80 cursor-pointer"
						>
							Mangá
						</label>
						<input
							type="radio"
							name="book-category"
							id="manga"
							className="hidden"
						/>
					</li>
				</ul>
				<div className="relative w-11/12 md:w-4/6">
					<SearchIcon className="absolute -translate-y-1/2 top-1/2 left-3 text-zinc-600" />
					<input
						type="text"
						placeholder="Procurar livro"
						className="outline-none border-none py-3 px-4 w-full rounded-full shadow-sm ring-2 ring-rose-200 focus:ring-rose-300 pl-12"
					/>
				</div>
			</main>
		</div>
	);
}

{
	/* <a href="https://www.flaticon.com/free-icons/polar-lights" title="polar lights icons">Polar lights icons created by Freepik - Flaticon</a> */
}
