import { Button } from '@components/button';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

type PaginationArrowProps = {
	direction: 'left' | 'right';
};

export function PaginationArrow({ direction }: PaginationArrowProps) {
	const Icon = direction === 'left' ? ChevronLeftIcon : ChevronRightIcon;

	return (
		<Button theme='no-outlined'>
			<Icon className="size-6 text-zinc-700" />
		</Button>
	);
}
