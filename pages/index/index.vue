<template>
	<view class="AbstractToolbar">
		<view class="ThePageContent" v-if="optimizeLoadingSpeed">
			<u-navbar bgColor="#FFFFFF" v-if="bottomButtonSelection!==0 &&bottomButtonSelection!==2" :titleStyle="{color: '#000'}"
				:title="arrayBottomButtonSelection[bottomButtonSelection]" :placeholder="true" leftIcon="" :border="true"></u-navbar>
			<view class="u-page">
				<div class="mainBackground-DS-EntryPoint1-1"></div>
				<first-view v-if="bottomButtonSelection==0"></first-view>
				<sec-view v-if="bottomButtonSelection==1"></sec-view>
				<thr-view v-if="bottomButtonSelection==2"></thr-view>
				<mine-view v-if="bottomButtonSelection==3"></mine-view>
			</view>
			<u-tabbar :value="bottomButtonSelection" @change="fnBottomButtonSelection" activeColor="#1B3054" inactiveColor="#D3DCED"
				:fixed="true" :placeholder="true" :border="true" :safeAreaInsetBottom="true">
				<u-tabbar-item style="background-color: #FFFFFF;" :text="arrayBottomButtonSelection[0]" @click="getBottomButtonSelection">
					<image class="IControllerButton-icon" slot="active-icon" src="/static/tabbar/sy_sel.png"></image>
					<image class="IControllerButton-icon" slot="inactive-icon" src="/static/tabbar/sy.png"></image>
				</u-tabbar-item>
				<u-tabbar-item style="background-color: #FFFFFF;" :text="arrayBottomButtonSelection[1]" @click="getBottomButtonSelection">
					<image class="IControllerButton-icon" slot="active-icon" src="/static/tabbar/hq_sel.png"></image>
					<image class="IControllerButton-icon" slot="inactive-icon" src="/static/tabbar/hq.png"></image>
				</u-tabbar-item>
				<u-tabbar-item style="background-color: #FFFFFF;" :text="arrayBottomButtonSelection[2]" @click="getBottomButtonSelection">
					<image class="IControllerButton-icon" slot="active-icon" src="/static/tabbar/news_sel.png"></image>
					<image class="IControllerButton-icon" slot="inactive-icon" src="/static/tabbar/news.png"></image>
				</u-tabbar-item>
				<u-tabbar-item style="background-color: #FFFFFF;" :text="arrayBottomButtonSelection[3]" @click="getBottomButtonSelection">
					<image class="IControllerButton-icon" slot="active-icon" src="/static/tabbar/self_sel.png"></image>
					<image class="IControllerButton-icon" slot="inactive-icon" src="/static/tabbar/self.png"></image>
				</u-tabbar-item>
			</u-tabbar>
		</view>
		<view v-else>
			<view v-if="networkNotLink" class="notnetworkshowpage">
				<view style="margin-top: 180px;">
					<u-image src="@/static/nonetwork.png" width="100px" height="100px" mode="aspectFill"></u-image>
					<text class="notnetworkshowpage">请检查您的网络</text>
					<button type="default" style="margin-top: 20px;" @click="fnBrokenNetworkReconnection">重新连接</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	// 开发三件套
	import Utils from "@/api/utils.js"
	import ResourceToLoad from '@/api/ResourceToLoad.js'
	import HomePageData from "@/api/HomePageCodeDataEnum.js"
	
	
	import FirstView from '@/pages/FirstView/firstview.vue'
	import SecView from '@/pages/SecView/secview.vue'
	import ThrView from '@/pages/ThrView/fhrview.vue'
	import MineView from '@/pages/MineView/mineview.vue'
	export default {
		data() {
			return {
				optimizeLoadingSpeed: false,
				networkNotLink: false,
				bottomButtonSelection: 0,
				arrayBottomButtonSelection: ['首页', '行情', '资讯', '个人中心']
			}
		},
		components: {
			FirstView,
			SecView,
			ThrView,
			MineView
		},
		onLoad(open) {
			this.fnRsrcToLoad()
			this.bottomButtonSelection = open.index || 0
		},
		methods: {
			fnBrokenNetworkReconnection() {
				this.fnRsrcToLoad()
			},
			fnRsrcToLoad() {
				let that = this
				// HomePageData.BaseTechnicalSupport(((res) => {
				// 	console.log('加载成功：',res)
				// 	if (res.code == 200) {
				// 		if (res.data) {
				// 			HomePageData.ResourceToLoadImpl(res.data.link.privacy_agreement, res)
				// 		} else {
				// 			that.optimizeLoadingSpeed = true
				// 			uni.showTabBar()
				// 		}
				// 	} else {
						that.optimizeLoadingSpeed = true
						uni.showTabBar()
				// 	}
				// 	}),((err)=> {
				// 		uni.hideTabBar() 
				// 		that.optimizeLoadingSpeed = false
				// 		that.networkNotLink = true
				// 	})
				// )
			},
			fnResourceToLoad(value, res) {
				uni.hideTabBar()
				this.optimizeLoadingSpeed = false 
			},
			getBottomButtonSelection(e) {},
			fnBottomButtonSelection(e) {
				this.bottomButtonSelection = e
			}
		}
	}
</script>

<style lang="scss" scoped>
	.AbstractToolbar {
		width: 100%;
	}
	.ThePageContent {
		height: var(--status-bar-height);
	}
	.IControllerButton-icon {
		width: 25px;
		height: 25px;
	}

	.notnetworkshowpage {
		margin-top: 30px;
		display: flex;
		justify-content: center;
		color: black;
	}
	.mainBackground-DS-EntryPoint1-1 {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: linear-gradient(180deg, #10294F 18.22%, rgba(7, 39, 87, 0.9) 49.48%, rgba(3, 38, 90, 0.78) 63.02%, rgba(8, 58, 131, 0.49) 82.29%, rgba(0, 69, 172, 0) 100%);
	}
</style>
