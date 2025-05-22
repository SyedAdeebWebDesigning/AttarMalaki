import { z } from 'zod';
import { SizeSchema } from '../enums/Size.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityUncheckedCreateWithoutProductInput> =
  z
    .object({
      id: z.string().optional(),
      size: z.lazy(() => SizeSchema),
      price: z.number(),
      discountPrice: z.number().optional().nullable(),
      stock: z.number(),
    })
    .strict();

export const ProductQuantityUncheckedCreateWithoutProductInputObjectSchema =
  Schema;
