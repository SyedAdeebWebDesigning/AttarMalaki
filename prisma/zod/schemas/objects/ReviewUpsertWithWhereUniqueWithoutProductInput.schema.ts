import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutProductInputObjectSchema } from './ReviewUpdateWithoutProductInput.schema';
import { ReviewUncheckedUpdateWithoutProductInputObjectSchema } from './ReviewUncheckedUpdateWithoutProductInput.schema';
import { ReviewCreateWithoutProductInputObjectSchema } from './ReviewCreateWithoutProductInput.schema';
import { ReviewUncheckedCreateWithoutProductInputObjectSchema } from './ReviewUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReviewUpdateWithoutProductInputObjectSchema),
        z.lazy(() => ReviewUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ReviewCreateWithoutProductInputObjectSchema),
        z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
