import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  enableShutdownHooks(app: INestApplication) {
    const closeApp = async () => {
      try {
        await app.close();
      } finally {
        await this.$disconnect();
      }
    };

    process.on("SIGINT", closeApp);
    process.on("SIGTERM", closeApp);
  }
}
