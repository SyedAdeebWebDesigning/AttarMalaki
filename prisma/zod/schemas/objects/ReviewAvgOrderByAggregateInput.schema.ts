import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewAvgOrderByAggregateInput> = z
  .object({
    rating: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ReviewAvgOrderByAggregateInputObjectSchema = Schema;
