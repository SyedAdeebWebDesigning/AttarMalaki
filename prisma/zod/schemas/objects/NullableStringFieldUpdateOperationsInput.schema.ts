import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z
  .object({
    set: z.string().optional().nullable(),
    unset: z.boolean().optional(),
  })
  .strict();

export const NullableStringFieldUpdateOperationsInputObjectSchema = Schema;
