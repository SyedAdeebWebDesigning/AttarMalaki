import { z } from 'zod';
import { SizeSchema } from '../enums/Size.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumSizeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => SizeSchema).optional(),
  })
  .strict();

export const EnumSizeFieldUpdateOperationsInputObjectSchema = Schema;
