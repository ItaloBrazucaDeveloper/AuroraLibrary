import { Form } from 'react-router';
import { Input } from '@components/input';

export function LoanForm() {
	return (
		<Form method='POST' className='flex flex-col gap-5'>
			<Input.Container>
				<Input.Label>Cliente</Input.Label>
				<Input.Control placeholder="" />
			</Input.Container>

			<Input.Container>
				<Input.Label>Livro</Input.Label>
				<Input.Control placeholder="" />
			</Input.Container>
		</Form>
	);
}
