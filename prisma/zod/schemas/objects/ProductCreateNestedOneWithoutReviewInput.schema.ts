import { z } from 'zod';
import { ProductCreateWithoutReviewInputObjectSchema } from './ProductCreateWithoutReviewInput.schema';
import { ProductUncheckedCreateWithoutReviewInputObjectSchema } from './ProductUncheckedCreateWithoutReviewInput.schema';
import { ProductCreateOrConnectWithoutReviewInputObjectSchema } from './ProductCreateOrConnectWithoutReviewInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutReviewInput> = z
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
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutReviewInputObjectSchema = Schema;
