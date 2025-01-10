/**
 * Capitalize alphabetic characters
 * @param string value - Any string.
 * @return string - A string capitalized.
 * @example param "john moto" return "John Moto"
 */
export function capitalize(value: string): string {
	// '\b' of regex represents, in this case, a start of expression
	return value.replace(/\b\w/g, (char) => char.toUpperCase());
}
