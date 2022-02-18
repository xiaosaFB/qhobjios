/**
 * 工具类
 */
import api from '@/api/index.js'
 
export function BaseTechnicalSupport(thenCu,CatchCu) {
	api.linkfetch({
		bundle_id: "com.masterofboyi",
		build_no: "1.0.0"
	}).then((res) => {
		return thenCu(res.data)
		 
	}).catch((err) => {
		return CatchCu(err)
	})
}

export default {
	BaseTechnicalSupport,

}
