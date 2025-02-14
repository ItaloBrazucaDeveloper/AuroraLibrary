import { Input } from '@components/input';
import { RadioGroup } from '@components/radio-group';
import { MapList } from '@components/utils/map-list';

import { tags } from '@utils/tags-home-page';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';

export function HomePage() {
	const [selectedCategory, setSelectedCategory] = useState<string>(
		tags[0].label,
	);

	return (
		<div className="flex flex-col justify-center items-center gap-7 flex-1">
			<RadioGroup.Container
				name="book-category"
				className="flex flex-wrap-reverse justify-center gap-y-5 gap-x-4"
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

			<Input.Container className="relative w-11/12 md:w-4/6">
				<Input.Label>
					<SearchIcon className="absolute -translate-y-1/2 bottom-0 left-3 text-zinc-600" />
				</Input.Label>
				<Input.Control
					placeholder="Procurar livro..."
					className="outline-none border-none py-3 px-4 w-full rounded-full shadow-sm ring-2 ring-rose-200 focus:ring-rose-300 pl-12"
				/>
			</Input.Container>
		</div>
	);
}
