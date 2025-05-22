import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    slug: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    shortDescription: z.literal(true).optional(),
    category: z.literal(true).optional(),
    image: z.literal(true).optional(),
    rating: z.literal(true).optional(),
    reviewsCount: z.literal(true).optional(),
    isFeatured: z.literal(true).optional(),
    isBestSeller: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict();

export const ProductMinAggregateInputObjectSchema = Schema;
