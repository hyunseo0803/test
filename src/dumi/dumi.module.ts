import { Module } from '@nestjs/common';
import { DumiService } from './dumi.service';
import { DumiController } from './dumi.controller';

@Module({
  providers: [DumiService],
  controllers: [DumiController]
})
export class DumiModule {}
