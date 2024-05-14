import { PrismaService } from 'src/prisma/prisma.service';
import { CityEntity } from '../interfaces/city.entity';
export declare class CityRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(city: any, state: any): Promise<CityEntity>;
    findAll(): Promise<CityEntity[]>;
    findOne(id: number): Promise<CityEntity>;
    updateCity(id: number, city: any): Promise<CityEntity>;
    updateCityState(id: number, city: any, state: any): Promise<CityEntity>;
    remove(id: number): Promise<CityEntity>;
}
