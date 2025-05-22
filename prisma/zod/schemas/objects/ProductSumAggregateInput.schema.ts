import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductSumAggregateInputType> = z
  .object({
    rating: z.literal(true).optional(),
    reviewsCount: z.literal(true).optional(),
  })
  .strict();

export const ProductSumAggregateInputObjectSchema = Schema;
