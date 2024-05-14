import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { CityRepository } from './repository/city.repository';
import { CityEntity } from './interfaces/city.entity';
export declare class CityService {
    private readonly repository;
    constructor(repository: CityRepository);
    create(createCityDto: CreateCityDto): Promise<CityEntity>;
    findAll(): Promise<CityEntity[]>;
    findOne(id: number): Promise<CityEntity>;
    update(id: number, updateCityDto: UpdateCityDto): Promise<CityEntity>;
    remove(id: number): Promise<CityEntity>;
}
