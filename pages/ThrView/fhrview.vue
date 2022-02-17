<!-- 资讯 -->
<template>
	<view class="zx">
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<u-icon @click="kefu()" class="btn-kf" name="server-fill" color="#2979ff" size="18" label="在线客服" labelSize="13">
		</u-icon>
		<u-modal :show="showKf" :closeOnClickOverlay="true" @confirm="showKf = false"  :content='"客服功能还在开发中，敬请期待~"'></u-modal>
		<div class="topContainer-DS-EntryPoint1-1 ">
			<div class="feedsSvgContainer-DS-EntryPoint1-1">
				<svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14.6253 13.6667H3.37533C1.93113 13.6667 0.750951 12.5363 0.671276 11.112L0.666992 10.9583V2.20834C0.666992 1.21596 1.43796 0.403643 2.41362 0.337668L2.54199 0.333344H12.9587C13.9511 0.333344 14.7633 1.10431 14.8293 2.07997L14.8337 2.20834V2.83334H15.4587C16.4511 2.83334 17.2633 3.60431 17.3293 4.57997L17.3337 4.70834V10.9583C17.3337 12.4025 16.2032 13.5827 14.779 13.6624L14.6253 13.6667H3.37533H14.6253ZM3.37533 12.4167H14.6253C15.3905 12.4167 16.018 11.8274 16.0788 11.0779L16.0837 10.9583V4.70834C16.0837 4.39193 15.8485 4.13043 15.5435 4.08905L15.4587 4.08334H14.8337V10.5417C14.8337 10.8581 14.5985 11.1196 14.2935 11.161L14.2087 11.1667C13.8922 11.1667 13.6307 10.9315 13.5893 10.6265L13.5837 10.5417V2.20834C13.5837 1.89193 13.3485 1.63043 13.0435 1.58905L12.9587 1.58334H2.54199C2.22558 1.58334 1.96408 1.81847 1.9227 2.12354L1.91699 2.20834V10.9583C1.91699 11.7235 2.50625 12.351 3.25572 12.4118L3.37533 12.4167H14.6253H3.37533ZM9.20533 9.08334H11.7105C12.0557 9.08334 12.3355 9.36318 12.3355 9.70834C12.3355 10.0248 12.1004 10.2863 11.7953 10.3277L11.7105 10.3333H9.20533C8.86016 10.3333 8.58033 10.0535 8.58033 9.70834C8.58033 9.39193 8.81549 9.13043 9.12049 9.08901L9.20533 9.08334H11.7105H9.20533ZM6.70306 6.17043C7.04824 6.17043 7.32806 6.45026 7.32806 6.79543V9.70834C7.32806 10.0535 7.04824 10.3333 6.70306 10.3333H3.79013C3.44495 10.3333 3.16513 10.0535 3.16513 9.70834V6.79543C3.16513 6.45026 3.44495 6.17043 3.79013 6.17043H6.70306ZM6.07806 7.42043H4.41513V9.08334H6.07806V7.42043ZM9.20533 6.17043H11.7105C12.0557 6.17043 12.3355 6.45026 12.3355 6.79543C12.3355 7.11184 12.1004 7.37334 11.7953 7.41468L11.7105 7.42043H9.20533C8.86016 7.42043 8.58033 7.14059 8.58033 6.79543C8.58033 6.47901 8.81549 6.21751 9.12049 6.17609L9.20533 6.17043H11.7105H9.20533ZM3.79013 3.25207H11.7105C12.0557 3.25207 12.3355 3.53189 12.3355 3.87707C12.3355 4.19348 12.1004 4.45498 11.7953 4.49637L11.7105 4.50207H3.79013C3.44495 4.50207 3.16513 4.22225 3.16513 3.87707C3.16513 3.56066 3.40025 3.29916 3.70532 3.25778L3.79013 3.25207H11.7105H3.79013Z"
						fill="#0078D4"></path>
				</svg>
			</div>
			<div class="titleContainer-DS-EntryPoint1-2">资讯</div>
			<div class="filterContainerCommon-DS-EntryPoint1-1 filterContainer-DS-EntryPoint1-1"></div>
		</div>
		<div class="listContent-DS-EntryPoint1-1">
			<div class="river-DS-EntryPoint1-1 river-rc riverAutoPagination-DS-EntryPoint1-1">
				<div class="riverSections-DS-EntryPoint1-1">
					<div v-for="(item, index) in newsListData" :key="index"
						style="display: grid; gap: 2px; grid-template-rows: auto; margin-bottom: 2px;">
						<div style="grid-area: 1 / 1 / span 1 / span 1;">
							<div class="cardWrapper-DS-card1-1 ">
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
											</div><a class="contentCard_title-DS-card1-1"
												@click="jumpHotnewsdetail(item)">
												<h3>{{item.title}}</h3>
											</a>
										</div><span class="thumbnail-DS-card1-1"><img :src="item.thumb"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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
				scrollTop: 0

			}
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
		padding: 16px 0px 0px 8px;
		content-visibility: auto;
		color: #2B2B2B;
		height: 85vh;
		overflow: hidden;

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

		.feedsSvgContainer-DS-EntryPoint1-1 {
			padding-top: 4px;

			svg {

				path {
					fill: #0078D4;
				}
			}

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
			background: #fff;
		}

		div[class^='cardWrapper-DS-card'] div[class^='contentCard-DS-card'] {
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
			margin-bottom: -4px;
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
