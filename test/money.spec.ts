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
    expect(five.times(2).equals(new Euro(10))).toBeTruthy()
    expect(five.times(3).equals(new Euro(15))).toBeTruthy()
  })

  it('should correctly handle money equality', () => {
    expect(Money.dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(new Dollar(6))).toBeFalsy()

    expect(Money.euro(5).equals(Money.euro(5))).toBeTruthy()
    expect(Money.euro(5).equals(Money.euro(6))).toBeFalsy()

    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy()
  })
})
