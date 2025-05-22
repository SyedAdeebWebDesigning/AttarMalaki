import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductQuantityCountOrderByAggregateInputObjectSchema } from './ProductQuantityCountOrderByAggregateInput.schema';
import { ProductQuantityAvgOrderByAggregateInputObjectSchema } from './ProductQuantityAvgOrderByAggregateInput.schema';
import { ProductQuantityMaxOrderByAggregateInputObjectSchema } from './ProductQuantityMaxOrderByAggregateInput.schema';
import { ProductQuantityMinOrderByAggregateInputObjectSchema } from './ProductQuantityMinOrderByAggregateInput.schema';
import { ProductQuantitySumOrderByAggregateInputObjectSchema } from './ProductQuantitySumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    size: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    discountPrice: z.lazy(() => SortOrderSchema).optional(),
    stock: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProductQuantityCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => ProductQuantityAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => ProductQuantityMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => ProductQuantityMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => ProductQuantitySumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductQuantityOrderByWithAggregationInputObjectSchema = Schema;
