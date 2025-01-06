import z from 'zod';

const regex = {
	name: /[\p{L}\s]+/u,
	tellphone: /\(\d{2}\)(\s9.|\s)[0-9]{4}-[0-9]{4}/,
	cpf: /[0-9]{3}\.[0-9]{3}.[0-9]{3}-[0-9]{2}/,
	cep: /[0-9]{2}[0-9]{3}-[0-9]{3}/,
	onlyNumbers: /\d/,
};

const clientSchema = z.object({
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
	tellphone: z
		.string()
		.nonempty('Campo vazio. Insira seu número de telefone.')
		.regex(regex.onlyNumbers, 'Este campo aceita apenas números.')
		.min(14, 'Telefone muito curto. Este campo deve ter mais de 14 caracteres.')
		.max(16, 'Telefone muito longo. Este campo tem o limite de 16 caracteres.')
		.regex(regex.tellphone, 'Formato de telefone inválido.'),
	cpf: z
		.string()
		.nonempty('Campo vazio. Insira seu CPF.')
		.length(14, 'Tamanho de CPF inválido.')
		.regex(regex.cpf, 'Formato de CPF inválido.'),
	cep: z
		.string()
		.nonempty('Campo vazio. Insira seu CEP.')
		.length(9, 'Tamanho de CEP inválido.')
		.regex(regex.cep, 'Formato de CEP inválido.'),
	number: z
		.string()
		.nonempty('Campo vazio. Insira o número do seu endereço.')
		.max(
			6,
			'Número muito grande. Este campo aceita até o valor máximo de 999.999',
		),
});

type ClientType = z.infer<typeof clientSchema>;

export { clientSchema, type ClientType };
