import { City } from '@prisma/client';

export class CityEntity implements City {
  id: number;
  name: string;
  stateId: number;
  createdAt: Date;
  updatedAt: Date;
}
