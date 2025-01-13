/**
 * Capitalize alphabetic characters
 * @param string value - Any string.
 * @return string - A string capitalized.
 * @example param "john moto" return "John Moto"
 */
export function capitalize(value: string): string {
	// '\b' of regex represents, in this case, a start of expression
	const allLowerCase = value.toLowerCase();
	return allLowerCase.replace(/\b\w/g, (firstLetter) =>
		firstLetter.toUpperCase(),
	);
}
