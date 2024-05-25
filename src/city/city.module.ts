import { Module } from '@nestjs/common';
import { CityService } from './city.service';
import { CityController } from './city.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { CityRepository } from './repository/city.repository';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [PrismaModule, CacheModule],
  controllers: [CityController],
  providers: [CityService, PrismaService, CityRepository],
  exports: [CityService],
})
export class CityModule {}
