import { Dollar, Euro, Money } from '@/money'
import { describe, expect, it } from 'vitest'

describe('Money', () => {
  it('should correctly handle dollar multiplication', () => {
    const five: Money = Money.dollar(5)
    expect(five.times(2).equals(Money.dollar(10))).toBeTruthy()
    expect(five.times(3).equals(Money.dollar(15))).toBeTruthy()
  })

  it('should correctly handle euro multiplication', () => {
    const five: Money = Money.euro(5)
    expect(five.times(2).equals(new Euro(10, 'EUR'))).toBeTruthy()
    expect(five.times(3).equals(new Euro(15, 'EUR'))).toBeTruthy()
  })

  it('should correctly handle money equality', () => {
    expect(Money.dollar(5).equals(new Dollar(5, 'USD'))).toBeTruthy()
    expect(Money.dollar(5).equals(new Dollar(6, 'USD'))).toBeFalsy()

    expect(Money.euro(5).equals(Money.euro(5))).toBeTruthy()
    expect(Money.euro(5).equals(Money.euro(6))).toBeFalsy()

    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy()
  })

  it('should correctly handle currencies', () => {
    expect(Money.dollar(1).currency()).toEqual('USD')
    expect(Money.euro(1).currency()).toEqual('EUR')
  })
})
