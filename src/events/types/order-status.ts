export enum OrderStatus {
  // when order is created is created, but the
  // ticket it is trying to order has not been reserved
  Created = "created",

  // the ticket the order is trying to reserve has already
  // been reserved, or when user has cancelled the order
  // the order has expired before payment
  Cancelled = "cancelled",

  // The order has successfully reserved the ticket
  AwaitingPayment = "awaiting:payment",

  //the order has reseved the ticket and the user has
  // provided payment successfully
  Complete = "complete",
}
