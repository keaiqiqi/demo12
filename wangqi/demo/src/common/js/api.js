// 把所有的网络请求的地址都放到这里
// 都放到一个变量里然后在导出去
var baseUrl = '/api'
var recommend = baseUrl+ 'personalized?limit=6';
// 获取轮播图
var banner =  baseUrl + 'banner';
// 获取热搜词
var hot =   baseUrl + 'top/list?idx=1';
var playlist = baseUrl + 'playlist/detail'
var songdetail = baseUrl +'song/detail'
export default{
     recommend,banner,hot,playlist,songdetail
} 