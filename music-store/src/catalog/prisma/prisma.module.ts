import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaModule],
  exports: [PrismaService],
})
@Global()
export class PrismaModule {}
