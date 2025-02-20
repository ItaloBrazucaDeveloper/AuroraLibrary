import { CheckCircleIcon } from 'lucide-react';
import { Route } from './+types/loans';
import { LoansPage } from '../pages/loans';

export async function clientLoader() {
	return {
		loans: [
			{
				livro: (
					<>
						O Senhor que pegava fogo
						<br />
						<span className="text-zinc-400 font-light">Editora 1</span>
					</>
				),
				cliente: (
					<>
						Frodo Bolseiro
						<br />
						<span className="text-zinc-400 font-light">123.456.789-00</span>
					</>
				),
				dataEmprestimo: '01/01/2021',
				devolvidoEm: '01/02/2021',
				dataDevolucao: <span className="text-zinc-500">01/02/2021</span>,
				multa: 'R$ 0,00',
				devolvido: (
					<div className="text-sm space-x-1 bg-emerald-200 py-1 px-2 rounded-full ring-1 ring-emerald-300">
						<CheckCircleIcon className="size-5 inline text-emerald-950" />
						<span className="text-emerald-700">Sim</span>
					</div>
				),
			},
		],
	};
}

export default function Loans(props: Route.ComponentProps) {
	return <LoansPage {...props} />;
}

export async function action() {

}
