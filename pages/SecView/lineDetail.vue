<template>
	<view class="content">
		<!-- 基础信息 -->
		<view class="basicInformation">
			<qiun-data-charts
			    type="candle"
				 style="height: 200px;" 
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
			  <view class="login-card-loginIn">
			  	 <button class="login-card-loginIn-btn" style="width: 100%;" @click="tianjiazixuan" type="default">{{buttonstatus==1?'加入我的自选':'取消自选'}}</button>
			  </view>
			 
			  <u-toast ref="uToast"></u-toast>
		</view>
		<!-- echart -->
		
		<!-- 个人看法 -->
		
		
		
		
		
		
		<!--  
		<view class="content_top">
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
		-->
	</view>
</template>

<script>
	import homedemodata from '@/mockdata/homedemodata.json';
	export default {
		data() {
			return {
				chartsDataCandle1:{
				  categories:[],
				  series:[],
				}, 
				item: '',
				name:'',
				jiage: '',
				zhangdiefu:'',
				buttonstatus: 1,
				showself: uni.getStorageSync('login_key'),
 
			}
		},
		destroyed() { 
			
		},
		// 列表传值
		onLoad: function(option) {
			let that = this
			this.item = JSON.parse(option.item)
			console.log('this.item',this.item)
			// if (this.item.length == 5) {
			// 	this.name = this.item.name
			// 	this.jiage = this.item[1]
			// 	this.zhangdiefu = this.item[2]
			// } else {
				this.name = this.item.name
				this.jiage = this.item.jiage
				this.zhangdiefu = this.item.zhangfu
			// } 
			if (uni.getStorageSync('ListHQZHIXUANDATA_key')) {
				var list = JSON.parse(uni.getStorageSync('ListHQZHIXUANDATA_key'));
				// 判断是否已经加入了自选
				if (this.showself == 1) {
					list.forEach((item,index) => {
						// console.log(item,index)
						// if (that.item.length == 5) {
						// 	 if (item.name == this.name) {
						// 	 	that.buttonstatus = 2
						// 	 	uni.showToast({
						// 	 	  icon: 'none',
						// 	 	  title: '当前已经在自选中'
						// 	 	});
						// 	 }
						// } else {
							if (item.name == this.name) {
								that.buttonstatus = 2
								uni.showToast({
								  icon: 'none',
								  title: '当前已经在自选中'
								});
							}
						// } 
					}) 
				}
			}
		},
		mounted() {
			// this.mychart= echarts.init(document.getElementById('mainechart'))
			// this.echartsData()
			setTimeout(() => {
				this.chartsDataCandle1=JSON.parse(JSON.stringify(homedemodata.Candle))
			}, 1500);
		},
		methods: {
			tianjiazixuan() {
				let that = this
				if (this.showself == 1) {
					var list = JSON.parse(uni.getStorageSync('ListHQZHIXUANDATA_key'))
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
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: linear-gradient(180deg, #10294F 18.22%, rgba(7, 39, 87, 0.9) 49.48%, rgba(3, 38, 90, 0.78) 63.02%, rgba(8, 58, 131, 0.49) 82.29%, rgba(0, 69, 172, 0) 100%);
		.basicInformation {
			margin: 10px 15px;
			min-height: 200px;
			border-radius: 10px;
			background: rgba(255, 255, 255, 0.1);
		}
		.login-card-loginIn{
		  height: 25%;
		  display: flex;
		  justify-content: center;
		  padding: 10rpx;
		  align-items: center;
		  .login-card-loginIn-btn{
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    background: linear-gradient(90deg, #10294F 18.22%, rgba(7, 39, 87, 0.9) 49.48%, rgba(3, 38, 90, 0.78) 63.02%, rgba(8, 58, 131, 0.49) 82.29%, rgba(0, 69, 172, 0.3) 100%);
		    
		    width: 100%;
		    font-size: 1.2em;
		    height: 80%;
		    border-radius: 40rpx;
		    color: white;
		  }
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
