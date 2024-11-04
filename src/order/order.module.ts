import { Module } from '@nestjs/common';
import { CreateOrderService } from './order.service';
import { OrderController } from './order.controller';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [CreateOrderService],
})
export class OrderModule {}
