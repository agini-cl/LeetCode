import telComb from '../../src/array/telComb'

test('telComb:23', () => {
    expect(telComb('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})