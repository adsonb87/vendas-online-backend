import { CreateUserDto } from "./dtos/createUser.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAllUsers(): Promise<{
        password: any;
        id: number;
        name: string;
        email: string;
        phone: string;
        cpf: string;
    }[]>;
    createUser(createUser: CreateUserDto): Promise<import("./intefaces/user.interface").User>;
}
