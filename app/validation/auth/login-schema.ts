import { regex } from '@utils/regex';
import z from 'zod';

export const loginSchema = z.object({
	login: z
		.string()
		.nonempty('Campo vazio. Insira seu email.')
		.email('Email inválido.'),
	password: z
		.string()
		.nonempty('Campo vazio. Insira sua senha.')
		.min(5, 'Senha muito curta. Este campo deve ter pelo menos 8 caracteres.')
		.max(20, 'Senha muito longa. Este campo tem o limite de 20 caracteres.')
		.regex(regex.password, 'Formato de senha inválido.'),
});