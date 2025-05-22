import { z } from 'zod';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressCreateWithoutUserInputObjectSchema } from './AddressCreateWithoutUserInput.schema';
import { AddressUncheckedCreateWithoutUserInputObjectSchema } from './AddressUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => AddressWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AddressCreateWithoutUserInputObjectSchema),
      z.lazy(() => AddressUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AddressCreateOrConnectWithoutUserInputObjectSchema = Schema;
