/**
 * Capitalize alphabetic characters
 *
 * @param string value - Any string.
 * @returns string - A string capitalized.
 *
 * @example
 *
 * // Usage example
 * const name = 'JuliA sanTos';
 * const captalizedName = capitalize(name);
 * // Output: 'Julia Santos'
 */
export function capitalize(value: string): string {
	// '\b', of regex, represents, in this case, a start of expression
	const getFirstLetterOfWordsRegex = /\b\w/g;
	const allLowerCase = value.toLowerCase();

	return allLowerCase.replace(getFirstLetterOfWordsRegex, (firstLetter) =>
		firstLetter.toUpperCase(),
	);
}
