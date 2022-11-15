import { Dollar } from '@/dollar'
import { describe, expect, it } from 'vitest'

describe('Dollar', () => {
  it('should return 10 when five dollar multiplied by two', () => {
    const five: Dollar = new Dollar(5)
    let product: Dollar = five.times(2)
    expect(product.amount).toEqual(10)
    product = five.times(3)
    expect(product.amount).toEqual(15)
  })
})
