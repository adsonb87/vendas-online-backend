import { CityRepository } from './repository/city.repository';
import { CityEntity } from './interfaces/city.entity';
export declare class CityService {
    private readonly repository;
    constructor(repository: CityRepository);
    create(createCityDto: any): Promise<CityEntity>;
    findAll(): Promise<CityEntity[]>;
    findOne(id: number): Promise<CityEntity>;
    update(id: number, updateCityDto: any): Promise<CityEntity>;
    remove(id: number): Promise<CityEntity>;
}
