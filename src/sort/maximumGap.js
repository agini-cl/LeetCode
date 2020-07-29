/* 164. 最大间距
 * 给定一个无序数组，找出数组在排序之后，相邻元素之间最大的差值
 * 避免使用 sort() 方法
 */
export default (arr) => {
    if (arr.length < 1) return 0
    let len = arr.length
    let maxGap = 0
    let gap

    const swap = (m, n) => {
        let temp = arr[m]
        arr[m] = arr[n]
        arr[n] = temp
    }

    // 选择排序
    for (let i = 0, min; i < len; i++) {
        min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        swap(i, min)
        if (i > 0) {
            gap = arr[i] - arr[i - 1]
            if (gap > maxGap) {
                maxGap = gap
            }
        }
    }
    return maxGap
}