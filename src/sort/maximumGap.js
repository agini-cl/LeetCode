/**
 * 164. 最大间距
 * 给定一个无序数组，找出数组在排序之后，相邻元素之间最大的差值
 * 避免使用 sort() 方法
 */
export default (arr) => {
    if (arr.length < 2) return 0
    let len = arr.length
    let maxGap = 0
    let gap

    const swap = (m, n) => {
        let temp = arr[m]
        arr[m] = arr[n]
        arr[n] = temp
    }

    // 冒泡排序
    for (let i = len - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1)
            }
        }
        if (i < len - 1) {
            // 保存相邻项的差值
            gap = arr[i + 1] - arr[i]
            if (gap > maxGap) {
                maxGap = gap
            }
        }
    }
    return Math.max(maxGap, arr[1] - arr[0])
}