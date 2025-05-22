import { z } from 'zod';
import { ReviewCreateWithoutProductInputObjectSchema } from './ReviewCreateWithoutProductInput.schema';
import { ReviewUncheckedCreateWithoutProductInputObjectSchema } from './ReviewUncheckedCreateWithoutProductInput.schema';
import { ReviewCreateOrConnectWithoutProductInputObjectSchema } from './ReviewCreateOrConnectWithoutProductInput.schema';
import { ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ReviewUpsertWithWhereUniqueWithoutProductInput.schema';
import { ReviewCreateManyProductInputEnvelopeObjectSchema } from './ReviewCreateManyProductInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ReviewUpdateWithWhereUniqueWithoutProductInput.schema';
import { ReviewUpdateManyWithWhereWithoutProductInputObjectSchema } from './ReviewUpdateManyWithWhereWithoutProductInput.schema';
import { ReviewScalarWhereInputObjectSchema } from './ReviewScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateManyWithoutProductNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ReviewCreateWithoutProductInputObjectSchema),
        z.lazy(() => ReviewCreateWithoutProductInputObjectSchema).array(),
        z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema),
        z
          .lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ReviewCreateOrConnectWithoutProductInputObjectSchema),
        z
          .lazy(() => ReviewCreateOrConnectWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(
          () => ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema,
        ),
        z
          .lazy(
            () => ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => ReviewCreateManyProductInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema,
        ),
        z
          .lazy(
            () => ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ReviewUpdateManyWithWhereWithoutProductInputObjectSchema),
        z
          .lazy(() => ReviewUpdateManyWithWhereWithoutProductInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ReviewScalarWhereInputObjectSchema),
        z.lazy(() => ReviewScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReviewUpdateManyWithoutProductNestedInputObjectSchema = Schema;
