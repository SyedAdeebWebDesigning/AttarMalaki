import { z } from 'zod';
import { ProductQuantityCreateWithoutProductInputObjectSchema } from './ProductQuantityCreateWithoutProductInput.schema';
import { ProductQuantityUncheckedCreateWithoutProductInputObjectSchema } from './ProductQuantityUncheckedCreateWithoutProductInput.schema';
import { ProductQuantityCreateOrConnectWithoutProductInputObjectSchema } from './ProductQuantityCreateOrConnectWithoutProductInput.schema';
import { ProductQuantityCreateManyProductInputEnvelopeObjectSchema } from './ProductQuantityCreateManyProductInputEnvelope.schema';
import { ProductQuantityWhereUniqueInputObjectSchema } from './ProductQuantityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityUncheckedCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductQuantityCreateWithoutProductInputObjectSchema),
          z
            .lazy(() => ProductQuantityCreateWithoutProductInputObjectSchema)
            .array(),
          z.lazy(
            () => ProductQuantityUncheckedCreateWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuantityUncheckedCreateWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ProductQuantityCreateOrConnectWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuantityCreateOrConnectWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProductQuantityCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema),
          z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductQuantityUncheckedCreateNestedManyWithoutProductInputObjectSchema =
  Schema;
