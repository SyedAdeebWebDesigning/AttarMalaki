import { z } from 'zod';
import { ProductQuantityWhereUniqueInputObjectSchema } from './ProductQuantityWhereUniqueInput.schema';
import { ProductQuantityCreateWithoutProductInputObjectSchema } from './ProductQuantityCreateWithoutProductInput.schema';
import { ProductQuantityUncheckedCreateWithoutProductInputObjectSchema } from './ProductQuantityUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductQuantityWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ProductQuantityCreateWithoutProductInputObjectSchema),
        z.lazy(
          () => ProductQuantityUncheckedCreateWithoutProductInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuantityCreateOrConnectWithoutProductInputObjectSchema =
  Schema;
