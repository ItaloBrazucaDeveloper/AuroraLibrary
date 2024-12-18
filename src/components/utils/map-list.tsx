import { ReactNode } from 'react';

interface MapListProps<T> {
	list: T[];
	callback: (item: T) => ReactNode;
}

/**
 * Maps a list of items to another list
 * @param list - Array of items
 * @param callback - Function that receives each item and returns a new item
 * @returns Array of ReactNode
 */
export function MapList<T>({ list, callback }: MapListProps<T>) {
	return list.map(callback);
}
