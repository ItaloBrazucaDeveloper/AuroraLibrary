import { type ComponentProps } from 'react';

import { Input } from '@components/input';
import { useFetchApi } from '@hooks/useFetchApi';

import { Route } from '../+types/index';
import { type ClientSchemaType, validateClient } from './client-schema';

type ClientFormProps = ComponentProps<'form'> & {
	data?: ClientSchemaType;
};

export async function action({ request }: Route.ActionArgs) {
	const api = useFetchApi();
	const formData = await request.formData();
	const validate = validateClient(formData);

	if (validate.success) {
		const response = await api.post('/users', validate.data);

		if (response.success) {
			return;
		}
	}

	return;
}

export function ClientForm({ data, ...props }: ClientFormProps) {
	return (
		<form method="dialog" className="flex flex-col gap-5" {...props}>
			<Input.Container>
				<Input.Label>Nome</Input.Label>
				<Input.Control
					name="name"
					placeholder="ex: João Da Dilva"
					value={data?.name}
					className="py-2"
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>Email</Input.Label>
				<Input.Control
					name="email"
					placeholder="ex: jo123@gmail.com"
					value={data?.email}
					className="py-2"
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>Telefone</Input.Label>
				<Input.Control
					name="phone"
					placeholder="ex: (61) 9.9999-9999"
					value={data?.phone}
					className="py-2"
				/>
			</Input.Container>
			<Input.Container>
				<Input.Label>CPF</Input.Label>
				<Input.Control
					name="cpf"
					placeholder="ex: 000.000.000-00"
					value={data?.cpf}
					className="py-2"
				/>
			</Input.Container>
			<fieldset>
				<header className="space-y-2 mb-3">
					<span className="text-zinc-500">Endereço</span>
					<hr />
				</header>
				<div className="flex gap-5">
					<Input.Container>
						<Input.Label>CEP</Input.Label>
						<Input.Control
							name="cep"
							placeholder="ex: 00.000-000"
							value={data?.address?.cep}
							className="py-2"
						/>
					</Input.Container>
					<Input.Container>
						<Input.Label>Número</Input.Label>
						<Input.Control
							name="number"
							type="number"
							placeholder="ex: 15"
							value={data?.address?.number}
							className="py-2"
						/>
					</Input.Container>
				</div>
			</fieldset>
		</form>
	);
}
