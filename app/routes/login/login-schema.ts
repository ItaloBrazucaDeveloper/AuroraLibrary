import z from 'zod';

const regex = {
	name: /[\p{L}\s]+/u,
	password: /[a-zA-Z0-9!@#$%^&*()_+~]{8,20}/,
};

export const loginSchema = z.object({
	name: z
		.string()
		.nonempty('Campo vazio. Insira seu nome completo.')
		.regex(regex.name, 'Este campo aceita apenas letras.')
		.min(3, 'Nome muito curto. Este campo deve ter mais de 3 caracteres.')
		.max(45, 'Nome muito longo. Este campo tem o limite de 45 caracteres.'),
	password: z
		.string()
		.nonempty('Campo vazio. Insira sua senha.')
		.regex(regex.password, 'Senha inválida.')
		.min(8, 'Senha muito curta. Este campo deve ter pelo menos 8 caracteres.')
		.max(20, 'Senha muito longa. Este campo tem o limite de 20 caracteres.'),
});
