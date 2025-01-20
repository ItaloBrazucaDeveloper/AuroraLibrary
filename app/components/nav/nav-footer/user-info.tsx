import { ImageWithFallback } from '@components/image-with-fallback';
import { UserIcon } from 'lucide-react';

export function UserInfo() {
	return (
		<div className="flex gap-3 py-4 items-center">
			<ImageWithFallback
				alt="Foto de Júlia Santos"
				src="https://github.com/ItaloBrazucaDeveloper.png"
				className="size-12 rounded-md"
				fallback={
					<div className="size-10 rounded-md bg-zinc-200">
						<UserIcon strokeWidth={1.3} className="size-10 rounded-md p-2" />
					</div>
				}
			/>
			<div className="grid gap-1">
				<span className="text-sm text-zinc-600">
					Júlia Santos • Bibliotecária
				</span>
				<span className="truncate max-w-64">juliasantos@email.com</span>
			</div>
		</div>
	);
}
