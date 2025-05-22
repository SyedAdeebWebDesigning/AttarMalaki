import { z } from 'zod';
import { SizeSchema } from '../enums/Size.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumSizeFilter> = z
  .object({
    equals: z.lazy(() => SizeSchema).optional(),
    in: z
      .union([z.lazy(() => SizeSchema).array(), z.lazy(() => SizeSchema)])
      .optional(),
    notIn: z
      .union([z.lazy(() => SizeSchema).array(), z.lazy(() => SizeSchema)])
      .optional(),
    not: z
      .union([
        z.lazy(() => SizeSchema),
        z.lazy(() => NestedEnumSizeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const NestedEnumSizeFilterObjectSchema = Schema;
