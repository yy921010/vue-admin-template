import request from 'utils/request'

const url = '/blogs'
/**
 *
 * @param {object} param0
 */
export function getBlog({ pageNumber, pageSize }) {
  return request({
    url: `${url}?page=${pageNumber}&size=${pageSize}`,
    method: 'get'
  })
}

export function saveBlog(data = {}) {
  return request({
    url,
    method: 'post',
    data
  })
}

export function updateBlog(data = {}) {
  const { _id } = data
  delete data._id
  return request({
    url: `${url}/${_id}`,
    method: 'put',
    data
  })
}

export function deleteBlog(id) {
  return request({
    url: `${url}/${id}`,
    method: 'delete'
  })
}

export function deleteImage(name, data) {
  console.log(name)
  return request({
    url: `/images/${name}`,
    method: 'delete',
    data
  })
}
