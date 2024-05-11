import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { UserRepository } from './repository/user.repository';
export declare class UserService {
    private readonly repository;
    constructor(repository: UserRepository);
    createUser(createUserDto: CreateUserDto): Promise<UserEntity>;
    findAllUsers(): Promise<UserEntity[]>;
}
