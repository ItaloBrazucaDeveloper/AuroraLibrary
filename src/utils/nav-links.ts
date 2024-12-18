import { BookCopyIcon, BookUserIcon, HomeIcon, UsersIcon } from 'lucide-react';

export const links = [
	{
		href: '/',
		text: 'Home',
		icon: HomeIcon,
	},
	{
		href: '/books',
		text: 'Livros',
		icon: BookCopyIcon,
	},
	{
		href: '/loans',
		text: 'Empréstimos',
		icon: BookUserIcon,
	},
	{
		href: '/clients',
		text: 'Clientes',
		icon: UsersIcon,
	},
];
