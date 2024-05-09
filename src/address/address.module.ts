import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddressRepository } from './repository/address.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AddressController],
  providers: [AddressService, PrismaService, AddressRepository],
  exports: [AddressService],
})
export class AddressModule {}
