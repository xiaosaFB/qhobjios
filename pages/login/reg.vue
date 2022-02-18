<template>
	<view class="forgetpage">
		<view class="top-background-raduis"> </view>
		<view class="login-box">
			<view class="login-card-title">
				<view class="login-card-title-content"> 注册账号 </view>
			</view>
			<view class="login-card-input">
				<!-- 输入框头部图标 -->
				<uni-easyinput class="hj-input" v-model="phone" focus maxlength="30" :trim="true"
					@focus="UserNamePassWrodFocusBorderStyle" :styles="inputColorConfigToUserName"
					@blur="UserNamePassWrodBlurBorderStyle" placeholder="请输入账号"></uni-easyinput>
				<!-- 输入框头部图标 -->
				<uni-easyinput class="hj-input" v-model="password" type="password" @focus="PassWordFocusBorderStyle"
					@blur="PassWordBlurBorderStyle" :styles="inputColorConfigToPassWord" placeholder="请输入密码">
				</uni-easyinput>
				<view class="list-call">
				  <input class="sl-input" type="number" v-model="code" maxlength="4" placeholder="验证码" />
				  <view class="yzm" :class="{ yzms: second>0 }" @tap="getcode">{{yanzhengma}}</view>
				</view>
			</view>
			<view class="login-card-loginIn">
				<view class="login-card-loginIn-btn" @click="bindLogin">
					注 册
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _this, js;
	export default {
		data() {
			return {
				second: 0,
				code: "",
				// 输入框边框颜色默认值
				colorDefault: '#b4b4b4',
				// 输入框边框聚焦值
				colorFocusColor: '#3cb79a',
				// 输入框颜色配置
				inputColorConfigToUserName: {
					color: "#000000",
					disableColor: "#eee",
					borderColor: "#b4b4b4",
				},
				// 输入框颜色配置
				inputColorConfigToPassWord: {
					color: "#000000",
					disableColor: "#eee",
					borderColor: "#b4b4b4",
				},
				phone: '',
				password: ''
			}
		},
		onLoad() {
			_this = this;
		},
		computed: {
			yanzhengma() {
				if (this.second == 0) {
					return '获取验证码';
				} else {
					if (this.second < 10) {
						return '重新获取' + this.second;
					} else {
						return '重新获取' + this.second;
					}
				}
			}
		},
		onUnload() {
			this.clear()
		},
		methods: {
			// 输入框聚焦变换边框样式
			UserNamePassWrodFocusBorderStyle() {
				this.inputColorConfigToUserName.borderColor = this.colorFocusColor;
			},
			PassWordFocusBorderStyle() {
				this.inputColorConfigToPassWord.borderColor = this.colorFocusColor;
			},
			// 输入框失去焦点变换边框样式
			UserNamePassWrodBlurBorderStyle() {
				this.inputColorConfigToUserName.borderColor = this.colorDefault;
			},
			PassWordBlurBorderStyle() {
				this.inputColorConfigToPassWord.borderColor = this.colorDefault;
			},
			// display() {
			// 	this.showPassword = !this.showPassword
			// },
			clear() {
				clearInterval(js)
				js = null
				this.second = 0
			},
			getcode() {
				if (this.phone.length != 11) {
					uni.showToast({
						icon: 'none',
						title: '手机号不正确'
					});
					return;
				}
				if (this.second > 0) {
					return;
				}
				_this.second = 60;
				js = setInterval(function() {
					_this.second--;
					if (_this.second == 0) {
						_this.clear()
					}
				}, 1000)
				 
				_this.second = 60;
				js = setInterval(function() {
					_this.second--;
					if (_this.second == 0) {
						_this.clear()
					}
				}, 1000)
				 
			},
			bindLogin() {
				if (this.phone.length != 11) {
					uni.showToast({
						icon: 'none',
						title: '请检查手机号'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码不能低于6位数'
					});
					return;
				}
				if (this.code.length != 10) {
					uni.showToast({
						icon: 'none',
						title: '验证码不正确'
					});
					return;
				}
				uni.showToast({
					icon: 'none',
					title: '注册成功'
				});
				setTimeout(function() {
					uni.navigateBack();
				}, 1500)

			}
		}
	}
</script>

<style lang="scss" scoped>
	* {
		box-sizing: border-box;
	}

	.forgetpage {
		position: relative;
		height: 100vh;
	}
	.list-call {
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  align-items: center;
	  height: 100rpx;
	  color: #333333;
	  border-bottom: 0.5px solid #e2e2e2;
	}
	
	.list-call .sl-input {
	  flex: 1;
	  text-align: left;
	  font-size: 32rpx;
	  margin-left: 16rpx;
	}
	
	.yzm {
	  color: #10294F;
	  font-size: 24rpx;
	  line-height: 64rpx;
	  padding-left: 10rpx;
	  padding-right: 10rpx;
	  width: auto;
	  height: 64rpx;
	  border: 1rpx solid #10294F;
	  border-radius: 50rpx;
	}
	
	.yzms {
	  color: #999999 !important;
	  border: 1rpx solid #999999;
	}
	
	/deep/ .is-input-border {
		border-radius: 7px !important;
	}

	/deep/ .uni-easyinput__content {
		min-height: 39px !important;
	}

	.hj-input {
		margin-top: 15rpx;
	}

	.hj-input:nth-child(2) {
		margin-top: 35rpx;
	}

	.top-background-raduis {
		height: 40%;
		background: linear-gradient(180deg, #10294F 18.22%, rgba(7, 39, 87, 0.9) 49.48%, rgba(3, 38, 90, 0.78) 63.02%, rgba(8, 58, 131, 0.49) 82.29%, rgba(0, 69, 172, 0) 100%);
		border-bottom-left-radius: 50%;
		border-bottom-right-radius: 50%;
	}

	.login-box {
		top: 20%;
		position: absolute;
		width: 80%;
		left: 10%;
		right: 10%;
		height: 650rpx;
		padding: 30rpx;
		background-color: white;
		border-radius: 40rpx;
		box-shadow: 9px 9px 6px #e3e3e3;
		z-index: 1;

		.login-card-input {
			// background-color: violet;
			height: 50%;
			padding: 5rpx;
		}

		.login-card-title {
			height: 20%;
			// background-color: black;
			padding: 10rpx;
			display: flex;
			justify-content: center;

			.login-card-title-content {
				font-size: 1.2em;
				color: rgba(7, 39, 87, 0.9);
				border-bottom: 3px solid rgba(7, 39, 87, 0.9);
			}
		}

		.login-card-loginIn {
			height: 25%;
			display: flex;
			justify-content: center;
			padding: 10rpx;
			align-items: center;

			.login-card-loginIn-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				background: linear-gradient(90deg, #10294F 18.22%, rgba(7, 39, 87, 0.9) 49.48%, rgba(3, 38, 90, 0.78) 63.02%, rgba(8, 58, 131, 0.49) 82.29%, rgba(0, 69, 172, 0.3) 100%);

				width: 100%;
				font-size: 1.2em;
				height: 80%;
				border-radius: 40rpx;
				color: white;
			}
		}

		.login-bottom-info {
			height: 5%;
			display: flex;
			font-size: 0.7em;
			color: rgba(7, 39, 87, 0.9);
			justify-content: space-between;
		}
	}
</style>
