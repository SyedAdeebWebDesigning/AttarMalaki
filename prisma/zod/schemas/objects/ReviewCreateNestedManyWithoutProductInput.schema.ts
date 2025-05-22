import { z } from 'zod';
import { ReviewCreateWithoutProductInputObjectSchema } from './ReviewCreateWithoutProductInput.schema';
import { ReviewUncheckedCreateWithoutProductInputObjectSchema } from './ReviewUncheckedCreateWithoutProductInput.schema';
import { ReviewCreateOrConnectWithoutProductInputObjectSchema } from './ReviewCreateOrConnectWithoutProductInput.schema';
import { ReviewCreateManyProductInputEnvelopeObjectSchema } from './ReviewCreateManyProductInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutProductInput> = z
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
    createMany: z
      .lazy(() => ReviewCreateManyProductInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => ReviewWhereUniqueInputObjectSchema),
        z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ReviewCreateNestedManyWithoutProductInputObjectSchema = Schema;
