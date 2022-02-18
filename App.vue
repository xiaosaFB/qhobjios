<script>
	export default {
		onLaunch: function() {
			uni.hideTabBar()
			// 固定屏幕
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary');
			// #endif
		},
		onShow: function() {
			
		},
		onHide: function() { 
			
		}
	}
</script>
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
<style>
	/*每个页面公共css */
	page {
		
	}
</style>
