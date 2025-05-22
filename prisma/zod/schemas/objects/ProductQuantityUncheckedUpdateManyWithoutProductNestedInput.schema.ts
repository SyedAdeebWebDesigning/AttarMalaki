import { z } from 'zod';
import { ProductQuantityCreateWithoutProductInputObjectSchema } from './ProductQuantityCreateWithoutProductInput.schema';
import { ProductQuantityUncheckedCreateWithoutProductInputObjectSchema } from './ProductQuantityUncheckedCreateWithoutProductInput.schema';
import { ProductQuantityCreateOrConnectWithoutProductInputObjectSchema } from './ProductQuantityCreateOrConnectWithoutProductInput.schema';
import { ProductQuantityUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductQuantityUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductQuantityCreateManyProductInputEnvelopeObjectSchema } from './ProductQuantityCreateManyProductInputEnvelope.schema';
import { ProductQuantityWhereUniqueInputObjectSchema } from './ProductQuantityWhereUniqueInput.schema';
import { ProductQuantityUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductQuantityUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductQuantityUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductQuantityUpdateManyWithWhereWithoutProductInput.schema';
import { ProductQuantityScalarWhereInputObjectSchema } from './ProductQuantityScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityUncheckedUpdateManyWithoutProductNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              ProductQuantityUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuantityUpsertWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProductQuantityCreateManyProductInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema),
          z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema),
          z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema),
          z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema),
          z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ProductQuantityUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuantityUpdateWithWhereUniqueWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ProductQuantityUpdateManyWithWhereWithoutProductInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ProductQuantityUpdateManyWithWhereWithoutProductInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductQuantityScalarWhereInputObjectSchema),
          z.lazy(() => ProductQuantityScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductQuantityUncheckedUpdateManyWithoutProductNestedInputObjectSchema =
  Schema;
