<template>
	<view class="newslist">
		<u-list>
			<u-list-item v-for="(item, index) in newsListData" :key="index">
				<u-cell isLink @click="jumpDetail(item)">
					<text style="color: #fff;text-align: left;" slot="title">{{item.title}}</text>
					<text style="color: #999999;text-align: left;font-size: 14px;margin-top: 15px;"
						slot="label">{{item.NewsTime}}({{item.Media}})</text>

					<u-avatar slot="icon" shape="square" size="85" :src="item.NewsPic"
						customStyle="margin: 3px 5px -3px 0"></u-avatar>
				</u-cell>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	import {
		qihuonewslist
	} from '@/api/homePageDataTop.js'
	export default {
		data() {
			return {
				newsListData: qihuonewslist, //资讯data 
			}
		},
		onLoad() {},
		onShow() {

		},
		created() {

		},
		methods: {jumpDetail(item) {
				uni.navigateTo({
					url: '/pages/ThrView/hotnewsdetail?item=' + encodeURIComponent(JSON.stringify(item))
				});
			},},
	}
</script>

<style lang="scss" scoped>
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
</style>
