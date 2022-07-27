import axios from 'axios'
import qs from 'qs'

const TIMEOUT = 21000

/**
 * 重组URL
 * @param path
 * @param hostType
 * @returns {string}
 */
async function getUrl(path) {
  return path
}

/**
 * 重组参数
 * @param {*} paramsType
 * @param {*} params
 */
function joinParams(params, paramsType = 'normal') {
  const joinMap = {
    normal: () => {
      return params
    },
    stringify: () => {
      // return utils.base.paramToStr(params).replace(/\?/, '')
      return qs.stringify(params)
    }
  }
  return joinMap[paramsType]()
}

async function getHeader(
  token,
  contentType = 'json',
  acceptType = 'normal',
  headerParams = {}
) {
  // const k = store.state.device === APP ? 'i-token' : 'token'
  const typeMap = {
    form: 'application/x-www-form-urlencoded;charset=UTF-8',
    json: 'application/json',
    formData: 'multipart/form-data'
  }
  const acceptMap = {
    normal: 'application/json, text/plain, */*',
    export:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
  }
  console.log(process.env.NODE_ENV)
  return {
    'env': process.env.NODE_ENV === 'pre' ? 'pre':'',
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': typeMap[contentType],
    Accept: acceptMap[acceptType],
    ...headerParams
  }
}

export async function postAxios(path, params = {}) {
  const url = await getUrl(path)
  // 整合参数
  const obj = {
    method: 'POST',
    url,
    timeout: TIMEOUT,
    // params: query
    data: joinParams(params)
  }

  const headers = await getHeader()
  const result = await axios({
    ...obj,
    headers
  })

  return result
}

export async function getAxios(path) {
  const url = await getUrl(path)
  const result   = await axios.get(`${url}`, {
  })

  return result
}