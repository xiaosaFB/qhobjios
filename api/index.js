import http from './interface'
/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// 获取某类型最新的APP信息
export const linkfetch = (data) => {
    return http.request({
        url: '/link/fetch',
        method: 'POST', 
        data,
		dataType: 'json',
		header: {
			'Content-Type': 'application/json;charset=UTF-8'
		},
		headeruse: false
    })
}
// 在需要的页面引入import api from '@/xxx/index.js' 即可使用 e.g: api.login({}).then((res)=>{}).catch((err)=>{})
 
export default {
	linkfetch, // 获取某类型最新的APP信息
}