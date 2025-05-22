import { z } from 'zod';
import { ProductUpdateWithoutQuantitiesInputObjectSchema } from './ProductUpdateWithoutQuantitiesInput.schema';
import { ProductUncheckedUpdateWithoutQuantitiesInputObjectSchema } from './ProductUncheckedUpdateWithoutQuantitiesInput.schema';
import { ProductCreateWithoutQuantitiesInputObjectSchema } from './ProductCreateWithoutQuantitiesInput.schema';
import { ProductUncheckedCreateWithoutQuantitiesInputObjectSchema } from './ProductUncheckedCreateWithoutQuantitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutQuantitiesInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutQuantitiesInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutQuantitiesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutQuantitiesInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutQuantitiesInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutQuantitiesInputObjectSchema = Schema;
