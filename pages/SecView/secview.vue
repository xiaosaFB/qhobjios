<template>
	<view class="status_bar">
		<view class="content">
			<u-loading-page bg-color="#e8e8e8" :loading="pageLoading"></u-loading-page>
			<u-tabs :list="list1" @click="click"></u-tabs>
			<view v-if="!pageLoading" class="tab-0">
				<u-empty v-if="showIndex==0 && loginState !== 1" mode="coupon" icon="http://cdn.uviewui.com/uview/empty/coupon.png"
					text="快来建立自选名单" textSize="16">
				</u-empty>
				<u-collapse v-else accordion :value="collapse1">
					<view v-if="showIndex==0" v-for="(item,index) in myfirstzx" :key="index">
						<u-collapse-item :name="index">
							<text slot="title" class="u-page__item__title__slot-title">{{item.name}}</text>
							<text slot="value" class="u-page__item__title__slot-title">价格：{{item.jiage}}</text>
							<text slot="value" class="u-page__item__title__slot-title"
								:class="[parseFloat(item.updown?1:-1) >= 0 ? 'up' : 'down']">涨幅：{{item.zhangfu}}%</text>
							<view class="u-collapse-content" @click="jumpmydetailpage(item)">
								<qiun-data-charts type="candle" style="height: 148upx;" :chartData="chartsDataCandle2"
									:loadingType="1" :errorShow="false" background="none" :animation="false"
									:tooltipShow="false" :tapLegend="false" :ontap="false" :ontouch="true"
									:onmouse="false" />
							</view>
						</u-collapse-item>
					</view>
					<view v-else v-for="(item,index) in ListHQData" :key="index">
						<u-collapse-item :name="index">
							<text slot="title" class="u-page__item__title__slot-title">{{item.name}}</text>
							<text slot="value" class="u-page__item__title__slot-title">价格：{{item.jiage}}</text>
							<text slot="value" class="u-page__item__title__slot-title"
								:class="[parseFloat(item.updown?1:-1) >= 0 ? 'up' : 'down']">涨幅：{{item.zhangfu}}%</text>
							<view class="u-collapse-content" @click="jumpmydetailpage(item)">
								<qiun-data-charts type="candle" style="height: 148upx;" :chartData="chartsDataCandle2"
									:loadingType="1" :errorShow="false" background="none" :animation="false"
									:tooltipShow="false" :tapLegend="false" :ontap="false" :ontouch="true"
									:onmouse="false" />
							</view>
						</u-collapse-item>
					</view>
				</u-collapse>
				<u-button v-if="loginState !== 1" style="width: 120px;margin-top: 20px;" text="前往登录"
					@click="BindGetUserInfo()" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))">
				</u-button>
			</view>
		</view>
	</view>
	
</template>

<script>
	import {
		ListHQ
	} from '@/api/homePageDataTop.js';
	import demodata from '@/mockdata/demodata.json';
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
				ListHQData: ListHQ,
				collapse1: 0,
				showIndex: 0,
				chartsDataCandle2: {
					categories: [],
					series: [],
				},
				pageLoading: true
			};
		},
		props: {
			myfirstzx: {
				type: Array,
				default: () => []
			}
		},
		onShow() {

		},
		components: {},
		created() {
			this.pageLoading = true
			this.loginState = uni.getStorageSync('login_key')
			setTimeout(() => {
				this.chartsDataCandle2 = JSON.parse(JSON.stringify(demodata.Candle))
				this.pageLoading = false
			}, 800);
		},
		onLoad() {

		},

		methods: {
			click(item) {
				this.showIndex = item.index
				this.pageLoading = true
				this.collapse2 = 0
				setTimeout(() => {
					this.pageLoading = false
				}, 500);

			},
			//点击登录
			BindGetUserInfo: function() {

				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			jumpmydetailpage(item) {
				uni.navigateTo({
					url: '/pages/SecView/lineDetail?item=' + encodeURIComponent(JSON.stringify(item))
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	
	.content {
		position: relative;
		background: #FFF;
		box-shadow: 0px 0px 0.8px rgba(0, 0, 0, 0.13), 0px 2px 10px rgba(0, 0, 0, 0.08);
		border-radius: 6px;
		top: var(--status-bar-height);
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

	.u-page__item__title__slot-title {
		//color: #FFF;
		text-align: initial;

		&.up {
			color: #4eb772;
		}

		&.down {
			color: #ed6660;
		}
	}

	.u-collapse-content {
		color: #FFF;
	}
</style>
