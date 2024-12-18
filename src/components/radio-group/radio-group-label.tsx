import { ComponentProps } from "react";

type RadioGroupLabelProps = ComponentProps<'label'>;

export function RadioGroupLabel({ ...props }: RadioGroupLabelProps) {
	return <label {...props} />;
}