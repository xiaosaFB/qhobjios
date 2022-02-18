<template>
	<view class="PersonalCenterImpl">
		<view class="top-background-raduis"> </view>
		<view class="personalCtr-box">
			<view class="mainListBtn" @click="changePassword">
				<text @click="">修改密码</text>
				<view class="businessListYou">
					<image src="../../static/you.png"></image>
				</view>
			</view>
			<view class="mainListBtn">
				<text @click="">当前版本</text>
				<text class="businessListYou">{{BaseCurrentVersion}}</text>
			</view>
			<view class="login-card-loginIn">
			  <view class="login-card-loginIn-btn" @click="deleteLogOut">
			    注销账号
			  </view>
			</view>
		</view>
		<u-modal :show="zxzh" @cancel="cancel" @confirm="confirm" :title="zxzhmodeltitle" :content="zxzhcontentmodel"
			:showCancelButton="true" cancelText="取消" confirmText="确定注销"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarUrl: '../../static/fnPersonalCtrProfilePicture.png', //头像
				nickName: '点击登录',
				zxzh: false,
				contentmodel: "是否退出登录？",
				zxzhmodeltitle: "温馨提示",
				numwithcachestr: '',
				BaseCurrentVersion: '2',
				zxzhcontentmodel: "注销后一日工作日内我们会从数据库手动删除当前账号所有信息，且会从我们数据库永久删除您的账号等所有信息，在此期间登录此账号会判定为取消注销操作",
			}
		},
		onLoad() {
			 
		},
		onShow() {
			
		},
		created() {
			this.BaseCurrentVersion = 'V.1.0.0'
		},
		methods: {
			// 修改密码
			changePassword() {
				uni.navigateTo({
					url: '/pages/MineView/ChangePassword'
				})
			},
			confirm() {
				setTimeout(() => {
					// 3秒后自动关闭
					this.zxzh = false;
					uni.setStorageSync('login_key', '')
					uni.reLaunch({
						url: '/pages/index/index?index=0'
					});
				}, 1000)
			},
			cancel() {
				this.zxzh = false
			},

			// 注销账号
			deleteLogOut() {
				this.zxzh = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.PersonalCenterImpl {
		position: relative;
		height: 100vh;
	}

	.top-background-raduis {
		height: 40%;
		background: linear-gradient(180deg, #10294F 18.22%, rgba(7, 39, 87, 0.9) 49.48%, rgba(3, 38, 90, 0.78) 63.02%, rgba(8, 58, 131, 0.49) 82.29%, rgba(0, 69, 172, 0) 100%);
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
	}

	.personalCtr-box {
		top: 50upx;
		position: absolute;
		left: 5%;
		right: 5%;
		min-height: 650rpx;
		padding: 30rpx;
		background-color: rgba(7, 39, 87, 0.1);
		border-radius: 40rpx;
		box-shadow: 1px 1px 1px 1px #e3e3e3;
		z-index: 1;
		.mainListBtn {
			display: flex;
			justify-content: space-between;
			padding: 0upx 25upx;
			width: 90%;
			background-color: #fff;
			margin-top: 19upx;
			border-radius: 30upx;
			line-height: 90upx;
			color: #333333;
			font-size: 28upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			.businessListYou{ float: right;font-size: 28upx;color: #333333; }
			.businessListYou image{ width: 20upx;height: 20upx;vertical-align: middle;margin: 0 0 4upx 10upx; }
		}
		.login-card-loginIn {
		  display: flex;
		  justify-content: space-between;
		  padding: 0upx 25upx;
		  width: 90%;
		  margin-top: 100upx;
		  border-radius: 30upx;
		  line-height: 90upx;
		  color: #333333;
		  font-size: 28upx;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  white-space: nowrap;
		  .login-card-loginIn-btn{
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    background: linear-gradient(90deg, #10294F 18.22%, rgba(7, 39, 87, 0.9) 49.48%, rgba(3, 38, 90, 0.78) 63.02%, rgba(8, 58, 131, 0.49) 82.29%, rgba(0, 69, 172, 0.3) 100%);
		    width: 100%;
		    font-size: 28upx;
		    height: 80%;
		    border-radius: 40rpx;
		    color: white;
		  }
		}
		.login-bottom-info{
		  margin-top: 15px;
		  height: 5%;
		  display: flex;
		  font-size: 0.7em;
		  color: rgba(7, 39, 87, 0.9);
		  justify-content: space-between;
		}
	}
</style>
