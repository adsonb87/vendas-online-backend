import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("User")
@Controller("/api/v1/user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }

  @Get()
  async findAllUsers() {
    return this.userService.findAllUsers();
  }
}
