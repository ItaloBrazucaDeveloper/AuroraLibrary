import { VariantProps, tv } from 'tailwind-variants';
import { loading } from './styles-variants';

const spin = tv({
	extend: loading,
	base: 'animate-spin rounded-full border-2',
	variants: {
		theme: {
			light: 'border-zinc-800 border-t-zinc-100',
			dark: 'border-zinc-100 border-t-zinc-800',
			system:
				'border-zinc-800 border-t-zinc-100 dark:border-zinc-100 dark:border-t-zinc-800',
		},
	},
});

type SpinLoadingProps = VariantProps<typeof spin>;

export function SpinLoading({
	size = 'sm',
	theme = 'system',
}: SpinLoadingProps) {
	return <div className={spin({ size, theme })} />;
}
