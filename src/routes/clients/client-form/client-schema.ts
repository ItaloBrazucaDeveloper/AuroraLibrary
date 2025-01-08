import z from 'zod';

const regex = {
	name: /[\p{L}\s]+/u,
	phone: /\(\d{2}\)(\s9.|\s)[0-9]{4}-[0-9]{4}/,
	cpf: /[0-9]{3}\.[0-9]{3}.[0-9]{3}-[0-9]{2}/,
	cep: /[0-9]{2}[0-9]{3}-[0-9]{3}/,
};

export const clientSchema = z.object({
	name: z
		.string()
		.nonempty('Campo vazio. Insira seu nome completo.')
		.regex(regex.name, 'Este campo aceita apenas letras.')
		.min(3, 'Nome muito curto. Este campo deve ter mais de 3 caracteres.')
		.max(45, 'Nome muito longo. Este campo tem o limite de 45 caracteres.'),
	email: z
		.string()
		.nonempty('Campo vazio. Insira seu email.')
		.email('Email inválido.'),
	phone: z
		.string()
		.nonempty('Campo vazio. Insira seu número de telefone.')
		.regex(regex.phone, 'Formato de telefone inválido.')
		.min(14, 'Telefone muito curto. Este campo deve ter mais de 14 caracteres.')
		.max(16, 'Telefone muito longo. Este campo tem o limite de 16 caracteres.'),
	cpf: z
		.string()
		.nonempty('Campo vazio. Insira seu CPF.')
		.length(14, 'Tamanho de CPF inválido.')
		.regex(regex.cpf, 'Formato de CPF inválido.'),
	address: z.object({
		cep: z
			.string()
			.nonempty('Campo vazio. Insira seu CEP.')
			.length(9, 'Tamanho de CEP inválido.')
			.regex(regex.cep, 'Formato de CEP inválido.'),
		number: z
			.number()
			.min(1, 'Número inválido. Insira um número maior que 0 neste campo.')
			.max(
				999_999,
				'Número muito grande. Este campo aceita até o valor máximo de 999.999',
			),
	}),
});
