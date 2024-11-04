import { Module } from '@nestjs/common';
import {
  CreateOrderCommandHandler,
  CreateOrderEventHandler,
  CreateOrderEventHandler2,
} from './report.event';

@Module({
  imports: [],
  controllers: [],
  providers: [
    CreateOrderEventHandler,
    CreateOrderEventHandler2,
    CreateOrderCommandHandler,
  ],
})
export class ReportModule {}
