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
exports.AddressRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AddressRepository = class AddressRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(address) {
        return await this.prisma.address.create({
            data: address,
            include: {
                city: true,
                user: true,
            },
        });
    }
    async findAll() {
        return await this.prisma.address.findMany();
    }
    async findOne(id) {
        return await this.prisma.address.findUnique({
            where: { id },
            include: {
                city: true,
                user: true,
            },
        });
    }
    async update(id, updateAddressDto) {
        return await this.prisma.address.update({
            where: { id },
            data: {
                ...updateAddressDto,
            },
            include: {
                city: true,
                user: true,
            },
        });
    }
    async remove(id) {
        return await this.prisma.address.delete({
            where: { id },
            include: {
                city: true,
                user: true,
            },
        });
    }
};
exports.AddressRepository = AddressRepository;
exports.AddressRepository = AddressRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AddressRepository);
//# sourceMappingURL=address.repository.js.map