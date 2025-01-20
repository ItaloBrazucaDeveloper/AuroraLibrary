import { useFetchApi } from '@hooks/useFetchApi';
import { LoginSchemaType, loginSchema } from './login-schema';

type LoginResponseServerType = {
	token: string;
};

export async function validateLogin(formData: FormData) {
	const api = useFetchApi();

	const user = {
		login: String(formData.get('login')),
		password: String(formData.get('password')),
	};

	const validate = loginSchema.safeParse(user);

	if (validate.success) {
		const response = await api.post<LoginSchemaType, LoginResponseServerType>(
			'/login',
			validate.data,
		);

		if (response?.success) {
			return { success: response.success.data };
		}

		return {
			error: {
				title: 'Erro inesperado!',
				message: 'Erro ao enviar os dados, tente novamente mais tarde.',
			},
		};
	}

	return {
		error: {
			title: 'Login incorreto!',
			message: 'Usuário e/ou senha inválidos...',
		},
	};
}
