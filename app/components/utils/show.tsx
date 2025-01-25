import { Fragment, ReactNode } from 'react';

interface ShowProps {
	condition: boolean;
	fallback?: ReactNode;
	children: ReactNode;
}

export function Show({
	condition,
	children,
	fallback = <Fragment />,
}: ShowProps) {
	return condition ? children : fallback;
}
