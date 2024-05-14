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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const user_repository_1 = require("./repository/user.repository");
let UserService = class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    async createUser(createUserDto) {
        const passwordHashed = await this.hashPassword(createUserDto.password);
        return await this.repository.create({
            ...createUserDto,
            password: passwordHashed,
        });
    }
    async findAllUsers() {
        return await this.repository.findAll();
    }
    async findOne(id) {
        return await this.repository.findOne(id);
    }
    async update(id, user) {
        if (user.password) {
            const passwordHashed = await this.hashPassword(user.password);
            user.password = passwordHashed;
        }
        return await this.repository.update(id, user);
    }
    async delete(id) {
        return await this.repository.delete(id);
    }
    async hashPassword(password) {
        const saltRounds = 10;
        const passwordHashed = await (0, bcrypt_1.hash)(password, saltRounds);
        return passwordHashed;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map