// src/behavioral/strategy/PaymentStrategy.ts
interface PaymentStrategy {
    pay(amount: number): void;
}

export class PayPalPayment implements PaymentStrategy {
    pay(amount: number) { console.log(`Paid ${amount} using PayPal.`); }
}

export class CryptoPayment implements PaymentStrategy {
    pay(amount: number) { console.log(`Paid ${amount} using Bitcoin.`); }
}

export class ShoppingCart {
    private strategy: PaymentStrategy;
    constructor(s: PaymentStrategy) { this.strategy = s; }

    setStrategy(s: PaymentStrategy) { this.strategy = s; }
    checkout(amount: number) { this.strategy.pay(amount); }
}
