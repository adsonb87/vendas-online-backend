import { CreateUserDto } from "./dtos/createUser.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUser: CreateUserDto): Promise<import("./interfaces/user.entity").UserEntity>;
    findAllUsers(): Promise<import("./interfaces/user.entity").UserEntity[]>;
}
