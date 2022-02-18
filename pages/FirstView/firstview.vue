<template>
	<view class="status_bar">
		<view class="content">
			<!-- banner -->
			<u-swiper style="margin-top: 45px;" :list="bannerlist" previousMargin="20" nextMargin="20" :autoplay="false" radius="5"
				imgMode="widthfix" bgColor="#152A4F" @click="jumpBannerDetail">
				<view slot="indicator" class="indicator-num">
					<text class="indicator-num__text">1/1</text>
				</view>
			</u-swiper>

			<!-- 动态加载echart -->
			<view class="huashuview">
				<view class="toptiyle">
					<text style="color: #FFFFFF;z-index: 1;">热门</text>
				</view>
				<view class="scrolllist">
					<u-scroll-list @right="right" @left="left" :indicator="false">
						<view class="scroll-list" style="flex-direction: row;">
							<view class="scroll-list__goods-item" v-for="(item, index) in arrayHorizontalListing"
								:key="index" @click="getMarket(index,item)"
								style="background-color: rgba(43,66,105,0.4);">
								<view :class="{active:touchindex==index}"
									style="width: 105px; height: 75px;display: flex;flex-direction: column;justify-content: center;align-items: center;border-radius: 3px;">
									<text class="scroll-list__goods-item__text"
										style="color: #FFF;">{{ item.name }}</text>
									<text class="scroll-list__goods-item__text"
										style="color: #FFF;">{{ item.jiage }}</text>
									<text class="scroll-list__goods-item__text"
										style="color: red;">+{{ item.zhangfu }}%</text>
								</view>

							</view>
							<view class="scroll-list__show-more" @click="moreMarket">
								<text class="scroll-list__show-more__text">更多行情</text>
							</view>
						</view>
					</u-scroll-list>
				</view>
				<qiun-data-charts type="candle" style="height: 300upx;" :chartData="chartsDataCandle1" :loadingType="1"
					:errorShow="false" background="none" :animation="false" :tooltipShow="false" :tapLegend="false"
					:ontap="false" :ontouch="true" :onmouse="false" />
			</view>

			<!-- 通知 -->
			<u-notice-bar icon="../../static/noticeIcon.png" direction="column" :text="notice" mode="link"
				url='../ThrView/fhrview' color="#FFF" bgColor="#27282233"></u-notice-bar>

			<!-- 板块讲解 -->
			<view class="huashuview">
				<view class="toptiyle">
					<text style="color: #FFFFFF;z-index: 1;">板块讲解</text>
				</view>
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
			<!-- 我的自选  写一个去登陆else -->
			<view class="zixuan">
				<view class="" v-if="loginState == 1">
					<text style="color: #FFF;">自选列表</text>
					<u-collapse accordion :value="2">
						<view v-for="(item,index) in selfZxuan" :key="index">
							<u-collapse-item :name="index">
								<text slot="title" class="u-page__item__title__slot-title">{{item.name}}</text>
								<text slot="value" class="u-page__item__title__slot-title">价格：{{item.jiage}}</text>
								<text slot="value" class="u-page__item__title__slot-title"
									:class="[parseFloat(item.updown?1:-1) >= 0 ? 'up' : 'down']">涨幅：{{item.zhangfu}}%</text>
								<view class="u-collapse-content">
									<qiun-data-charts type="candle" style="height: 148upx;"
										:chartData="chartsDataCandle2" :loadingType="1" :errorShow="false"
										background="none" :animation="false" :tooltipShow="false" :tapLegend="false"
										:ontap="false" :ontouch="true" :onmouse="false" />
								</view>
							</u-collapse-item>
						</view>
					</u-collapse>
				</view>
				<view class="" v-else @click="jumpLog">
					<text style="color: #FFF;">自选列表</text>
					<u-empty text="当前未登录,点击去登录" icon="../../static/logNO.png">
					</u-empty>
				</view>
			</view>

			<view class="newslist">
				<view class="toptiyle">
					<text style="color: #FFFFFF;z-index: 1;">新闻时讯</text>
				</view>
				<u-list>
					<u-list-item v-for="(item, index) in newsListData" :key="index">
						<u-cell isLink @click="jumpDetail(item)">
							<text  style="color: #fff;text-align: left;" slot="title">{{item.title}}</text>
							<text  style="color: #999999;text-align: left;font-size: 14px;margin-top: 15px;" slot="label">{{item.NewsTime}}({{item.Media}})</text>
							
							<u-avatar slot="icon" shape="square" size="85" :src="item.NewsPic"
								customStyle="margin: 3px 5px -3px 0"></u-avatar>
						</u-cell>
					</u-list-item>
				</u-list>
			</view>
		</view>
		<u-gap height="80" bgColor="#fff"></u-gap>
		<u-gap height="80" bgColor="#fff"></u-gap>
	</view>
</template>

