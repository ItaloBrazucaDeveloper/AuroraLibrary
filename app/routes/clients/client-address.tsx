import { AddressType } from '~types/address-type';

type ClientAddressProps = Pick<AddressType, 'city' | 'state' | 'neighborhood'>;

export function ClientAddress({
	city,
	state,
	neighborhood,
}: ClientAddressProps) {
	return (
		<>
			<span className="text-zinc-600">
				{city} - {state}
			</span>
			<br />
			{neighborhood}
		</>
	);
}
