import { z } from 'zod';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductRelationFilter> = z
  .object({
    is: z
      .lazy(() => ProductWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => ProductWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProductRelationFilterObjectSchema = Schema;
