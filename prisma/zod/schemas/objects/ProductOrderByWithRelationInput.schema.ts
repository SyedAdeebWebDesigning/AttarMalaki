import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReviewOrderByRelationAggregateInputObjectSchema } from './ReviewOrderByRelationAggregateInput.schema';
import { ProductQuantityOrderByRelationAggregateInputObjectSchema } from './ProductQuantityOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    slug: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    shortDescription: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    tags: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    rating: z.lazy(() => SortOrderSchema).optional(),
    reviewsCount: z.lazy(() => SortOrderSchema).optional(),
    isFeatured: z.lazy(() => SortOrderSchema).optional(),
    isBestSeller: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    Review: z
      .lazy(() => ReviewOrderByRelationAggregateInputObjectSchema)
      .optional(),
    quantities: z
      .lazy(() => ProductQuantityOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductOrderByWithRelationInputObjectSchema = Schema;
