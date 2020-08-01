import sortArrayByParity from '../../src/sort/sortArrayByParity'

test('sortArrayByParity: [4, 2, 5, 7]', () => {
    expect(sortArrayByParity([4, 2, 5, 7])).toEqual([2, 5, 4, 7])
})