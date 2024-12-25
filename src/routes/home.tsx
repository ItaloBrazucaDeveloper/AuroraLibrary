import { useState } from 'react';

import { RadioGroup } from '@components/radio-group';
import { MapList } from '@components/utils/map-list';
import { tags } from '@utils/tags-home-page';
import { SearchIcon } from 'lucide-react';

export default function Home() {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		tags[0].label,
	);

	return (
		<div className="flex flex-col gap-3 h-full w-full bg-white/85 shadow-md rounded-lg">
			<header className="p-4">
				<h1 className="font-semibold text-4xl">
					<span className="text-zinc-500 font-normal">Home \</span> Olá, Júlia!
				</h1>
			</header>
			<main className="flex flex-col items-center justify-center gap-10 h-full">
				<RadioGroup.Container
					name="book-category"
					className="flex gap-3 gap-y-4 justify-center flex-wrap"
				>
					<MapList
						list={tags}
						callback={({ id, label, color }) => (
							<RadioGroup.Item className="relative" key={id}>
								<RadioGroup.Label
									onClick={() => setSelectedCategory(label)}
									className={`text-lg text-zinc-700 ring-1 ring-${color}-500 px-2 py-1 rounded-sm hover:opacity-70 cursor-pointer${selectedCategory === label ? ` bg-${color}-200` : ''}`}
								>
									{label}
								</RadioGroup.Label>
								<RadioGroup.Control
									className="absolute inset-0 hidden"
									value={label}
								/>
							</RadioGroup.Item>
						)}
					/>
				</RadioGroup.Container>
				<div className="relative w-11/12 md:w-4/6">
					<SearchIcon className="absolute -translate-y-1/2 top-1/2 left-3 text-zinc-600" />
					<input
						type="text"
						placeholder="Procurar livro..."
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
