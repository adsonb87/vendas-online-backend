import { PrismaService } from "src/prisma/prisma.service";
import { UserEntity } from "../intefaces/user.entity";
import { CreateUserDto } from "../dtos/createUser.dto";
export declare class UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(user: CreateUserDto): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
}
