// import {
//   creteAPI
// } from '@/utils/request'

import request from '@/utils/request'

// export const apiName = (data) => creteAPI('/', 'GET', data)

// export const getUserInfo = ({username, password}) => creteAPI('/', 'GET', {username, password})

export const userLogin = ({mobile, code}) => {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile,
      code
    }
  })
}
