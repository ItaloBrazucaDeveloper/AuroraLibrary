import { AddressType } from './address-type';

export type ClientType = {
	id: number;
	name: string;
	phone: string;
	email: string;
	cpf: string;
	address: AddressType;
};
