import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { userCountOrderByAggregateInputObjectSchema } from './userCountOrderByAggregateInput.schema';
import { userMaxOrderByAggregateInputObjectSchema } from './userMaxOrderByAggregateInput.schema';
import { userMinOrderByAggregateInputObjectSchema } from './userMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    clerkId: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.lazy(() => SortOrderSchema).optional(),
    lastName: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    isAdmin: z.lazy(() => SortOrderSchema).optional(),
    imgUrl: z.lazy(() => SortOrderSchema).optional(),
    hasCompletedAddresses: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => userCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => userMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => userMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const userOrderByWithAggregationInputObjectSchema = Schema;
