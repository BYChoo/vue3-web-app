import { getAxios } from './axios'

export default {
  //查询banner列表
  async getBannerList(o = {}){
    return getAxios(`https://itunes.apple.com/hk/rss/topgrossingapplications/limit=${o.limit}/json`)
  },
  // 查询free列表
  async getFreeList(o={}) {
    return getAxios(`https://itunes.apple.com/hk/rss/topfreeapplications/limit=${o.limit}/json`)
  }
}
