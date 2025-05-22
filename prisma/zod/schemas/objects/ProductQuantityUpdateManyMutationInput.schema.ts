import { z } from 'zod';
import { SizeSchema } from '../enums/Size.schema';
import { EnumSizeFieldUpdateOperationsInputObjectSchema } from './EnumSizeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductQuantityUpdateManyMutationInput> = z
  .object({
    size: z
      .union([
        z.lazy(() => SizeSchema),
        z.lazy(() => EnumSizeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    price: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    discountPrice: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    stock: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ProductQuantityUpdateManyMutationInputObjectSchema = Schema;
