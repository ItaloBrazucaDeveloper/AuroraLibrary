import { Input } from '@components/input';
import { useFetchApi } from '@hooks/useFetchApi';

import { Route } from './+types/index';
import { ClientSchemaType, validateClient } from '~validation/client';
import { Form } from 'react-router';

export async function action({ request }: Route.ActionArgs) {
	const api = useFetchApi();
	const formData = await request.formData();
	const validate = validateClient(formData);

	if (validate.success) {
		const response = await api.post('/users', validate.success.data);

		if (response.success) {
			return;
		}
	}

	return;
}

export function ClientForm({ data: client }: { data: ClientSchemaType }) {
	return (
		<Form method='POST' className="flex flex-col gap-5">
			<Input.Container>
				<Input.Label>Nome</Input.Label>
				<Input.Control
					name="name"
					placeholder="ex: João Da Dilva"
					defaultValue={client?.name}
					className="py-2"
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>Email</Input.Label>
				<Input.Control
					name="email"
					placeholder="ex: jo123@gmail.com"
					defaultValue={client?.email}
					className="py-2"
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>Telefone</Input.Label>
				<Input.Control
					name="phone"
					placeholder="ex: (61) 9.9999-9999"
					defaultValue={client?.phone}
					className="py-2"
					inputMask='(##) #.####-####'
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>CPF</Input.Label>
				<Input.Control
					name="cpf"
					placeholder="ex: 000.000.000-00"
					defaultValue={client?.cpf}
					className="py-2"
					inputMask='###.###.###-##'
				/>
			</Input.Container>
			<fieldset>
				<span className="text-zinc-500">Endereço</span>
				<div className="flex gap-5">
					<Input.Container>
						<Input.Label>CEP</Input.Label>
						<Input.Control
							name="cep"
							placeholder="ex: 00.000-000"
							defaultValue={client?.address?.cep}
							className="py-2"
							inputMask='#####-##'
						/>
					</Input.Container>
					<Input.Container>
						<Input.Label>Número</Input.Label>
						<Input.Control
							name="number"
							type="number"
							placeholder="ex: 15"
							defaultValue={client?.address?.number}
							className="py-2"
						/>
					</Input.Container>
				</div>
			</fieldset>
		</Form>
	);
}
