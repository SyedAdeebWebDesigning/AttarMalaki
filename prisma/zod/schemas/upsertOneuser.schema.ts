import { z } from 'zod';
import { userWhereUniqueInputObjectSchema } from './objects/userWhereUniqueInput.schema';
import { userCreateInputObjectSchema } from './objects/userCreateInput.schema';
import { userUncheckedCreateInputObjectSchema } from './objects/userUncheckedCreateInput.schema';
import { userUpdateInputObjectSchema } from './objects/userUpdateInput.schema';
import { userUncheckedUpdateInputObjectSchema } from './objects/userUncheckedUpdateInput.schema';

export const userUpsertSchema = z.object({
  where: userWhereUniqueInputObjectSchema,
  create: z.union([
    userCreateInputObjectSchema,
    userUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    userUpdateInputObjectSchema,
    userUncheckedUpdateInputObjectSchema,
  ]),
});
