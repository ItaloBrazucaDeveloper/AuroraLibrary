import { Route } from '@router-types/login';
import { LoginForm } from './login-form';

export function LoginPage({ loaderData: { error } }: Route.ComponentProps) {

	return (
		<div>
			<div className="mb-5">
				<span>Boas vindas a</span>
				<h1 className="text-2xl font-semibold">Aurora Library</h1>
			</div>

			<div className="rounded-lg ring-1 ring-zinc-300 shadow-md">
				<header>
					<h2 className="relative p-2 pl-3 font-medium">Login</h2>
					<hr className='opacity-10' />
				</header>

				<LoginForm />
			</div>
		</div>
	);
}
