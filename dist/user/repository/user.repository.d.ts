import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from '../interfaces/user.entity';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
export declare class UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(user: CreateUserDto): Promise<UserEntity>;
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, user: UpdateUserDto): Promise<UserEntity>;
    delete(id: number): Promise<UserEntity>;
}
