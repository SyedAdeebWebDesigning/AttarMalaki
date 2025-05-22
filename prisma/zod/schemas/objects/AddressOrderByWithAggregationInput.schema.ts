import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AddressCountOrderByAggregateInputObjectSchema } from './AddressCountOrderByAggregateInput.schema';
import { AddressMaxOrderByAggregateInputObjectSchema } from './AddressMaxOrderByAggregateInput.schema';
import { AddressMinOrderByAggregateInputObjectSchema } from './AddressMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    label: z.lazy(() => SortOrderSchema).optional(),
    street: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    state: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    zipCode: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AddressCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => AddressMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AddressMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const AddressOrderByWithAggregationInputObjectSchema = Schema;
