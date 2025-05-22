import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantitySumAggregateInputType> = z
  .object({
    price: z.literal(true).optional(),
    discountPrice: z.literal(true).optional(),
    stock: z.literal(true).optional(),
  })
  .strict();

export const ProductQuantitySumAggregateInputObjectSchema = Schema;
