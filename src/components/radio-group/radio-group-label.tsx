import { ComponentProps } from "react";

type RadioGroupLabelProps = ComponentProps<'label'>;

export function RadioGroupLabel({ className, ...props }: RadioGroupLabelProps) {
	return <label className={className} {...props} />;
}