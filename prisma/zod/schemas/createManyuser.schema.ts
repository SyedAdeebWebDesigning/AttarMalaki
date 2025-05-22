import { z } from 'zod';
import { userCreateManyInputObjectSchema } from './objects/userCreateManyInput.schema';

export const userCreateManySchema = z.object({
  data: z.union([
    userCreateManyInputObjectSchema,
    z.array(userCreateManyInputObjectSchema),
  ]),
});
