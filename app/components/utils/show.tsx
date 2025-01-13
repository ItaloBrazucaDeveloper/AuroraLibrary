import { Fragment, ReactNode } from 'react';

interface ShowProps {
	condition: boolean;
	fallback?: ReactNode;
	children: ReactNode;
}

/**
 *  Renders children if condition is true, otherwise renders fallback
 * @param condition - boolean
 * @param fallback - ReactNode (default: `<Fragment />`)
 * @param children - ReactNode
 * @returns ReactNode
 */
export function Show({
	condition,
	children,
	fallback = <Fragment />,
}: ShowProps) {
	return condition ? children : fallback;
}
