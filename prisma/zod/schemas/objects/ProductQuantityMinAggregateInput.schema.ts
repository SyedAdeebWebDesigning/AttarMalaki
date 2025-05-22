import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    size: z.literal(true).optional(),
    price: z.literal(true).optional(),
    discountPrice: z.literal(true).optional(),
    stock: z.literal(true).optional(),
  })
  .strict();

export const ProductQuantityMinAggregateInputObjectSchema = Schema;
