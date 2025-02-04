import { Label } from "@components/label";
import { ComponentProps } from "react";

type RadioGroupLabelProps = ComponentProps<'label'>;

export function RadioGroupLabel({ className, ...props }: RadioGroupLabelProps) {
	return <Label className={className} {...props} />;
}