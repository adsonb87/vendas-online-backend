"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityModule = void 0;
const common_1 = require("@nestjs/common");
const city_service_1 = require("./city.service");
const city_controller_1 = require("./city.controller");
const prisma_module_1 = require("../prisma/prisma.module");
const prisma_service_1 = require("../prisma/prisma.service");
const city_repository_1 = require("./repository/city.repository");
let CityModule = class CityModule {
};
exports.CityModule = CityModule;
exports.CityModule = CityModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [city_controller_1.CityController],
        providers: [city_service_1.CityService, prisma_service_1.PrismaService, city_repository_1.CityRepository],
        exports: [city_service_1.CityService],
    })
], CityModule);
//# sourceMappingURL=city.module.js.map