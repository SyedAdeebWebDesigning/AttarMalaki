import { z } from 'zod';
import { userUpdateManyMutationInputObjectSchema } from './objects/userUpdateManyMutationInput.schema';
import { userWhereInputObjectSchema } from './objects/userWhereInput.schema';

export const userUpdateManySchema = z.object({
  data: userUpdateManyMutationInputObjectSchema,
  where: userWhereInputObjectSchema.optional(),
});
