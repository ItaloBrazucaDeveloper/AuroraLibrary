import z from 'zod';

const regexPassword = /[a-zA-Z0-9!@#$%^&*()_+~]{8,20}/;

export const loginSchema = z.object({
	login: z
		.string()
		.nonempty('Campo vazio. Insira seu email.')
		.email('Email inválido.'),
	password: z
		.string()
		.nonempty('Campo vazio. Insira sua senha.')
		.regex(regexPassword, 'Senha inválida.')
		.min(8, 'Senha muito curta. Este campo deve ter pelo menos 8 caracteres.')
		.max(20, 'Senha muito longa. Este campo tem o limite de 20 caracteres.'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
