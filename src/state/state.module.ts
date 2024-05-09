import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateController } from './state.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { StateRepository } from './repository/state.repository';

@Module({
  imports: [PrismaModule],
  controllers: [StateController],
  providers: [StateService, PrismaService, StateRepository],
  exports: [StateService],
})
export class StateModule {}
