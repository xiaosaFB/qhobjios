<!-- 资讯 -->
<template>
	<view class="zx">
		<!-- <u-back-top :scroll-top="scrollTop"></u-back-top> -->
		<u-icon @click="kefu()" class="btn-kf" name="server-fill" color="#2979ff" size="18" label="在线客服" labelSize="13">
		</u-icon>
		<u-icon class="btn-zixun" name="file-text-fill" color="#0078D4" :bold="true" size="28" label="资讯"
			labelSize="18">
		</u-icon>
		<u-modal :show="showKf" :closeOnClickOverlay="true" @confirm="showKf = false" :content='"客服功能还在开发中，敬请期待~"'>
		</u-modal>
		<div class="topContainer-DS-EntryPoint1-1 ">
			<div class="filterContainerCommon-DS-EntryPoint1-1 filterContainer-DS-EntryPoint1-1"></div>
		</div>
		<div class="listContent-DS-EntryPoint1-1">
			<u-skeleton rows="2" :loading="loadingSkeleton" avatar :avatarSize="50" avatarShape="square">
				<div class="river-DS-EntryPoint1-1 river-rc riverAutoPagination-DS-EntryPoint1-1">
					<div class="riverSections-DS-EntryPoint1-1">
						<div class="cardWrapper-DS-card1-1" v-for="(item, index) in newsListData" :key="index">
							<div class="contentCard-DS-card1-1 feedsContentCard-DS-card1-1">
								<div class="contentCard_body-DS-card1-1">
									<div class="contentCard_info-DS-card1-1">
										<div class="contentCard_attribution-DS-card1-1"><img
												class="provider_logo-DS-card1-1" :src="item.icon">
											<p class="contentCard_attribution_text-DS-card1-1"><span
													class="provider_name-DS-card1-1">{{item.source}}</span><span
													class="provider_name-DS-card1-1"
													style="padding-left:5px ;padding-right:5px ;">&nbsp;·&nbsp;</span><span
													class="provider_name-DS-card1-1">{{item.interval}}</span><span
													class="label-DS-card1-1">{{item.type}}</span></p>
										</div><a class="contentCard_title-DS-card1-1" @click="jumpHotnewsdetail(item)">
											<h3>{{item.title}}</h3>
										</a>
									</div><span class="thumbnail-DS-card1-1"><img :src="item.thumb"></span>
								</div>
								<u-rate :count="1" :value="index%2===0?1:0" activeIcon="heart-fill"
									inactiveIcon="heart"></u-rate>
							</div>
						</div>
					</div>
				</div>
			</u-skeleton>
		</div>
	</view>
</template>

