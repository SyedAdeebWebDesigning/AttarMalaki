import { z } from 'zod';
import { ProductCreateWithoutQuantitiesInputObjectSchema } from './ProductCreateWithoutQuantitiesInput.schema';
import { ProductUncheckedCreateWithoutQuantitiesInputObjectSchema } from './ProductUncheckedCreateWithoutQuantitiesInput.schema';
import { ProductCreateOrConnectWithoutQuantitiesInputObjectSchema } from './ProductCreateOrConnectWithoutQuantitiesInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedOneWithoutQuantitiesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutQuantitiesInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutQuantitiesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ProductCreateOrConnectWithoutQuantitiesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const ProductCreateNestedOneWithoutQuantitiesInputObjectSchema = Schema;
