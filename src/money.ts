export class Money {
  public amount: number
  public _currency: string

  constructor (amount: number, _currency: string) {
    this.amount = amount
    this._currency = _currency
  }

  static dollar (amount: number): Dollar {
    return new Dollar(amount, 'USD')
  }

  static euro (amount: number): Euro {
    return new Euro(amount, 'EUR')
  }

  equals (other: Money): boolean {
    if (this._currency !== other._currency) {
      return false
    }
    return this.amount === other.amount
  }

  currency (): string {
    return this._currency
  }

  times (multiplier: number): Money {
    return new Money(this.amount * multiplier, this._currency)
  }
}

export class Dollar extends Money {

}

export class Euro extends Money {

}
