import { z } from 'zod';
import { ProductCreateWithoutQuantitiesInputObjectSchema } from './ProductCreateWithoutQuantitiesInput.schema';
import { ProductUncheckedCreateWithoutQuantitiesInputObjectSchema } from './ProductUncheckedCreateWithoutQuantitiesInput.schema';
import { ProductCreateOrConnectWithoutQuantitiesInputObjectSchema } from './ProductCreateOrConnectWithoutQuantitiesInput.schema';
import { ProductUpsertWithoutQuantitiesInputObjectSchema } from './ProductUpsertWithoutQuantitiesInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutQuantitiesInputObjectSchema } from './ProductUpdateWithoutQuantitiesInput.schema';
import { ProductUncheckedUpdateWithoutQuantitiesInputObjectSchema } from './ProductUncheckedUpdateWithoutQuantitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutQuantitiesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutQuantitiesInputObjectSchema),
          z.lazy(
            () => ProductUncheckedCreateWithoutQuantitiesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutQuantitiesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => ProductUpsertWithoutQuantitiesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutQuantitiesInputObjectSchema),
          z.lazy(
            () => ProductUncheckedUpdateWithoutQuantitiesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneRequiredWithoutQuantitiesNestedInputObjectSchema =
  Schema;
