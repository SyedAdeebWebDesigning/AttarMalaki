import { z } from 'zod';
import { userWhereUniqueInputObjectSchema } from './objects/userWhereUniqueInput.schema';

export const userDeleteOneSchema = z.object({
  where: userWhereUniqueInputObjectSchema,
});
