import { Controller, Get } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateOrderCommand } from './order.command';

@Controller('/order')
export class OrderController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get()
  async createOrder(): Promise<any> {
    const created = await this.commandBus.execute(
      new CreateOrderCommand({
        customerId: '123',
        product: 'Apple',
        quantity: 2,
      }),
    );
    return created;
  }
}
