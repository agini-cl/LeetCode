import maximumGap from '../../src/sort/maximumGap'

test('maximumGap: [3, 6, 9, 1]', () => {
    expect(maximumGap([3, 6, 9, 1])).toBe(3)
})
test('maximumGap: [10]', () => {
    expect(maximumGap([10])).toBe(0)
})

test('maximumGap: [3, 9, 6, 14]', () => {
    expect(maximumGap([3, 9, 6, 14])).toBe(5)
})
test('maximumGap: [13, 16, 19, 1]', () => {
    expect(maximumGap([13, 16, 19, 1])).toBe(12)
})