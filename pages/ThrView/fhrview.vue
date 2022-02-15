<!-- 资讯 -->
<template>
	<view class="zx">
		<view class="search">
			<u-row justify="space-between">
				<u-col span="10">
					<u--input class="search-left" placeholder="恒大 | 28亿存款质押" prefixIcon="search" shape="circle"
						@focus="focusInput" prefixIconStyle="color: #909399"></u--input>
				</u-col>
				<u-col span="2">
					<u-button class="btn-msg" icon="email" :plain="true" text="" @click="msgClick"></u-button>
					<!-- <u-badge type="error" max="99" value="18"></u-badge> -->
				</u-col>
			</u-row>
		</view>
		<u-sticky bgColor="#fff">
			<u-tabs :current="tabIndex" :activeStyle="{
						color: '#303133',
						fontWeight: 'bold',
						transform: 'scale(1.05)'
					}" :inactiveStyle="{
						color: '#606266',
						transform: 'scale(1)'
					}" @click="tabClick" :list="list1"></u-tabs>
		</u-sticky>
		<view v-if="tabIndex === 0" class="page-one">
			<u-swiper style="padding: 5px;" :height="150" :list="swiperList" keyName="image" showTitle :autoplay="false" circular>
			</u-swiper>
			<u-list>
				<u-list-item v-for="(item, index) in newsListData" :key="index">
					<view class="album">
						<view class="album__avatar">
							<image :src="'https://web.hexun.com/pc/img/logo-futures.png'" mode="" style="width: 32px;height: 32px;">
							</image>
						</view>
						<view class="album__content">
							<u--text :text="item.subTitle"  bold size="13"></u--text>
							<u--text margin="0 0 8px 0" :text="item.title"  @click="jumpHotnewsdetail(item)"></u--text>
							<u-album :urls="[].concat(item.thumb)" keyName="src2"></u-album>
						</view>
					</view>
					<u-line style="margin: 10px 0;"  color="#000" dashed></u-line>
				</u-list-item>
			</u-list>
		</view>

		<view v-if="tabIndex === 1" class="page-two">
			<u-swiper style="padding: 5px;" :height="150" :list="swiperList1" keyName="url" showTitle :autoplay="false" circular>
			</u-swiper>
			<u-list>
				<u-list-item v-for="(item, index) in newsListData" :key="index">
					<view class="album">
						<view class="album__avatar">
							<image :src="'https://web.hexun.com/pc/img/logo-futures.png'" mode="" style="width: 32px;height: 32px;">
							</image>
						</view>
						<view class="album__content">
							<u--text :text="item.subTitle"  bold size="13"></u--text>
							<u--text margin="0 0 8px 0" :text="item.title"  @click="jumpHotnewsdetail(item)"></u--text>
							<u-album :urls="[].concat(item.thumb)" keyName="src2"></u-album>
						</view>
					</view>
					<u-line style="margin: 10px 0;"  color="#000" dashed></u-line>
				</u-list-item>
			</u-list>
		</view>

		<view v-if="tabIndex === 2" class="page-three">
			<u-list>
				<u-list-item v-for="(item, index) in newsListData" :key="index">
					<view class="album">
						<view class="album__avatar">
							<image :src="'https://web.hexun.com/pc/img/logo-futures.png'" mode="" style="width: 32px;height: 32px;">
							</image>
						</view>
						<view class="album__content">
							<u--text :text="item.subTitle"  bold size="13"></u--text>
							<u--text margin="0 0 8px 0" :text="item.title"  @click="jumpHotnewsdetail(item)"></u--text>
							<u-album :urls="[].concat(item.thumb)" keyName="src2"></u-album>
						</view>
					</view>
					<u-line style="margin: 10px 0;"  color="#000" dashed></u-line>
				</u-list-item>
			</u-list>
		</view>
	</view>
</template>

