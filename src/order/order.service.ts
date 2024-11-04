import {
  CommandBus,
  CommandHandler,
  EventBus,
  ICommandHandler,
} from '@nestjs/cqrs';
import { CreateOrderCommand, OrderCreatedEvent } from './order.command';
import { InternalServerErrorException } from '@nestjs/common';

@CommandHandler(CreateOrderCommand)
export class CreateOrderService implements ICommandHandler<CreateOrderCommand> {
  constructor(
    private readonly eventBus: EventBus,
    private readonly commandBus: CommandBus,
  ) {}
  async execute(command: CreateOrderCommand): Promise<any> {
    try {
      console.log('CreateOrderCommand', command);
      const result = { id: 1 };
      //await this.eventBus.publish(new OrderCreatedEvent(result));
      await this.commandBus.execute(new OrderCreatedEvent(result));
      return result;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
