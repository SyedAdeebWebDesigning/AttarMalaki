import { z } from 'zod';
import { SizeSchema } from '../enums/Size.schema';
import { ProductCreateNestedOneWithoutQuantitiesInputObjectSchema } from './ProductCreateNestedOneWithoutQuantitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityCreateInput> = z
  .object({
    id: z.string().optional(),
    size: z.lazy(() => SizeSchema),
    price: z.number(),
    discountPrice: z.number().optional().nullable(),
    stock: z.number(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutQuantitiesInputObjectSchema,
    ),
  })
  .strict();

export const ProductQuantityCreateInputObjectSchema = Schema;
