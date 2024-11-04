export class CreateOrderCommand {
  customerId: string;
  product: string;
  quantity: number;

  constructor(props: any) {
    this.customerId = props.customerId;
    this.product = props.product;
    this.quantity = props.quantity;
  }
}

export class OrderCreatedEvent {
  id: number;
  constructor(props: any) {
    this.id = props.id;
  }
}
