import { z } from 'zod';
import { userOrderByWithRelationInputObjectSchema } from './objects/userOrderByWithRelationInput.schema';
import { userWhereInputObjectSchema } from './objects/userWhereInput.schema';
import { userWhereUniqueInputObjectSchema } from './objects/userWhereUniqueInput.schema';
import { userScalarFieldEnumSchema } from './enums/userScalarFieldEnum.schema';

export const userFindManySchema = z.object({
  orderBy: z
    .union([
      userOrderByWithRelationInputObjectSchema,
      userOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: userWhereInputObjectSchema.optional(),
  cursor: userWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(userScalarFieldEnumSchema).optional(),
});
