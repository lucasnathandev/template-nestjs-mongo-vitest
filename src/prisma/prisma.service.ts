import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger: Logger = new Logger(PrismaService.name);
  async onModuleInit() {
    await this.$connect();
    this.logger.log("Connected to database");
  }
}
