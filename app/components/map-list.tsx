import { ReactNode } from 'react';

interface MapListProps<T> {
	list: T[];
	callback: (item: T, index: number) => ReactNode;
}

export function MapList<T>({ list, callback }: MapListProps<T>) {
	return list.map(callback);
}
