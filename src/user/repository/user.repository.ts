import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserEntity } from '../interfaces/user.entity';
import { CreateUserDto } from '../dtos/createUser.dto';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: CreateUserDto): Promise<UserEntity> {
    return await this.prisma.user.create({
      data: user,
    });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.prisma.user.findMany();
  }
}
