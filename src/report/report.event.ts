import {
  CommandHandler,
  EventsHandler,
  ICommandHandler,
  IEventHandler,
} from '@nestjs/cqrs';
import { OrderCreatedEvent } from 'src/order/order.command';

@EventsHandler(OrderCreatedEvent)
export class CreateOrderEventHandler
  implements IEventHandler<OrderCreatedEvent>
{
  handle(event: OrderCreatedEvent) {
    console.log('CreateOrderEvent', event);
  }
}

@EventsHandler(OrderCreatedEvent)
export class CreateOrderEventHandler2
  implements IEventHandler<OrderCreatedEvent>
{
  handle(event: OrderCreatedEvent) {
    console.log('CreateOrderEvent2', event);
    throw new Error('CreateOrderEvent2');
  }
}

@CommandHandler(OrderCreatedEvent)
export class CreateOrderCommandHandler
  implements ICommandHandler<OrderCreatedEvent>
{
  async execute(command: OrderCreatedEvent): Promise<any> {
    console.log('CreateOrderCommandHandler', command);
    throw new Error('CreateOrderEvent2');
  }
}
