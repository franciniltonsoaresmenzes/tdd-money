import { Dollar } from '@/dollar'
import { describe, expect, it } from 'vitest'

describe('Dollar', () => {
  it('should return 10 when five dollar multiplied by two and 15 when multiplied bt three', () => {
    const five: Dollar = new Dollar(5)
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy()
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy()
  })

  it('should return true when dollars of the same value compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})
