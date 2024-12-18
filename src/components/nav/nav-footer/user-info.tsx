import { UserIcon } from 'lucide-react';
import { Image } from '../../image';

export function UserInfo() {
	return (
		<div className="flex gap-3 py-4 items-center">
			<Image.Container>
				<Image.Source
					src="https://github.com/ItaloBrazucaDeveloper.png"
					alt="Lucas Almeida"
					className="h-12 w-auto rounded-md"
				/>
				<Image.Fallback>
					<div className="h-10 w-auto rounded-md bg-zinc-200">
						<UserIcon
							strokeWidth={1.3}
							className="h-10 w-auto rounded-md p-2"
						/>
					</div>
				</Image.Fallback>
			</Image.Container>
			<div className="grid gap-1">
				<span className="text-sm text-zinc-600">
					Júlia Santos • Bibliotecária
				</span>
				<span className="truncate max-w-64">juliasantos@email.com</span>
			</div>
		</div>
	);
}
