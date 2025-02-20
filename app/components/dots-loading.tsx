import { DotIcon } from 'lucide-react';
import { ComponentProps } from 'react';
import { tv } from 'tailwind-variants';

const spin = tv({
	slots: {
		base: 'flex justify-center',
		dot: 'animate-[bounce_0.6s_ease-in-out_infinite] -mx-2 size-8',
	},
	variants: {
		delayDot: {
			default: { dot: 'animate-[bounce_0.6s_ease-in-out_infinite]' },
			'0.2': { dot: 'animate-[bounce_0.6s_ease-in-out_0.2s_infinite]' },
			'0.3': { dot: 'animate-[bounce_0.6s_ease-in-out_0.35s_infinite]' },
		},
	},
});

type DotsLoadingProps = ComponentProps<'div'>;

export function DotsLoading({ className }: DotsLoadingProps) {
	const { base, dot } = spin();

	return (
		<div className={base({ className })}>
			<DotIcon className={dot({ delayDot: 'default' })} />
			<DotIcon className={dot({ delayDot: '0.2' })} />
			<DotIcon className={dot({ delayDot: '0.3' })} />
		</div>
	);
}
