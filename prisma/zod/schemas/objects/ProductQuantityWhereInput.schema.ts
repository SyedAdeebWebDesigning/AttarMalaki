import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSizeFilterObjectSchema } from './EnumSizeFilter.schema';
import { SizeSchema } from '../enums/Size.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { ProductRelationFilterObjectSchema } from './ProductRelationFilter.schema';
import { ProductWhereInputObjectSchema } from './ProductWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductQuantityWhereInputObjectSchema),
        z.lazy(() => ProductQuantityWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductQuantityWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductQuantityWhereInputObjectSchema),
        z.lazy(() => ProductQuantityWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    productId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    size: z
      .union([
        z.lazy(() => EnumSizeFilterObjectSchema),
        z.lazy(() => SizeSchema),
      ])
      .optional(),
    price: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    discountPrice: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    stock: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterObjectSchema),
        z.lazy(() => ProductWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductQuantityWhereInputObjectSchema = Schema;
