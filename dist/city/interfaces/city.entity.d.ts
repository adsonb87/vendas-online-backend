import { City } from '@prisma/client';
export declare class CityEntity implements City {
    id: number;
    name: string;
    stateId: number;
    createdAt: Date;
    updatedAt: Date;
}
