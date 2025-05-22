import { z } from 'zod';
import { ProductCreateWithoutReviewInputObjectSchema } from './ProductCreateWithoutReviewInput.schema';
import { ProductUncheckedCreateWithoutReviewInputObjectSchema } from './ProductUncheckedCreateWithoutReviewInput.schema';
import { ProductCreateOrConnectWithoutReviewInputObjectSchema } from './ProductCreateOrConnectWithoutReviewInput.schema';
import { ProductUpsertWithoutReviewInputObjectSchema } from './ProductUpsertWithoutReviewInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutReviewInputObjectSchema } from './ProductUpdateWithoutReviewInput.schema';
import { ProductUncheckedUpdateWithoutReviewInputObjectSchema } from './ProductUncheckedUpdateWithoutReviewInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutReviewNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutReviewInputObjectSchema),
          z.lazy(() => ProductUncheckedCreateWithoutReviewInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutReviewInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutReviewInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutReviewInputObjectSchema),
          z.lazy(() => ProductUncheckedUpdateWithoutReviewInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutReviewNestedInputObjectSchema =
  Schema;
