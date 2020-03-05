// import {
//   creteAPI
// } from '@/utils/request'

import request from '@/utils/request'

// export const apiName = (data) => creteAPI('/', 'GET', data)

// export const getUserInfo = ({username, password}) => creteAPI('/', 'GET', {username, password})

export const userLogin = ({username, password}) => {
  request({
    url: '/',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}