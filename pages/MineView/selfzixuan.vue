<template>
	<view class="paihangbangview">
		<view v-for="(item, index) in indexList" :key="index" @click="toKline(item)">
			<view style="display: flex;align-items: center;justify-content: center;padding: 10px; 0 0 15px">
				<!-- <view
					style="background-color: #E1E1E1;margin-right: 20px;width: 50px;height: 50px;border-radius: 25px;text-align: center;display: flex;justify-content: center;align-items: center;">
					{{index+1}}</view> -->
				<view style="display: flex;justify-content: space-between;align-items: center;">
					<view>{{item.name}}</view>
					<view style="margin: 0 20px;">{{item.jiage}}</view>
					<view class="con_waterlist_text2" :style="item.updown?'color: #F20C0C;':'color: #2fbd45;'">
						<view>{{item.updown?'+':'-'}}{{item.zhangfu}}%</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				indexList: []
			}
		},
		onLoad() {

		},
		created() {
			this.indexList = JSON.parse(uni.getStorageSync('ListHQZHIXUANDATA_key'))
			console.log('this.indexList', this.indexList)
		},
		methods: {
			toKline(symbol) {
				uni.navigateTo({
					url: '/pages/SecView/lineDetail?item=' + encodeURIComponent(JSON.stringify(symbol))
				})
			},
		},
	}
</script>

<style>
</style>
