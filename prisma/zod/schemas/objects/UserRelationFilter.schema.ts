import { z } from 'zod';
import { userWhereInputObjectSchema } from './userWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserRelationFilter> = z
  .object({
    is: z
      .lazy(() => userWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => userWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const UserRelationFilterObjectSchema = Schema;
