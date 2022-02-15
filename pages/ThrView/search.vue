<!-- 资讯>搜索 -->
<template>
	<view class="search">
		<!-- <u-row justify="space-between">
			<u-col span="12">
				<u--input class="search-left" placeholder="期货 | 热门产品" prefixIcon="search" shape="circle" focus
					prefixIconStyle="color: #909399"></u--input>
			</u-col>
		</u-row>
		<u-divider text="热门搜索" textColor="#ff0000" lineColor="#ff0000"></u-divider>
		<u-grid :border="false" @click="click" :col="2">
			<u-grid-item v-for="(item,index) in hotData" :key='index' style="margin: 2px 0;align-items: start;">
				<u-tag style="margin: 0 10px;" type="warning" :text="index+1+'、'+item" size="mini"></u-tag>
			</u-grid-item>
		</u-grid>
		<u-divider text="历史搜索" textColor="#2979ff" lineColor="#2979ff"></u-divider>
		<u-row justify="start">
			<u-tag v-for="(item,index) in hstoryData" :key='index' :text="item" size="mini" closable icon="tags-fill">
			</u-tag>
		</u-row>
		<u-alert style="margin-top: 20px;" type="warning" :show-icon="true" :closable="true" :description = "description"></u-alert> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotData: ["金属", "黄金", "期货"],
				hstoryData: ["黄金"],
				description:"通知被关闭，无法收到突发新闻消息",
			}
		},
		onLoad() {},
		methods: {
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			}
		}
	}
</script>

<style lang="scss" scoped>
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
</style>
