// eslint-disable-next-line no-unused-vars
const DEV = 1 // 生产环境，是否mock根据传入值来判断
// eslint-disable-next-line no-unused-vars
const NO_NETWORK = 2 // 无网络环境，完全使用mock
// eslint-disable-next-line no-unused-vars
const PRODUCT = 3 // 生产环境，关闭所有mock

// 将上面的值赋值到STATUS上
const STATUS = DEV

const isApiDone = (isDone) => {
  let rtn = true
  if (STATUS === 1) { // 生产环境
    if (isDone) {
      rtn = false
    } else {
      rtn = true
    }
  } else if (STATUS === 2) { // 无网络环境，
    rtn = true
  } else if (STATUS === 3) { // 生产环境，不使用mock
    rtn = false
  }
  return rtn
}
export default isApiDone
