<template>
	<view class="contentpage" style="padding: 30rpx;">
		<h4 style="margin-bottom: 50rpx">{{item.title}}</h4>
		<u-parse :content="item.html" :show-with-animation="true" :selectable="true"></u-parse>
	</view>
</template>

<script>
	 
	export default {
		data() {
			return {
				content: '',
				item: ''
			}
		},
		methods: {

		},
		//列表传值
		onLoad: function(option) {
			this.item = JSON.parse(option.item)
		},
		mounted() {
			// hotnewsDetail({"tid": this.item.tid},(res) =>{
			// 	this.content = res.data.data.content 
			// 	// console.log('12333333',this.content)
			// })
		},
	}
</script>

<style lang="scss" scoped>
	.contentpage {
		text-align: center;
	}
</style>
