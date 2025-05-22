import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutQuantitiesInputObjectSchema } from './ProductCreateWithoutQuantitiesInput.schema';
import { ProductUncheckedCreateWithoutQuantitiesInputObjectSchema } from './ProductUncheckedCreateWithoutQuantitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutQuantitiesInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutQuantitiesInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutQuantitiesInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutQuantitiesInputObjectSchema = Schema;
