import { z } from 'zod';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressUpdateWithoutUserInputObjectSchema } from './AddressUpdateWithoutUserInput.schema';
import { AddressUncheckedUpdateWithoutUserInputObjectSchema } from './AddressUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => AddressWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => AddressUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AddressUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AddressUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