<script>
	import {
		TOPTHDATA,
		ListHQ,
		ZiXuanData,
		qihuonewslist
	} from '@/api/homePageDataTop.js'
	import demodata from '@/mockdata/demodata.json';
	import homedemodata from '@/mockdata/homedemodata.json';

	export default {
		data() {
			return {
				loginState: uni.getStorageSync('login_key'),
				notice: ['原料价格上涨，方面便要跟着涨？业内人士：未来会走向高端化', '业界热议低硫燃料油期货上市', '在千红石化港储总经理张宏军看来，期货市场是价格风险对冲的平台，在大幅波动的市场行情中'],
				touchindex: 0,
				chartsDataCandle2: {
					categories: [],
					series: [],
				},
				chartsDataCandle1: {
					categories: [],
					series: [],
				},
				selfZxuan: ZiXuanData,
				indicator: true,
				filterList: false,
				keyword: '',
				loginState: uni.getStorageSync('login_key'),
				curNow: 0,
				newsListData: qihuonewslist.slice(0, 5), //资讯data
				indexList: ListHQ.slice(3, 11), // 期货data
				arrayHorizontalListing: TOPTHDATA, // 热门期货data
				text1: '粳米期货一周岁：产业多策略积极参与套保粳米期货一周岁：产业多策略积极参与套保', //通知
				bannerlist: ['../../static/homeBanner.png'], //轮播图
				/*图片轮播*/
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		onLoad() {},
		onShow() {

			this.loginState = uni.getStorageSync('login_key')
		},
		created() {
			this.loginState = uni.getStorageSync('login_key')
			console.log('123123123', this.loginState) 
			setTimeout(() => {
				this.chartsDataCandle1 = JSON.parse(JSON.stringify(homedemodata.Candle))
				this.chartsDataCandle2 = JSON.parse(JSON.stringify(demodata.Candle))
			}, 1500);
		},
		methods: {
			getMarket(index, item) {
				this.touchindex = index
				if (index % 2 == 1) {
					setTimeout(() => {
						this.chartsDataCandle1 = JSON.parse(JSON.stringify(demodata.Candle))
					}, 100);
				} else {
					setTimeout(() => {
						this.chartsDataCandle1 = JSON.parse(JSON.stringify(homedemodata.Candle))
					}, 100);
				}

			},
			jumpBannerDetail() {
				uni.navigateTo({
					url: '/pages/FirstView/HomeNewsList'
				})
				 
			},
			moreMarket() {
				uni.navigateTo({
					url: '../SecView/secview'
				})
			},
			left() {
				console.log('left');
			},
			right() {
				console.log('right');
			},
			onSearch() {
				if (this.$u.trim(this.keyword)) {
					this.filterList = this.topSymbols.filter((item) => {
						return item.title.toLocaleUpperCase().indexOf(this.$u.trim(this.keyword
							.toLocaleUpperCase())) != -1
					})
				} else {
					this.filterList = false
				}
			},
			tagclick(symbol) {
				uni.navigateTo({
					url: '/pages/SecView/lineDetail?item=' + encodeURIComponent(JSON.stringify(symbol))
				})
			},
			jumpDetail(item) {
				uni.navigateTo({
					url: '/pages/ThrView/hotnewsdetail?item=' + encodeURIComponent(JSON.stringify(item))
				});
			},
			jumpHotnewsdetail(item) {
				uni.navigateTo({
					url: '/pages/ThrView/hotnewsdetail?item=' + encodeURIComponent(JSON.stringify(item))
				});
			},
			jumpLog() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			btn() {
				uni.navigateTo({
					url: '../SecView/secview'
				})
			}
		},
	}
</script>


<style lang="scss" scoped>
	.content {
		text-align: center;
		padding-bottom: 0;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		overflow: hidden;
		min-height: 100vh;
		z-index: 1;

		.indicator {
			@include flex(row);
			justify-content: center;

			&__dot {
				height: 6px;
				width: 6px;
				border-radius: 100px;
				background-color: rgba(255, 255, 255, 0.35);
				margin: 0 5px;
				transition: background-color 0.3s;

				&--active {
					background-color: #ffffff;
				}
			}
		}

		.indicator-num {
			padding: 2px 0;
			background-color: rgba(0, 0, 0, 0.35);
			border-radius: 100px;
			width: 35px;
			@include flex;
			justify-content: center;

			&__text {
				color: #FFFFFF;
				font-size: 12px;
			}
		}

		.zixuan {
			margin: 10px 15px;
			min-height: 200px;
			border-radius: 10px;
			background-color: rgba(25, 57, 106, 1);
		}

		.newslist {
			margin: 10px 15px;
			min-height: 200px;
			border-radius: 10px;
			background-color: rgba(25, 57, 106, 1);

			.toptiyle {
				margin-top: 50upx;
				height: 80upx;
				background-color: #5F7497;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.huashuview {
			margin: 10px 15px;
			min-height: 200px;
			border-radius: 10px;
			background-color: rgba(253, 246, 236, 0.1);

			.scrolllist {
				margin: 0 5px;

				.scroll-list {

					@include flex(column);

					&__goods-item {
						.active {
							// border: 1px solid #2694ff;
							background-color: #13477F; // #0071DE
						}

						margin-top: 17px;
						margin-right: 20px;
						position: relative;

						&__image {
							position: absolute;
							top: 0px;
							right: 0px;
							width: 28px;
							height: 28px;
						}

						&__text {
							color: #333;
							text-align: center;
							font-size: 12px;
							margin-top: 5px;
						}
					}

					&__show-more {
						margin-top: 17px;
						width: 105px;
						background-color: rgba(43, 66, 105, 0.4);
						// border-radius: 3px;
						// padding: 3px 6px;
						@include flex(column);
						align-items: center;
						justify-content: center;

						&__text {
							font-size: 12px;
							// width: 12px;
							color: #fff;
							line-height: 16px;
						}
					}
				}
			}
		}
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.toptiyle {
		margin-top: 50upx;
		height: 80upx;
		background-color: #5F7497;
		display: flex;
		justify-content: center;
		align-items: center;
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

	.u-page__item__title__slot-title {
		color: #FFF;
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
