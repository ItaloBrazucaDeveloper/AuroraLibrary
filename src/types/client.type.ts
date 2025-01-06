import { AddressType } from './address.type';

export type ClientType = {
	id: number;
	name: string;
	email: string;
	phone: string;
	cpf: string;
	address: AddressType;
};
