import { Button } from '@components/button';
import { Input } from '@components/input';
import { Loading } from '@components/loading';

import { Form, redirect, useNavigation } from 'react-router';
import { Route } from './+types/index';

import { Show } from '@components/utils/show';
import { useFetchApi } from '@hooks/useFetchApi';
import { LoginSchemaType, loginSchema } from './login-schema';

export async function action({ request }: Route.ActionArgs) {
	const api = useFetchApi();
	try {
		const formData = await request.formData();

		const user = {
			login: String(formData.get('login')),
			password: String(formData.get('password')),
		};
		const validate = loginSchema.safeParse(user);

		if (validate.success) {
			const response = api.post<LoginSchemaType>('/login', validate.data);
			console.log(response);
			/* 	if (response?.token) return redirect('/home');
			return response; */
		}
	} catch (error) {
		throw new Error(`Failed to validate login: ${error}`);
	}
}

export default function Login({ actionData }: Route.ComponentProps) {
	const navigation = useNavigation();
	const isSubmitting = navigation.formAction === '/';

	return (
		<div>
			<header className="mb-5">
				<span>Boas vindas a</span>
				<h1 className="text-2xl font-semibold">Aurora Library</h1>
			</header>
			<Form
				method="POST"
				className="grid gap-3 min-w-96 rounded-lg ring-1 ring-zinc-300 shadow-md"
			>
				<header>
					<h2 className="p-2 pl-3 font-medium">Login</h2>
					<hr />
				</header>
				<div className="grid gap-7 p-4">
					<Input.Container>
						<Input.Label id="login">Email</Input.Label>
						<Input.Control
							id="login"
							name="login"
							type="email"
							className="py-2"
							placeholder="ex: juliasants@gmail.com"
							disabled={isSubmitting}
						/>
					</Input.Container>
					<Input.Container>
						<Input.Label id="password">Senha</Input.Label>
						<Input.Control
							id="password"
							name="password"
							className="py-2"
							type="password"
							placeholder="ex: 123@ju.vcx"
							disabled={isSubmitting}
						/>
					</Input.Container>
					<Button
						variant="dark"
						disabled={isSubmitting}
						className="justify-center font-medium h-10 w-full mt-3"
					>
						<Show condition={isSubmitting} fallback={<>Entrar</>}>
							<Loading size={5} />
						</Show>
					</Button>
				</div>
			</Form>
		</div>
	);
}
