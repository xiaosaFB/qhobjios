<template>
	<view class="content">
		<u-tabs :list="list1" @click="click"></u-tabs>
		<view v-if="showIndex===0" class="tab-0">
			<u-empty mode="coupon" icon="http://cdn.uviewui.com/uview/empty/coupon.png" text="快来建立自选名单" textSize="16">
			</u-empty>
			<u-button v-if="loginState !== 1" style="width: 120px;margin-top: 20px;" text="前往登录"
				@click="BindGetUserInfo()" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))">
			</u-button>
		</view>
		<view v-else class="tab-1"></view>
	</view>
</template>

<script>
	import {
		ListHQ
	} from '@/api/homePageDataTop.js';
	import CoinbaseItem from './coinbase-item.vue'
	export default {
		data() {
			return {
				loginState: uni.getStorageSync('login_key'),
				list1: [{
					name: '自选',
				}, {
					name: '贵金属',
				}, {
					name: '国内',
				}, {
					name: '能源化工'
				}],
				showIndex: 0
			};
		},
		onShow() {

		},
		components: {},
		created() {
			this.loginState = uni.getStorageSync('login_key')
		},
		onLoad() {

		},

		methods: {

			click(item) {
				this.showIndex = item.index
				//console.log('item', item);
			},
			//点击登录
			BindGetUserInfo: function() {

				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		position: relative;
		background: #FFF;
		box-shadow: 0px 0px 0.8px rgba(0, 0, 0, 0.13), 0px 2px 10px rgba(0, 0, 0, 0.08);
		border-radius: 6px;
		top: 16px;
		margin: 0 8px 0 8px;
		padding: 16px 0px 0px 8px;
		content-visibility: auto;
		color: #2B2B2B;
		height: 85vh;
		overflow: hidden;
	}

	.u-empty__text {
		color: #fff;
	}
</style>
