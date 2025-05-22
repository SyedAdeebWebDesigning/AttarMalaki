import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutReviewInputObjectSchema } from './ProductCreateWithoutReviewInput.schema';
import { ProductUncheckedCreateWithoutReviewInputObjectSchema } from './ProductUncheckedCreateWithoutReviewInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutReviewInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutReviewInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutReviewInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutReviewInputObjectSchema = Schema;
