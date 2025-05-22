import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewAvgAggregateInputType> = z
  .object({
    rating: z.literal(true).optional(),
  })
  .strict();

export const ReviewAvgAggregateInputObjectSchema = Schema;
