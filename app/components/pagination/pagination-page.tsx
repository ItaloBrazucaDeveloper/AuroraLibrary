import { Link } from 'react-router';
import { VariantProps, tv } from 'tailwind-variants';

const page = tv({
	base: [
		'text-sm px-3.5 py-2 outline outline-1 outline-zinc-300 shadow rounded-md',
		'hover:opacity-70 transition-opacity duration-200',
	],
	variants: {
		variant: {
			selected: 'bg-zinc-900 text-zinc-50 outline-zinc-900',
			blocked: 'bg-zinc-100 text-zinc-900 cursor-not-allowed opacity-60',
			default: 'bg-zinc-50',
		},
	},
});

type PaginationPageProps = VariantProps<typeof page> & {
	link?: string;
	number: number;
};

export function PaginationPage({
	link = '',
	number = 1,
	variant = 'default',
}: PaginationPageProps) {
	return (
		<li>
			<Link
				to={link}
				className={page({ variant: link !== '' ? variant : 'blocked' })}
			>
				{number}
			</Link>
		</li>
	);
}
