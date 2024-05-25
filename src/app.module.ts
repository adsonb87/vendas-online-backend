import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { CacheModule } from './cache/cache.module';

@Module({
  imports: [UserModule, PrismaModule, StateModule, CityModule, AddressModule, CacheModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
