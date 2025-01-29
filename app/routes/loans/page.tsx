import { Form } from "react-router";

export async function action() {
	console.log('Olá');
}

export default function LoansPage() {
	return (
		<div>
			<h1>Empréstimos</h1>
			<Form method="post">
				<input type="text" name="" />
				<input type="file" name="" />
				<button>Enviar</button>
			</Form>
		</div>
	);
}
