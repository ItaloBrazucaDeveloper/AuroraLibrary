import { AddressType } from './address-type';

export type ClientType = {
	id_user: number;
	name: string;
	phone: string;
	email: string;
	cpf: string;
	address: AddressType;
};
