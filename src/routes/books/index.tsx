import { HeaderRoute } from '@components/header-route';
import { RoundedContainer } from '@components/rounded-container';

export default function Books() {
	return (
		<RoundedContainer>
			<HeaderRoute routeName="Livros" action="Listagem" />
		</RoundedContainer>
	);
}
