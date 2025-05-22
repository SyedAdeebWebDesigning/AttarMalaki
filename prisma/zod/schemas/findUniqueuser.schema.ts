import { z } from 'zod';
import { userWhereUniqueInputObjectSchema } from './objects/userWhereUniqueInput.schema';

export const userFindUniqueSchema = z.object({
  where: userWhereUniqueInputObjectSchema,
});
