import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { UserRepository } from './repository/user.repository';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UserService {
    private readonly repository;
    constructor(repository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    findAllUsers(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, user: UpdateUserDto): Promise<UserEntity>;
    delete(id: number): Promise<UserEntity>;
    hashPassword(password: string): Promise<any>;
}
