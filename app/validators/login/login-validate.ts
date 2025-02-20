import { useFetchApi } from '@hooks/useFetchApi';
import { loginSchema } from './login-schema';

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

	if (validate.error) {
		return {
			error: {
				title: 'Login incorreto!',
				message: 'Usuário e/ou senha inválidos...',
			},
		};
	}

	try {
		const res = await api.post<typeof user, LoginResponseServerType>(
			'/login',
			validate.data,
		);
	
		if (res.token) {
			return { token: res.token };
		}
	
		return {
			error: {
				title: 'Erro inesperado!',
				message: 'Erro ao enviar os dados, tente novamente mais tarde.',
			},
		};
	} catch (error) {
		console.error(error);
	}

}
