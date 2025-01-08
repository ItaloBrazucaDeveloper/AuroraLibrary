import { ComponentProps, FormEvent, useState } from 'react';
import { ZodError } from 'zod';

import { Input } from '@components/input';
import { useFetchApi } from '@services/useFetchApi';

import { clientSchema } from './client-schema';
import type { ClientSchemaType } from './client-type';

type ClientFormProps = ComponentProps<'form'> & {
	data?: ClientSchemaType;
};

export function ClientForm({ data, ...props }: ClientFormProps) {
	const api = useFetchApi();
	const [errorMessage, setErrorMessage] = useState<ZodError | null>(null);

	function dataValidate(data: ClientSchemaType) {
		const validation = clientSchema.safeParse(data);

		if (validation.success) {
			console.dir(validation.data);
			api.post('/users', validation.data);
		} else {
			console.error(validation.error.issues);
			setErrorMessage(validation.error);
		}
	}

	function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const dataToSend: ClientSchemaType = {
			name: String(formData.get('name')),
			email: String(formData.get('email')),
			phone: String(formData.get('phone')),
			cpf: String(formData.get('cpf')),
			address: {
				number: Number(formData.get('number')),
				cep: String(formData.get('cep')),
			},
		};
		dataValidate(dataToSend);
	}

	function getErrorMessage(inputName: string): string | null {
		const issue = errorMessage?.issues.find((issue) => {
			const [fieldName] = issue.path;
			return fieldName === inputName;
		});
		return issue?.message || null;
	}

	return (
		<form
			method="dialog"
			onSubmit={handleSubmitForm}
			className="flex flex-col gap-7"
			{...props}
		>
			<Input.Container>
				<Input.Label>Nome</Input.Label>
				<Input.Control
					name="name"
					placeholder="ex: João Da Dilva"
					value={data?.name}
					className="py-2"
				/>
				<Input.ErrorMessage message={getErrorMessage('name')} />
			</Input.Container>
			<Input.Container>
				<Input.Label>Email</Input.Label>
				<Input.Control
					name="email"
					placeholder="ex: jo123@gmail.com"
					value={data?.email}
					className="py-2"
				/>
				<Input.ErrorMessage message={getErrorMessage('email')} />
			</Input.Container>
			<Input.Container>
				<Input.Label>Telefone</Input.Label>
				<Input.Control
					name="phone"
					placeholder="ex: (61) 9.9999-9999"
					value={data?.phone}
					className="py-2"
				/>
				<Input.ErrorMessage message={getErrorMessage('tellphone')} />
			</Input.Container>
			<Input.Container>
				<Input.Label>CPF</Input.Label>
				<Input.Control
					name="cpf"
					placeholder="ex: 000.000.000-00"
					value={data?.cpf}
					className="py-2"
				/>
				<Input.ErrorMessage message={getErrorMessage('cpf')} />
			</Input.Container>
			<div>
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
						<Input.ErrorMessage message={getErrorMessage('cep')} />
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
						<Input.ErrorMessage message={getErrorMessage('number')} />
					</Input.Container>
				</div>
			</div>
		</form>
	);
}
