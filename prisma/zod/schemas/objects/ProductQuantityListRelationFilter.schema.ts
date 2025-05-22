import { z } from 'zod';
import { ProductQuantityWhereInputObjectSchema } from './ProductQuantityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityListRelationFilter> = z
  .object({
    every: z.lazy(() => ProductQuantityWhereInputObjectSchema).optional(),
    some: z.lazy(() => ProductQuantityWhereInputObjectSchema).optional(),
    none: z.lazy(() => ProductQuantityWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProductQuantityListRelationFilterObjectSchema = Schema;
