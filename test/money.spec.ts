import { Bank } from '@/bank'
import { Expression } from '@/expression'
import { Money } from '@/money'
import { Sum } from '@/sum'
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

  it('should return a sum when plus is used', () => {
    const five = Money.dollar(5)
    const result: Expression = five.plus(five)
    const sum = result as Sum
    expect(sum.augend).toEqual(five)
    expect(sum.addend).toEqual(five)
  })

  it('should reduce from a sum ', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4))

    const bank = new Bank()
    const result = bank.reduce(sum, 'USD')

    expect(result).toEqual(Money.dollar(7))
  })

  it('should reduce from a money', () => {
    const bank = new Bank()
    const result: Money = bank.reduce(Money.dollar(1), 'USD')
    expect(result).toEqual(Money.dollar(1))
  })
})
