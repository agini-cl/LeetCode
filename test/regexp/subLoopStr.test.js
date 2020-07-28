import subLoopStr from '../../src/regexp/subLoopStr'

test('subLoopStr', () => {
    expect(subLoopStr('abab')).toBe(true)
})

test('subLoopStr', () => {
    expect(subLoopStr('abababc')).toBe(false)
})