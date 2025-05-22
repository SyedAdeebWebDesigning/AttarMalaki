import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewUpdateWithoutProductInputObjectSchema } from './ReviewUpdateWithoutProductInput.schema';
import { ReviewUncheckedUpdateWithoutProductInputObjectSchema } from './ReviewUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReviewUpdateWithoutProductInputObjectSchema),
        z.lazy(() => ReviewUncheckedUpdateWithoutProductInputObjectSchema),
      ]),
    })
    .strict();

export const ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
