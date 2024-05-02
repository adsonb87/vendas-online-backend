import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepository } from "./repository/user.repository";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepository],
  exports: [UserService],
})
export class UserModule {}
