import { Form } from '@components/form';
import { Input } from '@components/input';

export function LoanForm() {
	return (
		<Form>
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