<script>
	import {
		newsList
	} from '../FirstView/homePageDataTop.js';
	export default {
		data() {
			return {
				newsListData: newsList,
				list1: [{
					name: '要闻',
					badge: {
						isDot: true
					}
				}, {
					name: '热点',
					badge: {
						value: 5,
					}
				}, {
					name: '期货'
				}],
				tabIndex: 0,
				indexList: [],
				urls: [
					'https://cdn.uviewui.com/uview/album/1.jpg',
					'https://cdn.uviewui.com/uview/album/2.jpg',
					'https://cdn.uviewui.com/uview/album/3.jpg',
					'https://cdn.uviewui.com/uview/album/4.jpg',
					'https://cdn.uviewui.com/uview/album/5.jpg',
					'https://cdn.uviewui.com/uview/album/6.jpg',
					'https://cdn.uviewui.com/uview/album/7.jpg',
					'https://cdn.uviewui.com/uview/album/8.jpg',
					'https://cdn.uviewui.com/uview/album/9.jpg',
					'https://cdn.uviewui.com/uview/album/10.jpg',
				],
				swiperList: [{
					image: 'https://ds.hexun.com/f/196/.jpg',
					title: '刘志刚：调整一个最佳的状态去迎接大行情',
				}, {
					image: 'https://ds.hexun.com/f/195/.jpg',
					title: '张希诚：顺势而为，不要和市场扭劲'
				}, {
					image: 'https://ds.hexun.com/f/1575/_png.jpg',
					title: '程智斌：管住自己的手，没机会的话就等待'
				}],
				swiperList1: [{
					//url: 'https://cdn.uviewui.com/uview/resources/video.mp4',
					url:'https://apd-79d9103ec5da8c9ad5c855682a07ee2e.v.smtcdns.com/om.tc.qq.com/AOwHVx8YmoJ85qvBs6JGGrVJ1WEJ9c9AKA9YPiIIuo1k/uwMROfz2r5zAoaQXGdGnC2dfDma7NyshNhpHvcEisM-VRrjn/d3154vf5gi0.mp4?sdtfrom=v1010&guid=f899b47191953115fa780d23c50ce61f&vkey=9B9292A3D9CA6943544DE7A436AEBF67C29AD067CAE9E4F7E1627C39B2486DEBC5F5BA52EACF773F56859C4DEDD0D64B64891080BCB1EB1AB2DD23364D8551B2C2B73565F0D6C2B0451A6A4E617393F76E1FD2E987FE716C0C4BE55A38054166CD93888E530D411ABAED56945C3304A05AB7AD1C95B3CC84A0BAA407B0AFF2280C6A4ECA3A576D1A',
					title: '追涨杀跌是正道：趋势形成的时候，忘记价格去交易',
					poster: 'https://img0.baidu.com/it/u=2760268466,385310236&fm=253&fmt=auto&app=120&f=JPEG?w=750&h=500'
				}],
			}
		},
		onLoad() {
			this.tabIndex = 0
		},
		methods: {
			focusInput() {
				uni.navigateTo({
					url: '/pages/ThrView/search'
				});
			},
			msgClick() {
				uni.navigateTo({
					url: '/pages/ThrView/message'
				});
			},
			tabClick(item) {
				this.tabIndex = item.index
			},
			jumpHotnewsdetail(item) {
				uni.navigateTo({
					url: '/pages/ThrView/hotnewsdetail?item=' + encodeURIComponent(JSON.stringify(item))
				});
			},

		}
	}
</script>

<style lang="scss" scoped>
	.zx {
		min-height: 100vh;

		.search {
			padding: 5px;

			.search-left {
				padding: 5px !important;
			}

			.uni-input-placeholder {
				font-size: 13px;
				letter-spacing: 1px;
			}
		}

		.page-one,
		.page-two,
		.page-three {
			height: 100vh;
		}

		.btn-msg {
			background-color: transparent;
			border: none;

		}

		.album {
			@include flex;
			align-items: flex-start;

			&__avatar {
				background-color: $u-bg-color;
				padding: 5px;
				border-radius: 3px;
			}

			&__content {
				margin-left: 10px;
				flex: 1;
			}
		}

	}
</style>
