"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const city_repository_1 = require("./repository/city.repository");
const cache_service_1 = require("../cache/cache.service");
let CityService = class CityService {
    constructor(repository, cacheService) {
        this.repository = repository;
        this.cacheService = cacheService;
    }
    async create(createCityDto) {
        const { state, ...city } = createCityDto;
        return await this.repository.create(city, state);
    }
    async findAll() {
        return await this.repository.findAll();
    }
    async findOne(id) {
        return await this.repository.findOne(id);
    }
    async findCityForState(id) {
        return this.cacheService.getCache(`state_${id}`, () => this.repository.findCityForState(id));
    }
    async update(id, updateCityDto) {
        const { state, ...city } = updateCityDto;
        if (!state) {
            return await this.repository.updateCity(id, city);
        }
        else {
            return await this.repository.updateCityState(id, city, state);
        }
    }
    async remove(id) {
        return await this.repository.remove(id);
    }
};
exports.CityService = CityService;
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [city_repository_1.CityRepository,
        cache_service_1.CacheService])
], CityService);
//# sourceMappingURL=city.service.js.map