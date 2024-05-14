import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCityDto } from '../dto/create-city.dto';
import { CityEntity } from '../interfaces/city.entity';
import { UpdateCityDto } from '../dto/update-city.dto';
export declare class CityRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCityDto: CreateCityDto): Promise<CityEntity>;
    findAll(): Promise<CityEntity[]>;
    findOne(id: number): Promise<CityEntity>;
    update(id: number, city: UpdateCityDto): Promise<CityEntity>;
    remove(id: number): Promise<CityEntity>;
}
