import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }
}
