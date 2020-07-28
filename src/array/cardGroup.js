// 914. 卡牌分组
export default (arr) => {
    // 对这副牌进行排序
    arr.sort((a, b) => a - b)
    let min = Number.MAX_SAFE_INTEGER
    let dst = []
    let result = true
    for (let i = 0, len = arr.length, temp = []; i < len; i++) {
        temp.push(arr[i])
        for (let j = i + 1; j < len + 1; j++) { // 为什么是 j < len + 1，需要注意
            if (arr[i] === arr[j]) {
                temp.push(arr[j])
            } else {
                if (min > temp.length) {
                    min = temp.length
                }
                dst.push([].concat(temp))
                temp.length = 0
                i = j - 1 // 注意
                break
            }
        }
    }
    dst.every(item => {
        if (item.length % min !== 0) {
            result = false
        }
    })
    return result
}