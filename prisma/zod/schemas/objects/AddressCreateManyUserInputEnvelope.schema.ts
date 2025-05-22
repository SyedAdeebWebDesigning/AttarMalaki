import { z } from 'zod';
import { AddressCreateManyUserInputObjectSchema } from './AddressCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => AddressCreateManyUserInputObjectSchema),
      z.lazy(() => AddressCreateManyUserInputObjectSchema).array(),
    ]),
  })
  .strict();

export const AddressCreateManyUserInputEnvelopeObjectSchema = Schema;
