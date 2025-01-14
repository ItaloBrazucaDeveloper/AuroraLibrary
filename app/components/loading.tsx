type LoadingProps = {
	size?: number;
	color?: string;
};

export function Loading({ size = 8, color = 'zinc' }: LoadingProps) {
	return (
		<div
			className={`animate-spin rounded-full size-${size} border-t-2 border-t-${color}-50 border-2 border-${color}-400`}
		/>
	);
}
