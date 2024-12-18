import { createContext } from 'react';

export type RadioGroupControlValue = string | number | readonly string[] | undefined;

export interface RadioGroupContextProps {
  name: string;
  defaultValue: RadioGroupControlValue;
  handleChange: (value: RadioGroupControlValue) => void;
}

export const RadioGroupContext = createContext<RadioGroupContextProps>(
	{} as RadioGroupContextProps,
);