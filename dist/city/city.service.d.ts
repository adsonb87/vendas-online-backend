import { CityRepository } from './repository/city.repository';
import { CityEntity } from './interfaces/city.entity';
import { CacheService } from 'src/cache/cache.service';
export declare class CityService {
    private readonly repository;
    private readonly cacheService;
    constructor(repository: CityRepository, cacheService: CacheService);
    create(createCityDto: any): Promise<CityEntity>;
    findAll(): Promise<CityEntity[]>;
    findOne(id: number): Promise<CityEntity>;
    findCityForState(id: number): Promise<CityEntity[]>;
    update(id: number, updateCityDto: any): Promise<CityEntity>;
    remove(id: number): Promise<CityEntity>;
}
