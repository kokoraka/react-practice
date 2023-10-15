
import Currency from "./Currency"

export default class Money {
  constructor(
    private amount: number, 
    private currency: Currency,
  ) {}

  public getFormatedAmount(): string {
    return this.currency.symbol + this.amount.toLocaleString()
  }

  public static createDefault(amount: number): Money {
    return new Money(amount, new Currency("Rp", "IDR"))
  }

}
