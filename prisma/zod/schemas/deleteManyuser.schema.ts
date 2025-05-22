import { z } from 'zod';
import { userWhereInputObjectSchema } from './objects/userWhereInput.schema';

export const userDeleteManySchema = z.object({
  where: userWhereInputObjectSchema.optional(),
});
