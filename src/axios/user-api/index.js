/**
 * 用户相关的请求接口
 */

import request from '../index'

// 登录
// export const loginApi = ({ mobile, code }) => {
//   return request({
//     method: 'POST',
//     url: `/app/v1_0/authorizations`,
//     data: { mobile, code }
//   })
// }

// data: { mobile, code }
const 登录 = `/app/v1_0/authorizations`
export const loginApi = (data) => request.post(登录, data)
