<template>
	<view class="PersonalCenterImpl">
		<view class="top-background-raduis"> </view>
		<view class="personalCtr-box">
			<view class="meHead">
				<view class="meHeadAvatar">
					<image :src="avatarUrl" mode="aspectFill"></image>
				</view>
				<view class="meHeadName">
					<text @click="BindGetUserInfo()">{{ loginState == 1?'审核员':nickName }}</text>
				</view>
			</view>
			<view class="mainListBtn" @click="FeedbackClick">
				<text @click="">反馈</text>
				<view class="businessListYou">
					<image src="../../static/you.png"></image>
				</view>
			</view>
			<view class="mainListBtn" @click="BaseSettingclick">
				<text @click="">设置</text>
				<view class="businessListYou">
					<image src="../../static/you.png"></image>
				</view>
			</view>
			<view class="mainListBtn" @click="ClearCacheClick">
				<text @click="">清除缓存</text>
				<text class="businessListYou">{{numwithcachestr}}</text>
			</view>
			<view class="login-card-loginIn" v-if="loginState == 1">
			  <view class="login-card-loginIn-btn" @click="AbstractLogOut">
			    退出登录
			  </view>
			</view>
		</view>
		<u-modal :show="showmodel" @cancel="cancel" @confirm="confirm" :title="modeltitle" :content="contentmodel"
			:showCancelButton="true" cancelText="取消" confirmText="确定退出"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarUrl: '../../static/fnPersonalCtrProfilePicture.png', //头像
				nickName: '点击登录',
				loginState: uni.getStorageSync('login_key'),
				showmodel: false,
				contentmodel: "是否退出登录？",
				modeltitle: "退出登录提示",
				modeltitle: "退出登录提示",
				contentmodel: "是否退出登录？",
				numwithcachestr: '',
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
		methods: {
			BaseSettingclick() {
				uni.navigateTo({
					url: '/pages/MineView/BaseSettings'
				})
			},
			FeedbackClick() {
				uni.navigateTo({
					url: '/pages/MineView/FeedbackView'
				})
			},
			confirm() {
				setTimeout(() => {
					// 3秒后自动关闭
					this.showmodel = false;
					uni.setStorageSync('login_key', '')
					uni.reLaunch({
						url: '/pages/index/index?index=0'
					});
				}, 1000)
			},
			cancel() {
				this.showmodel = false;
			},
			// 退出登录
			AbstractLogOut() {
				this.showmodel = true
			},
 
			//点击登录
			BindGetUserInfo: function() {
				if (this.loginState == 1) {

				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
			// 获取缓存
			formatSize() {
				let that = this;
				plus.cache.calculate(function(size) {
					let sizeCache = parseInt(size);
					if (sizeCache == 0) {
						that.numwithcachestr = "0B";
					} else if (sizeCache < 1024) {
						that.numwithcachestr = sizeCache + "B";
					} else if (sizeCache < 1048576) {
						that.numwithcachestr = (sizeCache / 1024).toFixed(2) + "KB";
					} else if (sizeCache < 1073741824) {
						that.numwithcachestr = (sizeCache / 1048576).toFixed(2) + "MB";
					} else {
						that.numwithcachestr = (sizeCache / 1073741824).toFixed(2) + "GB";
					}
				});
			}, 
			// 清除缓存
			ClearCacheClick() {
				let that = this
				// that.$refs.popupSet.close()
				uni.showModal({
					title: '清除缓存',
					content: '您确定要清除缓存吗？',
					success: function(res) {
						if (res.confirm) {
							that.clearCache()
						
						} else if (res.cancel) {
						}
					}
				});
			}, 
			// 清理缓存
			clearCache() {
				// #ifdef APP-PLUS
				let that = this;
				let os = plus.os.name;
				if (os == 'Android') {
					let main = plus.android.runtimeMainActivity();
					let sdRoot = main.getCacheDir();
					let files = plus.android.invoke(sdRoot, "listFiles");
					let len = files.length;
					for (let i = 0; i < len; i++) {
						let filePath = '' + files[i]; // 没有找到合适的方法获取路径，这样写可以转成文件路径  
						plus.io.resolveLocalFileSystemURL(filePath, function(entry) {
							if (entry.isDirectory) {
								entry.removeRecursively(function(entry) { //递归删除其下的所有文件及子目录  
									uni.showToast({
										title: '缓存清理完成',
										duration: 2000
									});
									that.formatSize(); // 重新计算缓存  
								}, function(e) {
									console.log(e.message)
								});
							} else {
								entry.remove();
							}
						}, function(e) {
							console.log('文件路径读取失败')
						});
					}
				} else { // ios  
				
					plus.cache.clear(function() {
						uni.showToast({
							title: '缓存清理完成',
							duration: 2000
						});
						that.formatSize();
					});
					
				}
				// #endif
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

		.meHead {
			overflow: hidden;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.meHeadAvatar {
			float: right;
			width: 19%;
			margin-top: 10upx;
			border: 1px solid rgba(233,233,233, 0.2);
			display: block;
			border-radius: 50%;
		}

		.meHeadAvatar image {
			width: 110upx;
			height: 110upx;
		}

		.meHeadName {
			text-align: center;
			float: left;
			padding: 0upx 25upx;
			width: 60%;
			background-color: #fff;
			margin-top: 10upx;
			margin-bottom: 100upx;
			border-radius: 30upx;
			line-height: 90upx;
			color: #333333;
			font-size: 28upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
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
