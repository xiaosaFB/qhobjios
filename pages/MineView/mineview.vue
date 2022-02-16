 <template>
	<view>
		
		<!--主体-->
		<view class="meMain">
			<image src="/static/newapplogo.png"></image>
			<view class="mePosition">
				<view class="meMainBox">
					<!--头部-->
					<view class="meHead">
						<view class="meHeadAvatar"><image :src="avatarUrl" mode="aspectFill"></image></view>
						<view class="meHeadName"><text@click="BindGetUserInfo()">{{ loginState == 1?'欢迎回来':nickName }}</text></view>
					</view>
					<view class="meOverBg" @click="selfzixuan">
						<view class="businessList">
							<view class="businessListTxt">我的关注</view>
							<view class="businessListYou"><image src="../../static/you.png"></image></view>
						</view>
						 
					</view>
					<!--其他-->
					<view class="meOverBg" v-if="loginState == 1">
						<view class="businessList" @click="zxOut">
							<view class="businessListTxt"></image>立即注销</view>
							<view class="businessListYou"><image src="../../static/you.png"></image></view>
						</view>
						<view class="businessList" @click="loginOut">
							<view class="businessListTxt">退出登录</view>
							<view class="businessListYou"><image src="../../static/you.png"></image></view>
						</view>
					</view>
					<!--其他-->
				</view>
			</view>
		</view>
		<!--主体-->
		<u-modal :show="showmodel" @cancel="cancel" @confirm="confirm" :title="modeltitle" :content="contentmodel" :showCancelButton="true" cancelText="取消" confirmText="确定退出"></u-modal>
		<u-modal :show="zxzh" @cancel="cancel" @confirm="confirm" :title="zxzhmodeltitle" :content="zxzhcontentmodel" :showCancelButton="true" cancelText="取消" confirmText="确定注销"></u-modal>
		</view>
</template>

<script>
	export default{
		data(){
			return{
				avatarUrl:'../../static/avatarUrl.png',//头像
				nickName:'点击登录', 
				loginState: uni.getStorageSync('login_key'),
				showmodel: false,
				contentmodel: "是否退出登录？",
				modeltitle: "退出登录提示",
				showmodel: false,
				zxzh: false,
				modeltitle: "退出登录提示",
				contentmodel: "是否退出登录？",
				zxzhmodeltitle: "注销提醒",
				zxzhcontentmodel: "您是否要注销账号？注销后需要24H人工审核确认后才会生效，且会从我们数据库永久删除您的账号等所有信息，在此期间登录此账号都会默认为取消注销操作",
			}
		},
		onLoad() {
			console.log('112111111')
		},
		onShow() { 
			console.log('123123123')
			this.loginState = uni.getStorageSync('login_key')
		},
	 created() {
		console.log('22222')
	 },
		methods:{
			selfzixuan() {
				console.log('this.loginState', this.loginState)
				if (this.loginState == '') {
					uni.showToast({
					  icon: 'none',
					  title: '请先登录'
					});
					return
				}
				uni.navigateTo({
					url: '/pages/MineView/selfzixuan'
				})
			},
			confirm() {
				setTimeout(() => {
					// 3秒后自动关闭
					this.showmodel = false;
					uni.setStorageSync('login_key','')
					uni.reLaunch({
						url: '/pages/index/index?index=0'
					});
				}, 1000)
			},
			cancel() {
				this.showmodel = false;
				this.zxzh = false
			},
			loginOut() {
				this.showmodel = true
			},
			zxOut() {
				this.zxzh = true
			},
			//点击登录
			BindGetUserInfo:function(){
				if ( this.loginState == 1 ) {
					
				} else{
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},			
			
		}
	}
</script>

<style scoped>
	.meMain{ width: 100%;position: relative; height: 100vh;background-color: #CE161A;}
	.meMain>image{ position: fixed;width: 100%;height: 50vh;display: block; bottom: 88upx;}
	.meMainBox{ width: 92%;margin: 0 auto; }
	.mePosition{ position: absolute;top: 0;left: 0;width: 100%; }
	.meHead{ overflow: hidden;position: relative;display: flex;flex-direction: column;justify-content: center;align-items: center; }
	.meHeadAvatar{ float: right;width: 19%;margin-top: 50upx; }
	.meHeadAvatar image{ width: 110upx;height: 110upx;display: block;border-radius: 50%; }
	.meHeadName{ text-align: center;float: left;padding: 0upx 25upx;width: 60%;background-color: #fff;margin-top: 50upx;border-radius: 30upx;line-height: 90upx;color: #333333;font-size: 28upx;overflow:hidden;text-overflow:ellipsis;white-space:nowrap; }
	
	.meOverBg{ background: #FFFFFF;overflow: hidden;border-radius: 12upx;margin-top: 30upx; }
	.meVisitor{ display: flex;flex-direction: row; }
	.meVisitorLt{ width: 50%;text-align: center;margin: 30upx 0; }
	.meVisitorLt:nth-child(1){ border-left: 1px #F5F5F5 solid;border-right: 1px #F5F5F5 solid; }
	.meVisitorTxt_01{ font-size: 28upx;color: #666666; }
	.meVisitorTxt_01 image{ width: 35upx;height: 35upx;vertical-align: middle;margin: 0 10upx 4upx 0; }
	.meVisitorTxt_02{ font-size: 30upx;color: #3B7ED5; }
	
	.meVisitorTitle{ font-size: 30upx;color: #333333;border-bottom: 1px #F5F5F5 solid;padding: 20upx 30upx; }
	.meOrderLt{ width: 25%;text-align: center;padding: 30upx 0;transition: all 0.4s; }
	.meOrderLt:active{ background: #E2E2E2; }
	.meOrderTxt_01{  }
	.meOrderTxt_01 image{ width: 40upx;height: 40upx;display: block;margin: 0 auto 6upx; }
	.meOrderTxt_02{ font-size: 24upx;color: #666666; }
	
	.businessList{ overflow: hidden;padding: 30upx;border-bottom: 1px #F5F5F5 solid;transition: all 0.4s; }
	.businessList:active{ background: #E2E2E2; }
	.businessList:last-child{ border-bottom: none; }
	.businessListTxt{ float: left;font-size: 28upx;color: #333333; }
	.businessListTxt image{ width: 35upx;height: 35upx;vertical-align: middle;margin: 0 10upx 4upx 0; }
	.businessListYou{ float: right;font-size: 28upx;color: #333333; }
	.businessListYou image{ width: 20upx;height: 20upx;vertical-align: middle;margin: 0 0 4upx 10upx; }
	
	
</style>
