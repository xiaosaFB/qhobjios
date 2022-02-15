<template>
  <view class="content">
	 
    <view class="header">
      <!-- <image src="../../static/shilu-login/logo.png"></image> -->
    </view>

    <view class="list">
		 <text style="color: #FFFFFF;font-size: 53upx;">欢迎登录</text>
      <view class="list-call">
        <image class="img" src="/static/shilu-login/1.png"></image>
        <input class="sl-input" v-model="phone" type="number" maxlength="11" placeholder="输入手机号" />
      </view>
      <view class="list-call">
        <image class="img" src="/static/shilu-login/2.png"></image>
        <input class="sl-input" v-model="password" type="text" maxlength="32" placeholder="输入密码" password="true" />
      </view>

    </view>

    

    <view class="agreenment">
      <navigator url="forget" open-type="navigate">忘记密码</navigator>
      <text>|</text>
      <navigator url="reg" open-type="navigate">注册账户</navigator>
    </view>
	<view class="button-login" hover-class="button-hover" @tap="bindLogin()">
	  <text>登录</text>
	</view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        phone: '',
        password: ''
      };
    },
    methods: {
      bindLogin() {
		  if (this.phone.length != 11) {
			  uni.showToast({
				icon: 'none',
				title: '手机号不正确'
			  });
			return;
		} else if(this.password.length < 6) {
			  uni.showToast({
				icon: 'none',
				title: '密码不正确'
			  });
			  return;
		} else if (this.phone != '16612344321' || this.password != '123456') {
			uni.showToast({
				icon: 'none',
				title: '请仔细检查账号密码是否正确'
			});
			return;
		} else if(this.phone == '16612344321' || this.password == '123456'){
			uni.setStorageSync('login_key',1)
			//成功后的逻辑
			// uni.navigateBack();
			uni.reLaunch({
			    url: '../index/index?index=0'
			});
		}
      }
    }
  }
</script>

<style scoped>
	page {
		background-color: #CE161A;
	}
  .content {
    display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        position: relative;
  }

  .header {
    /*background: rgba(0, 85, 255, 1.0); */
	/* border-radius: 50%; */
	position: absolute;
	bottom: 7px;
	/* top: 9px; */
	z-index: 0;
	left: 0;
	right: 0;
	background: url(/static/newapplogo.png) no-repeat fixed bottom center;
	background-size: 100% 50%;
	height: 50%;
  }

  .header image {
    /* width: 281rpx; */
    /* height: 281rpx; */
    /* border-radius: 50%; */
  }

  .list {
    display: flex;
        flex-direction: column;
        margin-top: -300px;
        padding-left: 11px;
        padding-right: 11px;
  }

  .list-call {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100rpx;
    color: #333333;
    border-bottom: 0.5px solid #333333;
	z-index: 1;
  }

  .list-call .img {
    width: 40rpx;
    height: 40rpx;
  }

  .list-call .sl-input {
    flex: 1;
    text-align: left;
    font-size: 32rpx;
    margin-left: 16rpx;
  }

  .button-login {
    position: absolute;
        right: 0;
        left: 0;
        color: #FFFFFF;
        font-size: 18px;
        width: 80%;
        height: 55px;
        background: linear-gradient(-200deg, rgba(255, 255, 0, 1.0), rgba(170, 0, 0, 0.3));
        box-shadow: 0px 0px 7px 0px rgb(164 217 228 / 20%);
        border-radius: 27px;
        line-height: 55px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        /* margin-top: 138px;*/
  }

  .button-hover {
    background: linear-gradient(-200deg, rgba(255, 255, 0, 1.0), rgba(170, 0, 0, 0.3));
  }

  .agreenment {
	  z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    font-size: 30rpx;
    margin-top: 80rpx;
	margin-right: 20rpx;
    color: #0055ff;
    text-align: center;
    height: 40rpx;
    line-height: 40rpx;
  }

  .agreenment text {
    font-size: 24rpx;
    margin-left: 15rpx;
    margin-right: 15rpx;
  }
</style>
