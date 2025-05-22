import { z } from 'zod';
import { ProductQuantityCreateManyProductInputObjectSchema } from './ProductQuantityCreateManyProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityCreateManyProductInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ProductQuantityCreateManyProductInputObjectSchema),
        z.lazy(() => ProductQuantityCreateManyProductInputObjectSchema).array(),
      ]),
    })
    .strict();

export const ProductQuantityCreateManyProductInputEnvelopeObjectSchema = Schema;
