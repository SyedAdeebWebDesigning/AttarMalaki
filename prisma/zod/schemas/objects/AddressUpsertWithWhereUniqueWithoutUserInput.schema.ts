import { z } from 'zod';
import { AddressWhereUniqueInputObjectSchema } from './AddressWhereUniqueInput.schema';
import { AddressUpdateWithoutUserInputObjectSchema } from './AddressUpdateWithoutUserInput.schema';
import { AddressUncheckedUpdateWithoutUserInputObjectSchema } from './AddressUncheckedUpdateWithoutUserInput.schema';
import { AddressCreateWithoutUserInputObjectSchema } from './AddressCreateWithoutUserInput.schema';
import { AddressUncheckedCreateWithoutUserInputObjectSchema } from './AddressUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AddressUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => AddressWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => AddressUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AddressUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AddressCreateWithoutUserInputObjectSchema),
      z.lazy(() => AddressUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const AddressUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
