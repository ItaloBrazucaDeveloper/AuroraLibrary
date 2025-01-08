import { z } from 'zod';
import { clientSchema } from './client-schema';

export type ClientType = z.infer<typeof clientSchema>;
