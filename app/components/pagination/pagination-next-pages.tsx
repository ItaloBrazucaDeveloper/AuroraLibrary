import { EllipsisIcon } from 'lucide-react';
import { ComponentProps } from 'react';
import { Link } from 'react-router';

type PaginationNextPagesProps = ComponentProps<'li'> & {
	link: string;
};

export function PaginationNextPages({
	className,
	link,
	...props
}: PaginationNextPagesProps) {
	return (
		<li {...props}>
			<Link to={link}>
				<span className='text-xl font-medium tracking-wider'>...</span>
			</Link>
		</li>
	);
}
