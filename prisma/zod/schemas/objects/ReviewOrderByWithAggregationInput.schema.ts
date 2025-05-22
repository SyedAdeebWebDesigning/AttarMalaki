import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReviewCountOrderByAggregateInputObjectSchema } from './ReviewCountOrderByAggregateInput.schema';
import { ReviewAvgOrderByAggregateInputObjectSchema } from './ReviewAvgOrderByAggregateInput.schema';
import { ReviewMaxOrderByAggregateInputObjectSchema } from './ReviewMaxOrderByAggregateInput.schema';
import { ReviewMinOrderByAggregateInputObjectSchema } from './ReviewMinOrderByAggregateInput.schema';
import { ReviewSumOrderByAggregateInputObjectSchema } from './ReviewSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    rating: z.lazy(() => SortOrderSchema).optional(),
    comment: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReviewCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ReviewAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ReviewMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ReviewMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ReviewSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ReviewOrderByWithAggregationInputObjectSchema = Schema;
