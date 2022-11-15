export class Money {
  public amount: number

  equals (other: Money): boolean {
    return this.amount === other.amount
  }
}
