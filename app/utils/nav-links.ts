import { BookCopyIcon, BookUserIcon, HomeIcon, UsersIcon } from 'lucide-react';

export const navLinks = [
	{
		to: '/books',
		text: 'Livros',
		icon: BookCopyIcon,
	},
	{
		to: '/loans',
		text: 'Empréstimos',
		icon: BookUserIcon,
	},
	{
		to: '/clients',
		text: 'Clientes',
		icon: UsersIcon,
	},
];
