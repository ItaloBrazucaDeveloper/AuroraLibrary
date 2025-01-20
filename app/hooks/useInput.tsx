import { useState } from 'react';
import { ZodError } from 'zod';

type ErrorsStateProps = Pick<ZodError, 'issues'>;

export function useInput() {
	const [errors, setErrors] = useState<ErrorsStateProps | null>(null);

	function handleErrors(errors: ErrorsStateProps) {
		setErrors(errors);
	}

	function getErrorMessage(inputName: string): string | null {
		const issue = errors?.issues.find((issue) => {
			const [fieldName] = issue.path;
			return fieldName === inputName;
		});
		return issue?.message || null;
	}

	return {
		errors,
    handleErrors,
		getErrorMessage,
	};
}
