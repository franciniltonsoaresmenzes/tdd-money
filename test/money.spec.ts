import { Bank } from '@/bank'
import { Expression } from '@/expression'
import { Money } from '@/money'
import { describe, expect, it } from 'vitest'

describe('Money', () => {
  it('should handle dollar multiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy()
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy()
  })

  it('should handle money equality', () => {
    expect(Money.dollar(5).equals(new Money(5, 'USD'))).toBeTruthy()
    expect(Money.dollar(5).equals(new Money(6, 'USD'))).toBeFalsy()
    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy()
  })

  it('should handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual('USD')
    expect(Money.euro(1).currency()).toEqual('EUR')
  })

  it('should handle simple addition', () => {
    const five = Money.dollar(5)
    const sum: Expression = five.plus(five)
    const bank = new Bank()
    const reduce: Money = bank.reduce(sum, 'USD')

    expect(reduce).toEqual(Money.dollar(10))
  })
})
