import { clientSchema } from "./client-schema";

export function validateClient(formData: FormData) {
  const client = {
    name: String(formData.get('name')),
    email: String(formData.get('email')),
    phone: String(formData.get('phone')),
    cpf: String(formData.get('cpf')),
    address: {
      number: Number(formData.get('number')),
      cep: String(formData.get('cep')),
    },
  };
  const validate = clientSchema.safeParse(client);

  if (validate.success) {
    return {
      success: {
        data: validate.data
      },
    };
  }

  return {
    issues: validate.error.issues
  };
}
