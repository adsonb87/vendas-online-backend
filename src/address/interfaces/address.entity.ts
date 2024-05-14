import { Address } from '@prisma/client';

export class AddressEntity implements Address {
  id: number;
  complement: string;
  number: number;
  cep: string;
  userId: number;
  cityId: number;
  createdAt: Date;
  updatedAt: Date;
}
