import { z } from 'zod';
import { ReviewCreateWithoutUserInputObjectSchema } from './ReviewCreateWithoutUserInput.schema';
import { ReviewUncheckedCreateWithoutUserInputObjectSchema } from './ReviewUncheckedCreateWithoutUserInput.schema';
import { ReviewCreateOrConnectWithoutUserInputObjectSchema } from './ReviewCreateOrConnectWithoutUserInput.schema';
import { ReviewCreateManyUserInputEnvelopeObjectSchema } from './ReviewCreateManyUserInputEnvelope.schema';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReviewCreateWithoutUserInputObjectSchema),
          z.lazy(() => ReviewCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => ReviewUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ReviewCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => ReviewCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ReviewCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReviewWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ReviewUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
