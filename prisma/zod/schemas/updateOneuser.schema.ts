import { z } from 'zod';
import { userUpdateInputObjectSchema } from './objects/userUpdateInput.schema';
import { userUncheckedUpdateInputObjectSchema } from './objects/userUncheckedUpdateInput.schema';
import { userWhereUniqueInputObjectSchema } from './objects/userWhereUniqueInput.schema';

export const userUpdateOneSchema = z.object({
  data: z.union([
    userUpdateInputObjectSchema,
    userUncheckedUpdateInputObjectSchema,
  ]),
  where: userWhereUniqueInputObjectSchema,
});
