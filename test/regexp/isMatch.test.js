import isMatch from '../../src/regexp/isMatch'

test('isMatch', () => {
    expect(isMatch('aa', 'a')).toBe(false)
})
test('isMatch', () => {
    expect(isMatch('aa', 'a*')).toBe(true)
})
test('isMatch', () => {
    expect(isMatch('aa', '.*')).toBe(true)
})
test('isMatch', () => {
    expect(isMatch('aab', 'c*a*b*')).toBe(true)
})
test('isMatch', () => {
    expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false)
})