<script>
	import {
		newsList
	} from '@/api/homePageDataTop.js';
	export default {
		data() {
			return {
				newsListData: newsList,
				showKf: false,
				scrollTop: 0,
				mode: 'square',
				iconStyle: {
					fontSize: '32rpx',
					color: '#2979ff'
				},
				loadingSkeleton: true

			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		created() {
			setTimeout(() => {
				this.loadingSkeleton = false
			}, 1500)
		},
		onLoad() {

			this.tabIndex = 0
		},
		methods: {
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
			kefu() {
				this.showKf = true
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
		position: relative;
		background: #FFF;
		box-shadow: 0px 0px 0.8px rgba(0, 0, 0, 0.13), 0px 2px 10px rgba(0, 0, 0, 0.08);
		border-radius: 6px;
		top: 16px;
		margin: 0 8px 0 8px;
		padding: 16px 0px 0px 0;
		content-visibility: auto;
		color: #2B2B2B;
		height: 85vh;
		overflow: hidden;

		.btn-zixun {
			font-weight: bold;
			position: absolute;
			top: 30px;
			left: 20px;
		}

		.btn-kf {
			z-index: 1;
			position: absolute;
			top: 20px;
			right: 20px;
		}

		.topContainer-DS-EntryPoint1-1 {
			position: relative;
			display: flex;
			padding: 16px 16px 0px 16px;
		}


		.titleContainer-DS-EntryPoint1-2 {
			padding-left: 8px;
			font-size: 14px;
			line-height: 28px;
			white-space: nowrap;
			font-weight: 600;
			color: #2B2B2B;
		}

		.filterContainer-DS-EntryPoint1-1 {
			margin-left: 24px;
			font-size: 12px;
			font-weight: 500;
			flex: 1;
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
		}

		.filterContainerCommon-DS-EntryPoint1-1 {
			padding-right: 160px;
			height: 32px;
			overflow: hidden;
		}

		.listContent-DS-EntryPoint1-1 {
			height: 100%;
			overflow-y: auto;
			padding: 0 16px;
		}

		.riverAutoPagination-DS-EntryPoint1-1 {
			min-height: 100vh;
		}

		.river-DS-EntryPoint1-1,
		.riverSections-DS-EntryPoint1-1 {
			position: relative;
			margin-bottom: 100px;
		}

		.cardWrapper-DS-card1-1 {
			width: 100% !important;
			max-width: 576px;
			min-width: 264px;
			margin-bottom: 10px;
			background: #fff;
		}

		.cardWrapper-DS-card1-1:nth-child(odd) {
			background-color: #f3f5f7;
			border-color: #42b983;
			border-left-width: .5rem;
			border-left-style: double;
		}
		.cardWrapper-DS-card1-1:nth-child(even) {
			border-color:#a8b1ac;
			border-right-width: .5rem;
			border-right-style: double;
		}

		:nth-child(2) div[class^='cardWrapper-DS-card'] div[class^='contentCard-DS-card'] {
			border-bottom: 1px solid rgba(0, 0, 0, 0.09);
			border-top: none;
		}

		.feedsContentCard-DS-card1-1 {
			padding: 18px 0 16px 0;
		}

		.contentCard-DS-card1-1 {
			position: relative;
			box-sizing: content-box;
			cursor: pointer;
			width: 100%;
			margin: 0;
			border-bottom: 1px solid rgba(0, 0, 0, 0.09);
		}

		.contentCard_body-DS-card1-1 {
			display: flex;
		}

		.contentCard_info-DS-card1-1 {
			flex: 1;
			max-width: 100%;
			overflow: hidden;
		}

		.contentCard_attribution-DS-card1-1 {
			height: 16px;
			line-height: 16px;
			margin: 0;
			display: flex;
			align-items: center;
			max-width: calc(100% - 16px);
		}

		.provider_logo-DS-card1-1 {
			width: 16px;
			height: 16px;
			background: #fff;
			border-radius: 2px;
			margin-right: 8px;
		}

		.contentCard_attribution_text-DS-card1-1 {
			overflow: hidden;
			white-space: normal;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 1;
			font-size: 12px;
			font-weight: normal;
			color: rgba(0, 0, 0, 0.55);
		}

		.provider_name-DS-card1-1 {
			color: rgba(0, 0, 0, 0.55);
		}

		.label-DS-card1-1 {
			background: none;
			display: inline-block;
			font-size: 10px;
			height: 14px;
			line-height: 14px;
			padding: 0 6px;
			margin-left: 8px;
			color: rgba(0, 0, 0, 0.55);
			border: 1px solid rgba(0, 0, 0, 0.09);
			border-radius: 4px;
			text-transform: uppercase;
			font-weight: 600;
			outline: none;
		}

		.feedsContentCard-DS-card1-1 .contentCard_title-DS-card1-1 {
			margin-top: 8px;
			color: rgba(0, 0, 0, 0.83);
		}

		.contentCard_title-DS-card1-1 {
			text-decoration: none;
			color: #fff;
			margin: 6px 0 0 0;
			opacity: 0.9;
			z-index: 1;
		}

		.feedsContentCard-DS-card1-1 .contentCard_title-DS-card1-1 h3 {
			-webkit-line-clamp: 3;
			font-size: 14px;
			line-height: 20px;
			margin: 8px 0 0 0;
			font-weight: 600;
		}

		.contentCard_title-DS-card1-1::after {
			position: absolute;
			content: "";
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
		}

		.feedsContentCard-DS-card1-1 .thumbnail-DS-card1-1 {
			display: flex;
			align-self: flex-start;
			margin-left: 12px;
			border-radius: 4px;
			overflow: hidden;
			width: 80px;
			height: 80px;
		}

		.thumbnail-DS-card1-1 img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
