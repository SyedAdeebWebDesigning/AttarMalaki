import { z } from 'zod';
import { ProductQuantityScalarWhereInputObjectSchema } from './ProductQuantityScalarWhereInput.schema';
import { ProductQuantityUpdateManyMutationInputObjectSchema } from './ProductQuantityUpdateManyMutationInput.schema';
import { ProductQuantityUncheckedUpdateManyWithoutQuantitiesInputObjectSchema } from './ProductQuantityUncheckedUpdateManyWithoutQuantitiesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ProductQuantityScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductQuantityUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ProductQuantityUncheckedUpdateManyWithoutQuantitiesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ProductQuantityUpdateManyWithWhereWithoutProductInputObjectSchema =
  Schema;
