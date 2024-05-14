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
exports.CityRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CityRepository = class CityRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(city, state) {
        return await this.prisma.city.create({
            data: {
                ...city,
                state: {
                    connect: {
                        name: state.name,
                    },
                },
            },
            include: { state: true },
        });
    }
    async findAll() {
        return await this.prisma.city.findMany();
    }
    async findOne(id) {
        return await this.prisma.city.findUnique({
            where: { id },
            include: { state: true },
        });
    }
    async updateCity(id, city) {
        return await this.prisma.city.update({
            where: { id },
            data: {
                ...city,
            },
            include: { state: true },
        });
    }
    async updateCityState(id, city, state) {
        return await this.prisma.city.update({
            where: { id },
            data: {
                ...city,
                state: {
                    connect: {
                        name: state.name,
                    },
                },
            },
            include: { state: true },
        });
    }
    async remove(id) {
        return await this.prisma.city.delete({ where: { id } });
    }
};
exports.CityRepository = CityRepository;
exports.CityRepository = CityRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CityRepository);
//# sourceMappingURL=city.repository.js.map