import { Button } from '@components/button';
import { ImagePlusIcon } from 'lucide-react';
import { ComponentProps } from 'react';

type UploadImageControlProps = Omit<ComponentProps<'input'>, 'type'>;

export function UploadImageControl({
	className,
	...props
}: UploadImageControlProps) {
	return (
		<>
			<div className="flex items-center justify-between outline-1 rounded-lg outline-zinc-300 shadow">
				<div className="space-x-2 px-2">
					<ImagePlusIcon className="inline" />
					<span className="text-medium text-zinc-500/80 m-0">
						Selecionar imagem
					</span>
				</div>
				<Button className="py-2 px-3 rounded-s-xl text-zinc-600">
					Browser
				</Button>
			</div>

			<input
				type="file"
				className="absolute inset-0 opacity-0 size-full"
				{...props}
			/>
		</>
	);
}
