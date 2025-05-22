import { z } from 'zod';
import { ProductQuantityWhereUniqueInputObjectSchema } from './ProductQuantityWhereUniqueInput.schema';
import { ProductQuantityUpdateWithoutProductInputObjectSchema } from './ProductQuantityUpdateWithoutProductInput.schema';
import { ProductQuantityUncheckedUpdateWithoutProductInputObjectSchema } from './ProductQuantityUncheckedUpdateWithoutProductInput.schema';
import { ProductQuantityCreateWithoutProductInputObjectSchema } from './ProductQuantityCreateWithoutProductInput.schema';
import { ProductQuantityUncheckedCreateWithoutProductInputObjectSchema } from './ProductQuantityUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductQuantityUpdateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductQuantityUncheckedUpdateWithoutProductInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ProductQuantityCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductQuantityUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuantityUpsertWithWhereUniqueWithoutProductInputObjectSchema =
  Schema;
