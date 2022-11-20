export abstract class Money {
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
    if (this.constructor !== other.constructor) {
      return false
    }
    return this.amount === other.amount
  }

  currency (): string {
    return this._currency
  }

  abstract times (multiplier: number): Money
}

export class Dollar extends Money {
  times (multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier, 'USD')
  }
}

export class Euro extends Money {
  times (multiplier: number): Euro {
    return new Euro(this.amount * multiplier, 'EUR')
  }
}
