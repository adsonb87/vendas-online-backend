import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUser: CreateUserDto): Promise<import("./interfaces/user.entity").UserEntity>;
    findAllUsers(): Promise<import("./interfaces/user.entity").UserEntity[]>;
    findOne(id: string): Promise<import("./interfaces/user.entity").UserEntity>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./interfaces/user.entity").UserEntity>;
    delete(id: string): Promise<import("./interfaces/user.entity").UserEntity>;
}
