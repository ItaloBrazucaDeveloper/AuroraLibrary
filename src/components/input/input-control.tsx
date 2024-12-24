import { LucideProps } from 'lucide-react';
import { ComponentProps, ComponentType, forwardRef } from 'react';

type InputControlProps = ComponentProps<'input'> & {
	icon?: ComponentType<LucideProps>;
  error?: string;
};

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>(
	({ className, icon: Icon, ...props }, ref) => {
		return <input ref={ref} {...props} />;
	},
);
