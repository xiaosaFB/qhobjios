<!-- 资讯>消息 -->
<template>

	<view class="msg">
		<view class="head">今天</view>
		<!-- @scrolltolower="scrolltolower" -->
		<u-list >
			<u-list-item v-for="(item, index) in newsListData" :key="index">
				<u-cell :title="item.title" @click="jumpHotnewsdetail(item)">
					<u-avatar slot="icon" shape="square" size="35" :src="item.thumb" :default-url="defaultUrl"
						customStyle="margin: -3px 5px -3px 0"></u-avatar>
				</u-cell>
			</u-list-item>
		</u-list>
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
				indexList: [],
				defaultUrl: "http://cdn.uviewui.com/uview/empty/comment.png",
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
				]
			}
		},
		onLoad() {
			//this.loadmore()
		},
		methods: {
			scrolltolower() {
				//this.loadmore()
			},
			/* loadmore() {
				for (let i = 0; i < 30; i++) {
					this.indexList.push({
						url: this.urls[uni.$u.random(0, this.urls.length - 1)]
					})
				}
			}, */
			jumpHotnewsdetail(item) {
				uni.navigateTo({
					url: '/pages/ThrView/hotnewsdetail?item='+ encodeURIComponent(JSON.stringify(item))
				});
			},
	
		}
	}
</script>

<style lang="scss" scoped>
	.msg {
		.head {
			background-color: #f6f6f6;
			color: #665e5e;
			letter-spacing: 1px;
			font-size: 15px;
			padding: 10px;
		}
	}
</style>
