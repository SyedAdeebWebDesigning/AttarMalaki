import { z } from 'zod';
import { userCreateInputObjectSchema } from './objects/userCreateInput.schema';
import { userUncheckedCreateInputObjectSchema } from './objects/userUncheckedCreateInput.schema';

export const userCreateOneSchema = z.object({
  data: z.union([
    userCreateInputObjectSchema,
    userUncheckedCreateInputObjectSchema,
  ]),
});
