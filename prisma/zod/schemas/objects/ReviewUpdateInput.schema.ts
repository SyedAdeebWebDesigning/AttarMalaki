import { z } from 'zod';
import { IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { userUpdateOneRequiredWithoutReviewNestedInputObjectSchema } from './userUpdateOneRequiredWithoutReviewNestedInput.schema';
import { ProductUpdateOneRequiredWithoutReviewNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutReviewNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewUpdateInput> = z
  .object({
    rating: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    comment: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    updatedAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    user: z
      .lazy(() => userUpdateOneRequiredWithoutReviewNestedInputObjectSchema)
      .optional(),
    product: z
      .lazy(() => ProductUpdateOneRequiredWithoutReviewNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ReviewUpdateInputObjectSchema = Schema;
