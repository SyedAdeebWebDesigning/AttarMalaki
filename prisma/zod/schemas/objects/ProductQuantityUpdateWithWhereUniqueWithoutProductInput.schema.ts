import { z } from 'zod';
import { ProductQuantityWhereUniqueInputObjectSchema } from './ProductQuantityWhereUniqueInput.schema';
import { ProductQuantityUpdateWithoutProductInputObjectSchema } from './ProductQuantityUpdateWithoutProductInput.schema';
import { ProductQuantityUncheckedUpdateWithoutProductInputObjectSchema } from './ProductQuantityUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductQuantityUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductQuantityUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuantityUpdateWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
