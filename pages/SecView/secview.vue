<template>
	<view class="content">
		<u-tabs :list="list1" @click="click"></u-tabs>
		<view v-if="showIndex===0" class="tab-0">
			<u-empty v-if="myfirstzx.length===0" mode="coupon" icon="http://cdn.uviewui.com/uview/empty/coupon.png"
				text="快来建立自选名单" textSize="16">
			</u-empty>
			<u-collapse v-else accordion :value="2">
				<view v-for="(item,index) in myfirstzx" :key="index">
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
		<view v-else class="tab-1">
			<u-row justify="flex-start" gutter="10" class="rowHeight">
				<u-col span="6">
					<view class="bg-purple">
						<text style="margin-top: 10px;color: #FFF;z-index: 2;">沥青主力</text>
						<qiun-data-charts type="candle" style="height: 148upx;" :chartData="chartsDataCandle2"
							:loadingType="1" :errorShow="false" background="none" :animation="false"
							:tooltipShow="false" :tapLegend="false" :ontap="false" :ontouch="true"
							:onmouse="false" />
					</view>
				</u-col>
				<u-col span="6">
					<view class="rightcol">
						<view class="bg-purple-sm">
							<view>
								<text>价格：</text>
								<text style="font-size: 20px;">3476</text>
							</view>
							<view>
								<text>涨幅：</text>
								<text style="font-size: 15px;color: red;">+0.13%</text>
							</view>
			
						</view>
						<view class="bg-purple-sm">
							<view class="bankuai1view">
								<text class="bankuaititle">最小变动价位 </text>
								<text class="bankuaititle1">2元/吨</text>
							</view>
							<view class="bankuai1view">
								<text class="bankuaititle">时间 </text>
								<text class="bankuaititle1">9:00－15:00</text>
							</view>
							<view class="bankuai1view">
								<text class="bankuaititle">涨跌停板幅度 </text>
								<text class="bankuaititle1">±7%</text>
							</view>
			
						</view>
					</view>
				</u-col>
			</u-row>
			<u-row justify="flex-start" gutter="10" class="rowHeight">
				<u-col span="6">
					<view class="bg-purple">
						<text style="margin-top: 10px;color: #FFF;z-index: 2;">铁矿2203</text>
						<qiun-data-charts type="candle" style="height: 148upx;" :chartData="chartsDataCandle1"
							:loadingType="1" :errorShow="false" background="none" :animation="false"
							:tooltipShow="false" :tapLegend="false" :ontap="false" :ontouch="true"
							:onmouse="false" />
					</view>
				</u-col>
				<u-col span="6">
					<view class="rightcol">
						<view class="bg-purple-sm">
							<view>
								<text>价格：</text>
								<text style="font-size: 20px;">693</text>
							</view>
							<view>
								<text>涨幅：</text>
								<text style="font-size: 15px;color: #1C6400;">-4.13%</text>
							</view>
			
						</view>
						<view class="bg-purple-sm">
							<view class="bankuai1view">
								<text class="bankuaititle">最小变动价位 </text>
								<text class="bankuaititle1">0.5元/吨</text>
							</view>
							<view class="bankuai1view">
								<text class="bankuaititle">时间 </text>
								<text class="bankuaititle1">9:00－15:00</text>
							</view>
							<view class="bankuai1view">
								<text class="bankuaititle">涨跌停板幅度 </text>
								<text class="bankuaititle1">±6％</text>
							</view>
						</view>
					</view>
				</u-col>
			</u-row>
		</view>
	</view>
</template>

<script>
	import {
		ListHQ
	} from '@/api/homePageDataTop.js';
	import demodata from '@/mockdata/demodata.json';
	import homedemodata from '@/mockdata/homedemodata.json';
	export default {
		data() {
			return {
				list1: [{
					name: '自选',
				}, {
					name: '农产品',
				}, {
					name: '金属'
				}, {
					name: '黑色系'
				}, {
					name: '期货'
				}],
				showIndex: 0,
				chartsDataCandle2: {
					categories: [],
					series: [],
				},
				chartsDataCandle1: {
					categories: [],
					series: [],
				},
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
			this.loginState = uni.getStorageSync('login_key')
			setTimeout(() => {
				this.chartsDataCandle1 = JSON.parse(JSON.stringify(homedemodata.Candle))
				this.chartsDataCandle2 = JSON.parse(JSON.stringify(demodata.Candle))
			}, 1500);
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
			jumpmydetailpage(item) {
				uni.navigateTo({
					url: '/pages/SecView/lineDetail?item=' + encodeURIComponent(JSON.stringify(item))
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
	.rowHeight {
		padding: 0upx;
	}
	
	.bg-purple {
		margin-top: 35upx;
		height: 350upx;
		background: #5F7497;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	
	}
	
	.rightcol {
		margin-top: 13upx;
	}
	
	.bg-purple-sm {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		height: 168upx;
		background: #5F7497;
	}
	
	.bankuai1view {
		display: flex;
		margin-bottom: 3px;
	
		.bankuaititle {
			font-size: 16px;
		}
	
		.bankuaititle1 {
			font-size: 16px;
			color: #FFF;
		}
	}
</style>
