import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    create(createCityDto: CreateCityDto): Promise<import("./interfaces/city.entity").CityEntity>;
    findAll(): Promise<import("./interfaces/city.entity").CityEntity[]>;
    findOne(id: string): Promise<import("./interfaces/city.entity").CityEntity>;
    findCityForState(id: string): Promise<import("./interfaces/city.entity").CityEntity[]>;
    update(id: string, updateCityDto: UpdateCityDto): Promise<import("./interfaces/city.entity").CityEntity>;
    remove(id: string): Promise<import("./interfaces/city.entity").CityEntity>;
}
