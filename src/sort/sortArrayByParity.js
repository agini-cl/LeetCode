/**
 * 922. 按奇偶排序数组 II
 * 先排序，再分奇偶
 */
export default (arr) => {
    // 升序排序
    arr.sort((a, b) => a - b)
    // console.log(arr)

    // // 1. 声明一个空数组用来存储奇偶排序后的数组
    let r = []
    // 记录奇数、偶数位下标
    let odd = 1
    let even = 0
    // 对数组进行遍历
    arr.forEach(item => {
        if (item % 2 === 1) {
            r[odd] = item
            odd += 2
        } else {
            r[even] = item
            even += 2
        }
    })
    return r

    // 2. 不开辟额外空间
    const swap = (m, n) => {
        let temp = arr[m]
        arr[m] = arr[n]
        arr[n] = temp
    }
    let len = arr.length
    let odd = 1, even = 0
    while (even < len) {
        if (arr[even] % 2 === 1) {
            while (arr[odd] % 2 === 1) odd += 2
            swap(even, odd)
        }
        even += 2
    }
    return arr
}