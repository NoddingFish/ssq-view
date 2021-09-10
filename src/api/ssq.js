import request from '@/utils/request'

export function list (data) {
  return request({
    url: '/list',
    method: 'get',
    data
  })
}

export function info (data) {
  return request({
    url: '/info',
    method: 'get',
    data
  })
}
