import { Alert } from '@components/alert';
import { Button } from '@components/button';
import { Input } from '@components/input';

import { Form } from '@components/form';
import { DotsLoading } from '@components/loading/dots';
import { Show } from '@components/utils/show';

import { AlertOctagonIcon } from 'lucide-react';
import { useNavigation } from 'react-router';
import { Route } from './+types/route';

type FormErrorType = {
	title: string;
	message: string;
};

export function LoginPage({ loaderData: { error } }: Route.ComponentProps) {
	const navigation = useNavigation();
	const isSubmitting = navigation.formAction === '/';
	const formError = error ? (JSON.parse(error) as FormErrorType) : null;

	return (
		<div>
			<header className="mb-5">
				<span>Boas vindas a</span>
				<h1 className="text-2xl font-semibold">Aurora Library</h1>
			</header>

			<div className="rounded-lg ring-1 ring-zinc-300 shadow-md">
				<header>
					<h2 className="relative p-2 pl-3 font-medium">Login</h2>
					<hr />
				</header>
				<Form method="POST" className="flex-1 w-[400px] h-[300px] px-4 py-5">
					<Input.Container>
						<Input.Label>Email</Input.Label>
						<Input.Control
							required
							name="login"
							type="email"
							className="py-2"
							placeholder="ex: juliasants@gmail.com"
							disabled={isSubmitting}
						/>
					</Input.Container>

					<Input.Container>
						<Input.Label>Senha</Input.Label>
						<Input.Control
							required
							name="password"
							className="py-2"
							type="password"
							placeholder="ex: 123@ju.vcx"
							disabled={isSubmitting}
						/>
					</Input.Container>

					{formError && (
						<Alert.Container className="text-rose-500 outline-rose-200">
							<AlertOctagonIcon className="size-9" />
							<Alert.Title>{formError.title}</Alert.Title>
							<Alert.Description>{formError.message}</Alert.Description>
						</Alert.Container>
					)}

					<Button
						theme="dark"
						disabled={isSubmitting}
						className="justify-center font-medium h-10 w-full mt-5"
					>
						<Show condition={isSubmitting} fallback={<>Entrar</>}>
							<DotsLoading />
						</Show>
					</Button>
				</Form>
			</div>
		</div>
	);
}
