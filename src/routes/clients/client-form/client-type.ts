import { z } from 'zod';
import { clientSchema } from './client-schema';

export type ClientSchemaType = z.infer<typeof clientSchema>;
