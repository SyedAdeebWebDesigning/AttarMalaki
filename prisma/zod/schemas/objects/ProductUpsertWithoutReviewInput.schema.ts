import { z } from 'zod';
import { ProductUpdateWithoutReviewInputObjectSchema } from './ProductUpdateWithoutReviewInput.schema';
import { ProductUncheckedUpdateWithoutReviewInputObjectSchema } from './ProductUncheckedUpdateWithoutReviewInput.schema';
import { ProductCreateWithoutReviewInputObjectSchema } from './ProductCreateWithoutReviewInput.schema';
import { ProductUncheckedCreateWithoutReviewInputObjectSchema } from './ProductUncheckedCreateWithoutReviewInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithoutReviewInput> = z
  .object({
    update: z.union([
      z.lazy(() => ProductUpdateWithoutReviewInputObjectSchema),
      z.lazy(() => ProductUncheckedUpdateWithoutReviewInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ProductCreateWithoutReviewInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutReviewInputObjectSchema),
    ]),
  })
  .strict();

export const ProductUpsertWithoutReviewInputObjectSchema = Schema;
