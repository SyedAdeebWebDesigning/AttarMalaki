import { z } from 'zod';
import { ReviewWhereUniqueInputObjectSchema } from './ReviewWhereUniqueInput.schema';
import { ReviewCreateWithoutProductInputObjectSchema } from './ReviewCreateWithoutProductInput.schema';
import { ReviewUncheckedCreateWithoutProductInputObjectSchema } from './ReviewUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => ReviewWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ReviewCreateWithoutProductInputObjectSchema),
      z.lazy(() => ReviewUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const ReviewCreateOrConnectWithoutProductInputObjectSchema = Schema;
