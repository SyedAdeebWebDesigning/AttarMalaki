import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    clerkId: z.string().optional(),
    email: z.string().optional(),
  })
  .strict();

export const userWhereUniqueInputObjectSchema = Schema;
