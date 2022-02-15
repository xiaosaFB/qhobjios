<template>
	<view class="content">
		
		<view class="content_top">
			<!-- <view class="top_moban" style="background-color:#DCDFE6; padding: 5rpx;">
				<text class="name">名称</text>
				<text class="name" style="padding-left: 40rpx;">最新价格</text>
				<text class="name">涨跌幅度</text>
			</view> -->
			<view style="width: 100%;">
				<text class="name">名称：</text>
				<text class="name">{{name}}</text>
			</view>
					
		</view> 
		<qiun-data-charts
		    type="candle"
			 style="height: 600px;" 
		    :chartData="chartsDataCandle1"
		    :loadingType="1"
		    :errorShow="false"
		    background="none"
		    :animation="false"
		    :tooltipShow="false"
		    :tapLegend="false"
		    :ontap="false"
		    :ontouch="true"
		    :onmouse="false"
		  />
		  <view class="top_moban" style="padding: 5rpx;">
		  	
		  	<view class="boolviewcss">
		  		价格
		  		<text :class="(zhangdiefu.split('-').length==1)?'redcolor':'greencolor'" style="padding-right: 20rpx;">￥{{jiage}}</text>
		  	</view>
		  	<view class="boolviewcss">
		  		涨幅
		  		<text :class="(zhangdiefu.split('-').length==1)?'redcolor':'greencolor'">{{zhangdiefu}}%</text>
		  	</view>
		  </view>
		  <button class="boolviewcss" style="width: 100%;" @click="tianjiazixuan" type="default">{{buttonstatus==1?'加入我的自选':'取消自选'}}</button>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	import demodata from '@/mockdata/demodata.json';
	export default {
		data() {
			return {
				chartsDataCandle1:{
				  categories:[],
				  series:[],
				},
				time: null,
				item: '',
				name:'',
				jiage: '',
				zhangdiefu:'',
				buttonstatus: 1,
				showself: uni.getStorageSync('login_key'),
				opts: {
					yAxis: {
						disabled: true,
					},
					extra:{ 
						tooltip:{ 
							show:false, 
							showCategory:false,
						},
						
					},
				}
			}
		},
		destroyed() {
			clearInterval(this.time)
			this.time = null
		},
		// 列表传值
		onLoad: function(option) {
			let that = this
			this.item = JSON.parse(option.item)
			console.log('this.item',this.item)
			if (this.item.length == 5) {
				this.name = this.item.name
				this.jiage = this.item[1]
				this.zhangdiefu = this.item[2]
			} else {
				this.name = this.item.name
				this.jiage = this.item.jiage
				this.zhangdiefu = this.item.zhangfu
			} 
			if (uni.getStorageSync('ListHQZHIXUANDATA_key')) {
				var list = JSON.parse(uni.getStorageSync('ListHQZHIXUANDATA_key'));
				// 判断是否已经加入了自选
				if (this.showself == 1) {
					list.forEach((item,index) => {
						// console.log(item,index)
						if (that.item.length == 5) {
							 if (item.name == this.name) {
							 	that.buttonstatus = 2
							 	uni.showToast({
							 	  icon: 'none',
							 	  title: '当前已经在自选中'
							 	});
							 }
						} else {
							if (item.name == this.name) {
								that.buttonstatus = 2
								uni.showToast({
								  icon: 'none',
								  title: '当前已经在自选中'
								});
							}
						} 
					}) 
				}
			}
		},
		mounted() {
			// this.mychart= echarts.init(document.getElementById('mainechart'))
			// this.echartsData()
			setTimeout(() => {
				this.chartsDataCandle1=JSON.parse(JSON.stringify(demodata.Candle))
			}, 1500);
		},
		methods: {
			tianjiazixuan() {
				let that = this
				if (this.showself == 1) {
					var list = uni.getStorageSync('ListHQZHIXUANDATA_key')?JSON.parse(uni.getStorageSync('ListHQZHIXUANDATA_key')): []
					if (that.buttonstatus == 1) {
						that.buttonstatus = 2
						list.push(that.item)
						uni.showToast({
						  icon: 'none',
						  title: '加入自选成功'
						});
					} else {
						list.forEach((item,index) => {
							
							if (item.name == that.item.name) {
								list.splice(index,1)
								that.buttonstatus = 1
								uni.showToast({
								  icon: 'none',
								  title: '取消当前自选成功'
								});
							} 
						})
					}
					
					uni.setStorageSync('ListHQZHIXUANDATA_key', JSON.stringify(list)) 
				} else {
					uni.showToast({
					  icon: 'none',
					  title: '当前未登录，请先登录后再进行操作'
					});
				}
			},
			NameWithId(ids) {
				let Map = {
					88: '天然橡胶',
					95: '沪镍',
					96: '沪金',
					97: '沪银',
					102: '棉花',
					104: '豆粕',
					109: 'PP聚丙烯',
					110: '鲜苹果',
					131: '沪深300',
					132: '上证50',
					137: 'PTA',
					145: '原油期货',
					146: '中证500',
					367: '白糖',
					395: '天然气',
					396: '布伦特原油',
					410: '布伦特原油',
					397: '美黄金',
					398: '美白银',
					399: '美铜',
					400: '恒指',
					401: '小恒指',
					402: '富时A50',
					403: '日经指数',
					404: '小道指',
					405: '小标普',
					406: '小纳指',
					407: '德指DAX',
					408: '小德指',
					409: '美原油',
				}
				return(Map[ids])	 
			},
			
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
		background: url(@/static/linebg.png)  fixed bottom left;
		min-height: 100vh;
		.boolviewcss {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 50%;
			height: 50px;
			border-radius: 10px;
			color: #FFF;
			box-shadow: 0px -1px 0px 0px #F04864,   /*上边阴影 */
						-0.2px 0px 0px 0px #F04864,   /*左边阴影  */
						0.2px 0px 0px 0px #F04864,    /*右边阴影 */
						0px 1px 0px 0px #F04864;     /*下边阴影 */
			background: url(@/static/linebg.png)  fixed bottom left;
			background-size:100% 100%;
		}
		.top_moban {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 50rpx;
		}
		.content_top {
			// min-height: 100rpx;
			margin-top: 30rpx;
			padding: 10rpx;
			border-radius: 9rpx;
			// background-color: #ffffff;
			// -webkit-box-shadow: 0rpx 1rpx 1rpx 0 #efefef;
			// box-shadow: 0rpx 1rpx 1rpx 0 #efefef;
			
			// text-align: center;
			// padding-bottom: 0;
			// padding-bottom: constant(safe-area-inset-bottom);  
			// padding-bottom: env(safe-area-inset-bottom);  
			// overflow: hidden;
			// background: url(@/static/linebg.png) no-repeat fixed top center;
			// background-size:100% 100%;
			
		}
		.name {
			font-size: 18px;
			color: #efefef;
		}
		.redcolor {
			color: #ea5050;
			font-size: 18px;
		}
		.greencolor {
			color: #4fba32;
			font-size: 18px;
		}
	}
</style>
