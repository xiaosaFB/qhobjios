<template>
	<view class="status_bar">
		<view class="content">
			<!-- banner -->
			<u-swiper 
				:list="bannerlist"
				previousMargin="20"
				nextMargin	="20"
				:autoplay="false"
				radius="5"
				imgMode="widthfix"
				bgColor="#152A4F">
				<view slot="indicator" class="indicator-num" >
				    <text class="indicator-num__text">1/1</text>
				</view>
			</u-swiper>
			
			<!-- 动态加载echart -->
			<view class="huashuview">
				<view class="scrolllist">
					<u-scroll-list @right="right" @left="left" :indicator="false">
						<view class="scroll-list" style="flex-direction: row;">
							<view class="scroll-list__goods-item" v-for="(item, index) in arrayHorizontalListing"
								:key="index" @click="getMarket(index,item)"
								style="background-color: rgba(43,66,105,0.4);">
								<view :class="{active:touchindex==index}"
									style="width: 105px; height: 75px;display: flex;flex-direction: column;justify-content: center;align-items: center;border-radius: 3px;">
									<text class="scroll-list__goods-item__text"
										style="color: #FFF;">{{ item.name }}</text>
									<text class="scroll-list__goods-item__text"
										style="color: #FFF;">{{ item.jiage }}</text>
									<text class="scroll-list__goods-item__text"
										style="color: red;">+{{ item.zhangfu }}%</text>
								</view>

							</view>
							<view class="scroll-list__show-more" @click="moreMarket">
								<text class="scroll-list__show-more__text">更多行情</text>
							</view>
						</view>
					</u-scroll-list>
				</view>
				<qiun-data-charts type="candle" style="height: 300upx;" :chartData="chartsDataCandle1" :loadingType="1"
					:errorShow="false" background="none" :animation="false" :tooltipShow="false" :tapLegend="false"
					:ontap="false" :ontouch="true" :onmouse="false" />
			</view>
			
			<!-- 通知 -->
			<u-notice-bar icon="../../static/noticeIcon.png" direction="column" :text="notice" mode="link" url='../ThrView/fhrview' color="#FFF" bgColor="#27282233"></u-notice-bar>

			<!-- 板块讲解 -->
			<view class="huashuview">
				<view class="toptiyle">
					<text style="color: #FFFFFF;z-index: 1;">板块讲解</text>
				</view>
				<u-row justify="flex-start" gutter="10" class="rowHeight">
					<u-col span="6">
						<view class="bg-purple">
							<text style="margin-top: 10px;color: #FFF;z-index: 2;">沥青主力</text>
							<qiun-data-charts type="candle" style="height: 148upx;" :chartData="chartsDataCandle2" :loadingType="1"
								:errorShow="false" background="none" :animation="false" :tooltipShow="false" :tapLegend="false"
								:ontap="false" :ontouch="true" :onmouse="false" />
						</view>
					</u-col>
					<u-col span="6">
						<view class="rightcol">
							<view class="bg-purple-sm">
								<view>
									<text>价格：</text>
									<text style="font-size: 20px;">3476</text>
								</view>
								<view>
									<text>涨幅：</text>
									<text style="font-size: 15px;color: red;">+0.13%</text>
								</view>
								
							</view>
							<view class="bg-purple-sm">
								<view class="bankuai1view">
									<text class="bankuaititle">最小变动价位 </text>
									<text class="bankuaititle1">2元/吨</text>
								</view>
								<view class="bankuai1view">
									<text class="bankuaititle">时间 </text>
									<text class="bankuaititle1">9:00－15:00</text>
								</view>
								<view class="bankuai1view">
									<text class="bankuaititle">涨跌停板幅度	 </text>
									<text class="bankuaititle1">±7%</text>
								</view>
								
							</view>
						</view>
					</u-col>
				</u-row>
				<u-row justify="flex-start" gutter="10" class="rowHeight">
					<u-col span="6">
						<view class="bg-purple">
							<text style="margin-top: 10px;color: #FFF;z-index: 2;">铁矿2203</text>
							<qiun-data-charts type="candle" style="height: 148upx;" :chartData="chartsDataCandle1" :loadingType="1"
								:errorShow="false" background="none" :animation="false" :tooltipShow="false" :tapLegend="false"
								:ontap="false" :ontouch="true" :onmouse="false" />
						</view>
					</u-col>
					<u-col span="6">
						<view class="rightcol">
							<view class="bg-purple-sm">
								<view>
									<text>价格：</text>
									<text style="font-size: 20px;">693</text>
								</view>
								<view>
									<text>涨幅：</text>
									<text style="font-size: 15px;color: #1C6400;">-4.13%</text>
								</view>
								
							</view>
							<view class="bg-purple-sm">
								<view class="bankuai1view">
									<text class="bankuaititle">最小变动价位 </text>
									<text class="bankuaititle1">0.5元/吨</text>
								</view>
								<view class="bankuai1view">
									<text class="bankuaititle">时间 </text>
									<text class="bankuaititle1">9:00－15:00</text>
								</view>
								<view class="bankuai1view">
									<text class="bankuaititle">涨跌停板幅度	 </text>
									<text class="bankuaititle1">±6％</text>
								</view>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
			<!-- 我的自选  写一个去登陆else -->
			<view class="zixuan">
				1111
			</view>
		</view>
		<u-gap height="80" bgColor="#fff"></u-gap>
		<u-gap height="80" bgColor="#fff"></u-gap>
	</view>
</template>

<script>
	import {
		TOPTHDATA,
		ListHQ,
		newsList
	} from '@/api/homePageDataTop.js'
	import demodata from '@/mockdata/demodata.json';
	import homedemodata from '@/mockdata/homedemodata.json';

	export default {
		data() {
			return {
				notice: ['原料价格上涨，方面便要跟着涨？业内人士：未来会走向高端化','业界热议低硫燃料油期货上市','在千红石化港储总经理张宏军看来，期货市场是价格风险对冲的平台，在大幅波动的市场行情中'],
				touchindex: 0,
				chartsDataCandle2: {
					categories: [],
					series: [],
				},
				chartsDataCandle1: {
					categories: [],
					series: [],
				},
				indicator: true,
				filterList: false,
				keyword: '',
				loginState: uni.getStorageSync('login_key'),
				curNow: 0,
				newsListdatas: newsList,
				newsListData: newsList.slice(0, 5), //资讯data
				indexList: ListHQ.slice(3, 11), // 期货data
				arrayHorizontalListing: TOPTHDATA, // 热门期货data
				text1: '粳米期货一周岁：产业多策略积极参与套保粳米期货一周岁：产业多策略积极参与套保', //通知
				bannerlist: ['../../static/homeBanner.png'], //轮播图
				/*图片轮播*/
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				contOneList: [{
						id: 1,
						title: '粳米期货一周岁：产业多策略积极参与套保',
						author: '平台',
						updateTime: '2022-01-30',
						imgs: 'https://img1.baidu.com/it/u=65051305,761009287&fm=253&fmt=auto&app=120&f=PNG?w=735&h=500',
						html: `<div class="details">
											
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">随着居民生活水平不断提高，市场对优质稻米的需求也随之增加，越来越多的优质稻品种涌向市场，“普改优”已成为稻米产业种植结构调整的重要方向。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">优质晚籼稻是加工小包装商品米所需的主要原料，其价格波动会给企业造成较大的生产经营风险。为更好满足企业的加工和套期保值需求，为企业提供有效的风险管理工具，2020年7月份，郑商所对晚籼稻期货交割标准进行了修订。</span> 
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">日前，郑商所相关负责人介绍，此次交割标准修订主要内容为：一是优化交割指标体系，将期货交割标的物定位于优质晚籼稻；二是调整替代交割品贴水幅度，充分体现“优质优价”原则；三是收严入库储存品质判定指标，避免储存品质较差的晚籼稻参与交割。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">该负责人表示，新的晚籼稻期货基准交割品指标主要参照黄华占稻谷设计，替代品指标则参照两优系列稻谷设计，上述两个品种均为市场中种植面积较大的优质稻谷品种。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">市场人士普遍认为，此次修订符合产业发展趋势，修订后的晚籼稻期货交割标的物定位更加清晰，能够较好满足产业的实际需求，有助于晚籼稻期货功能进一步发挥。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">如何保证交割标的物的“品种优质”？上述负责人表示，郑商所收集了近200份优质稻谷样品，对稻谷品种的指标特点进行了分析总结，同时参考《中华人民共和国国家标准优质稻谷》（GB/T17891-2017）内容，对交割指标体系进行了调整优化。例如，保留长宽比指标，要求基准交割品长宽比大于3.1，替代品长宽比在2.8和3.1之间，并根据该指标设置升贴水，突出“优质优价”原则；用垩白度指标替换了垩白粒率指标，要求参与交割的晚籼稻垩白度不高于2%，保证交割品感官指标的“优质”性；增加并设定异品种率不得高于7%，防止掺混较为严重的晚籼稻入库交割。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">该负责人提到，在保证“品种优质”的同时，新的交割标准也收严了对储存品质的要求。根据新标准，每年10月1日至次年3月31日入库的晚籼稻，脂肪酸值不得高于17mg/100g（干基）；其他时间入库的晚籼稻，脂肪酸值不得高于19mg/100g（干基）。相同时间段内入库晚籼稻的脂肪酸值较原标准分别降低了2mg/100g（干基）、3mg/100g（干基），入库晚籼稻的新鲜度较之前更好。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">此外，为贴合优质稻谷的加工需求，新交割标准将水分含量由原来的不高于13.5%修订为不高于14.5%，每年10月1日至<span style="">次年3月31日入库的晚籼稻，水分含量在14.5%和15.5%之间的，可扣量入库。考虑到当前晚籼稻机械化收割和烘干的现状，新交割标准将谷外糙米含量由不高于2%修订为不高于4%。</span></span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">据介绍，由于基准交割品参照物黄华占和替代品参照物两优系列稻谷的价差不稳定，今后将以公告的方式发布升贴水，最新发布的替代品贴水幅度为190元/吨。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">上述负责人表示，此次规则修订主要集中在交割标准的调整，交割方式，限仓标准等内容均未进行调整。</span>
					</p>
					<p align="justify">
						<strong><span style="font-family:SimSun;font-size:14px;">转载声明</span></strong><span style="font-family:SimSun;font-size:14px;">：转载文章仅为传播更多信息之目的，并不代表本网站赞同其观点，本网站亦不保证文章内容的真实性、准确性和可靠性。文章内容仅供参考，并不构成任何投资建议及入市依据，且不因接收人收到此内容而视其为客户。凡据此入市者，风险和责任需由使用者自行承担。如果本网站转载的文章不符合作者的版权声明或者作者不希望转载文章的。</span> 
					</p>
									</div>`
					},
					{
						id: 2,
						title: '上期所公布铝期货和锌期货合约上期所公布铝期货和锌期货合约',
						author: '平台',
						updateTime: '2022-01-30',
						imgs: 'https://img1.baidu.com/it/u=1399456712,4106567011&fm=253&fmt=auto&app=120&f=PNG?w=735&h=500',
						html: `<div class="details">
											
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">随着居民生活水平不断提高，市场对优质稻米的需求也随之增加，越来越多的优质稻品种涌向市场，“普改优”已成为稻米产业种植结构调整的重要方向。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">优质晚籼稻是加工小包装商品米所需的主要原料，其价格波动会给企业造成较大的生产经营风险。为更好满足企业的加工和套期保值需求，为企业提供有效的风险管理工具，2020年7月份，郑商所对晚籼稻期货交割标准进行了修订。</span> 
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">日前，郑商所相关负责人介绍，此次交割标准修订主要内容为：一是优化交割指标体系，将期货交割标的物定位于优质晚籼稻；二是调整替代交割品贴水幅度，充分体现“优质优价”原则；三是收严入库储存品质判定指标，避免储存品质较差的晚籼稻参与交割。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">该负责人表示，新的晚籼稻期货基准交割品指标主要参照黄华占稻谷设计，替代品指标则参照两优系列稻谷设计，上述两个品种均为市场中种植面积较大的优质稻谷品种。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">市场人士普遍认为，此次修订符合产业发展趋势，修订后的晚籼稻期货交割标的物定位更加清晰，能够较好满足产业的实际需求，有助于晚籼稻期货功能进一步发挥。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">如何保证交割标的物的“品种优质”？上述负责人表示，郑商所收集了近200份优质稻谷样品，对稻谷品种的指标特点进行了分析总结，同时参考《中华人民共和国国家标准优质稻谷》（GB/T17891-2017）内容，对交割指标体系进行了调整优化。例如，保留长宽比指标，要求基准交割品长宽比大于3.1，替代品长宽比在2.8和3.1之间，并根据该指标设置升贴水，突出“优质优价”原则；用垩白度指标替换了垩白粒率指标，要求参与交割的晚籼稻垩白度不高于2%，保证交割品感官指标的“优质”性；增加并设定异品种率不得高于7%，防止掺混较为严重的晚籼稻入库交割。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">该负责人提到，在保证“品种优质”的同时，新的交割标准也收严了对储存品质的要求。根据新标准，每年10月1日至次年3月31日入库的晚籼稻，脂肪酸值不得高于17mg/100g（干基）；其他时间入库的晚籼稻，脂肪酸值不得高于19mg/100g（干基）。相同时间段内入库晚籼稻的脂肪酸值较原标准分别降低了2mg/100g（干基）、3mg/100g（干基），入库晚籼稻的新鲜度较之前更好。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">此外，为贴合优质稻谷的加工需求，新交割标准将水分含量由原来的不高于13.5%修订为不高于14.5%，每年10月1日至<span style="">次年3月31日入库的晚籼稻，水分含量在14.5%和15.5%之间的，可扣量入库。考虑到当前晚籼稻机械化收割和烘干的现状，新交割标准将谷外糙米含量由不高于2%修订为不高于4%。</span></span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">据介绍，由于基准交割品参照物黄华占和替代品参照物两优系列稻谷的价差不稳定，今后将以公告的方式发布升贴水，最新发布的替代品贴水幅度为190元/吨。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">上述负责人表示，此次规则修订主要集中在交割标准的调整，交割方式，限仓标准等内容均未进行调整。</span>
					</p>
					<p align="justify">
						<strong><span style="font-family:SimSun;font-size:14px;">转载声明</span></strong><span style="font-family:SimSun;font-size:14px;">：转载文章仅为传播更多信息之目的，并不代表本网站赞同其观点，本网站亦不保证文章内容的真实性、准确性和可靠性。文章内容仅供参考，并不构成任何投资建议及入市依据，且不因接收人收到此内容而视其为客户。凡据此入市者，风险和责任需由使用者自行承担。如果本网站转载的文章不符合作者的版权声明或者作者不希望转载文章的。</span> 
					</p>
									</div>`
					},
				], //内容1

				contTwoList: [{
						id: 1,
						imgs: 'https://img2.baidu.com/it/u=1484456337,1126487471&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=309',
						name: '【媒体看期市】郑商所发布花生期货合约及相关业务规则',
						money: '',
						yu: '',
						html: `<div class="details">
											
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">随着居民生活水平不断提高，市场对优质稻米的需求也随之增加，越来越多的优质稻品种涌向市场，“普改优”已成为稻米产业种植结构调整的重要方向。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">优质晚籼稻是加工小包装商品米所需的主要原料，其价格波动会给企业造成较大的生产经营风险。为更好满足企业的加工和套期保值需求，为企业提供有效的风险管理工具，2020年7月份，郑商所对晚籼稻期货交割标准进行了修订。</span> 
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">日前，郑商所相关负责人介绍，此次交割标准修订主要内容为：一是优化交割指标体系，将期货交割标的物定位于优质晚籼稻；二是调整替代交割品贴水幅度，充分体现“优质优价”原则；三是收严入库储存品质判定指标，避免储存品质较差的晚籼稻参与交割。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">该负责人表示，新的晚籼稻期货基准交割品指标主要参照黄华占稻谷设计，替代品指标则参照两优系列稻谷设计，上述两个品种均为市场中种植面积较大的优质稻谷品种。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">市场人士普遍认为，此次修订符合产业发展趋势，修订后的晚籼稻期货交割标的物定位更加清晰，能够较好满足产业的实际需求，有助于晚籼稻期货功能进一步发挥。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">如何保证交割标的物的“品种优质”？上述负责人表示，郑商所收集了近200份优质稻谷样品，对稻谷品种的指标特点进行了分析总结，同时参考《中华人民共和国国家标准优质稻谷》（GB/T17891-2017）内容，对交割指标体系进行了调整优化。例如，保留长宽比指标，要求基准交割品长宽比大于3.1，替代品长宽比在2.8和3.1之间，并根据该指标设置升贴水，突出“优质优价”原则；用垩白度指标替换了垩白粒率指标，要求参与交割的晚籼稻垩白度不高于2%，保证交割品感官指标的“优质”性；增加并设定异品种率不得高于7%，防止掺混较为严重的晚籼稻入库交割。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">该负责人提到，在保证“品种优质”的同时，新的交割标准也收严了对储存品质的要求。根据新标准，每年10月1日至次年3月31日入库的晚籼稻，脂肪酸值不得高于17mg/100g（干基）；其他时间入库的晚籼稻，脂肪酸值不得高于19mg/100g（干基）。相同时间段内入库晚籼稻的脂肪酸值较原标准分别降低了2mg/100g（干基）、3mg/100g（干基），入库晚籼稻的新鲜度较之前更好。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">此外，为贴合优质稻谷的加工需求，新交割标准将水分含量由原来的不高于13.5%修订为不高于14.5%，每年10月1日至<span style="">次年3月31日入库的晚籼稻，水分含量在14.5%和15.5%之间的，可扣量入库。考虑到当前晚籼稻机械化收割和烘干的现状，新交割标准将谷外糙米含量由不高于2%修订为不高于4%。</span></span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">据介绍，由于基准交割品参照物黄华占和替代品参照物两优系列稻谷的价差不稳定，今后将以公告的方式发布升贴水，最新发布的替代品贴水幅度为190元/吨。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">上述负责人表示，此次规则修订主要集中在交割标准的调整，交割方式，限仓标准等内容均未进行调整。</span>
					</p>
					<p align="justify">
						<strong><span style="font-family:SimSun;font-size:14px;">转载声明</span></strong><span style="font-family:SimSun;font-size:14px;">：转载文章仅为传播更多信息之目的，并不代表本网站赞同其观点，本网站亦不保证文章内容的真实性、准确性和可靠性。文章内容仅供参考，并不构成任何投资建议及入市依据，且不因接收人收到此内容而视其为客户。凡据此入市者，风险和责任需由使用者自行承担。如果本网站转载的文章不符合作者的版权声明或者作者不希望转载文章的。</span> 
					</p>
									</div>`
					},
					{
						id: 2,
						imgs: 'https://img0.baidu.com/it/u=3284388619,708735942&fm=253&fmt=auto&app=120&f=JPEG?w=550&h=342',
						name: '原标题：机构投资策略“解局”： 大宗商品高涨黄金逆势低迷 比特币争宠',
						money: '',
						yu: '',
						html: `<div class="details">
											
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">随着居民生活水平不断提高，市场对优质稻米的需求也随之增加，越来越多的优质稻品种涌向市场，“普改优”已成为稻米产业种植结构调整的重要方向。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">优质晚籼稻是加工小包装商品米所需的主要原料，其价格波动会给企业造成较大的生产经营风险。为更好满足企业的加工和套期保值需求，为企业提供有效的风险管理工具，2020年7月份，郑商所对晚籼稻期货交割标准进行了修订。</span> 
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">日前，郑商所相关负责人介绍，此次交割标准修订主要内容为：一是优化交割指标体系，将期货交割标的物定位于优质晚籼稻；二是调整替代交割品贴水幅度，充分体现“优质优价”原则；三是收严入库储存品质判定指标，避免储存品质较差的晚籼稻参与交割。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">该负责人表示，新的晚籼稻期货基准交割品指标主要参照黄华占稻谷设计，替代品指标则参照两优系列稻谷设计，上述两个品种均为市场中种植面积较大的优质稻谷品种。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">市场人士普遍认为，此次修订符合产业发展趋势，修订后的晚籼稻期货交割标的物定位更加清晰，能够较好满足产业的实际需求，有助于晚籼稻期货功能进一步发挥。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">如何保证交割标的物的“品种优质”？上述负责人表示，郑商所收集了近200份优质稻谷样品，对稻谷品种的指标特点进行了分析总结，同时参考《中华人民共和国国家标准优质稻谷》（GB/T17891-2017）内容，对交割指标体系进行了调整优化。例如，保留长宽比指标，要求基准交割品长宽比大于3.1，替代品长宽比在2.8和3.1之间，并根据该指标设置升贴水，突出“优质优价”原则；用垩白度指标替换了垩白粒率指标，要求参与交割的晚籼稻垩白度不高于2%，保证交割品感官指标的“优质”性；增加并设定异品种率不得高于7%，防止掺混较为严重的晚籼稻入库交割。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">该负责人提到，在保证“品种优质”的同时，新的交割标准也收严了对储存品质的要求。根据新标准，每年10月1日至次年3月31日入库的晚籼稻，脂肪酸值不得高于17mg/100g（干基）；其他时间入库的晚籼稻，脂肪酸值不得高于19mg/100g（干基）。相同时间段内入库晚籼稻的脂肪酸值较原标准分别降低了2mg/100g（干基）、3mg/100g（干基），入库晚籼稻的新鲜度较之前更好。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">此外，为贴合优质稻谷的加工需求，新交割标准将水分含量由原来的不高于13.5%修订为不高于14.5%，每年10月1日至<span style="">次年3月31日入库的晚籼稻，水分含量在14.5%和15.5%之间的，可扣量入库。考虑到当前晚籼稻机械化收割和烘干的现状，新交割标准将谷外糙米含量由不高于2%修订为不高于4%。</span></span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">据介绍，由于基准交割品参照物黄华占和替代品参照物两优系列稻谷的价差不稳定，今后将以公告的方式发布升贴水，最新发布的替代品贴水幅度为190元/吨。</span>
					</p>
					<p style="text-align:justify;">
						<span style="font-size:14px;font-family:SimSun;">上述负责人表示，此次规则修订主要集中在交割标准的调整，交割方式，限仓标准等内容均未进行调整。</span>
					</p>
					<p align="justify">
						<strong><span style="font-family:SimSun;font-size:14px;">转载声明</span></strong><span style="font-family:SimSun;font-size:14px;">：转载文章仅为传播更多信息之目的，并不代表本网站赞同其观点，本网站亦不保证文章内容的真实性、准确性和可靠性。文章内容仅供参考，并不构成任何投资建议及入市依据，且不因接收人收到此内容而视其为客户。凡据此入市者，风险和责任需由使用者自行承担。如果本网站转载的文章不符合作者的版权声明或者作者不希望转载文章的。</span> 
					</p>
									</div>`
					},
				]
			}
		},
		onLoad() {

		},
		created() {
			this.newsListData = this.newsListdatas.slice(0, 5)
			setTimeout(() => {
				this.chartsDataCandle1 = JSON.parse(JSON.stringify(homedemodata.Candle))
				this.chartsDataCandle2 = JSON.parse(JSON.stringify(demodata.Candle))
			}, 1500);
		},
		methods: {
			getMarket(index, item) {
				this.touchindex = index
				if (index % 2 == 1) {
					setTimeout(() => {
						this.chartsDataCandle1 = JSON.parse(JSON.stringify(demodata.Candle))
					}, 100);
				} else {
					setTimeout(() => {
						this.chartsDataCandle1 = JSON.parse(JSON.stringify(homedemodata.Candle))
					}, 100);
				}

			},
			moreMarket() {
				uni.navigateTo({
					url: '../SecView/secview'
				})
			},
			left() {
				console.log('left');
			},
			right() {
				console.log('right');
			},
			onSearch() {
				if (this.$u.trim(this.keyword)) {
					this.filterList = this.topSymbols.filter((item) => {
						return item.title.toLocaleUpperCase().indexOf(this.$u.trim(this.keyword
						.toLocaleUpperCase())) != -1
					})
				} else {
					this.filterList = false
				}
			},
			tagclick(symbol) {
				uni.navigateTo({
					url: '/pages/SecView/lineDetail?item=' + encodeURIComponent(JSON.stringify(symbol))
				})
			},
			swiperclick() {
				uni.navigateTo({
					url: '/pages/ThrView/hotnewsdetail?item=' + encodeURIComponent(JSON.stringify(this.contTwoList[
						0]))
				});
			},
			jumpHotnewsdetail(item) {
				uni.navigateTo({
					url: '/pages/ThrView/hotnewsdetail?item=' + encodeURIComponent(JSON.stringify(item))
				});
			},
			zixuan(item, index) {

				this.tianjiazixuan(item, index)
			},
			tianjiazixuan(items, index) {
				let that = this
				if (this.loginState == 1) {
					var list = uni.getStorageSync('ListHQZHIXUANDATA_key') ? JSON.parse(uni.getStorageSync(
						'ListHQZHIXUANDATA_key')) : []

					list.push(items)
					uni.showToast({
						icon: 'none',
						title: '加入自选成功'
					});

					uni.setStorageSync('ListHQZHIXUANDATA_key', JSON.stringify(list))
				} else {
					uni.showToast({
						icon: 'none',
						title: '当前未登录，请先登录后再进行操作'
					});
				}
			},
			sectionChange(index) {
				this.newsListData = []
				this.curNow = index;
				if (index == 0) {
					this.newsListData = this.newsListdatas.slice(0, 5)
				} else if (index == 1) {
					this.newsListData = this.newsListdatas.slice(5, 10)
				} else {
					this.curNow = 0
					this.newsListData = this.newsListdatas.slice(0, 5)
					uni.navigateTo({
						url: '../ThrView/fhrview'
					})
				}
			},
			btn() {
				uni.navigateTo({
					url: '../SecView/secview'
				})
			}
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
		min-height: 100vh;
		z-index: 1;
		 .indicator {
		        @include flex(row);
		        justify-content: center;
		        &__dot {
		             height: 6px;
		             width: 6px;
		             border-radius: 100px;
		             background-color: rgba(255, 255, 255, 0.35);
		             margin: 0 5px;
		             transition: background-color 0.3s;
		    
		            &--active {
		                 background-color: #ffffff;
		             }
		        }
		    }
		
		    .indicator-num {
		        padding: 2px 0;
		        background-color: rgba(0, 0, 0, 0.35);
		        border-radius: 100px;
		        width: 35px;
		        @include flex;
		        justify-content: center;
		
		        &__text {
		             color: #FFFFFF;
		             font-size: 12px;
		         }
		    }
			.zixuan {
				margin: 10px 15px;
				min-height: 200px;
				border-radius: 10px;
				background-color: rgba(25,57,106, 0.4);
			}
		.huashuview {
			margin: 10px 15px;
			min-height: 200px;
			border-radius: 10px;
			background-color: rgba(253, 246, 236, 0.1);

			.scrolllist {
				margin: 0 5px;

				.scroll-list {

					@include flex(column);

					&__goods-item {
						.active {
							// border: 1px solid #2694ff;
							background-color: #13477F; // #0071DE
						}

						margin-top: 17px;
						margin-right: 20px;
						position: relative;

						&__image {
							position: absolute;
							top: 0px;
							right: 0px;
							width: 28px;
							height: 28px;
						}

						&__text {
							color: #333;
							text-align: center;
							font-size: 12px;
							margin-top: 5px;
						}
					}

					&__show-more {
						margin-top: 17px;
						width: 105px;
						background-color: rgba(43, 66, 105, 0.4);
						// border-radius: 3px;
						// padding: 3px 6px;
						@include flex(column);
						align-items: center;
						justify-content: center;

						&__text {
							font-size: 12px;
							// width: 12px;
							color: #fff;
							line-height: 16px;
						}
					}
				}
			}
		}
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.toptiyle {
		margin-top: 50upx;
		height: 80upx;
		background-color: #5F7497;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.rowHeight {
		padding: 0upx;
	}
	.bg-purple {
		margin-top: 35upx;
		height: 350upx;
		background: #5F7497;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		
	}
	.rightcol {
		margin-top: 13upx;
	}
	.bg-purple-sm {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		height: 168upx;
		background: #5F7497;
	}
	.bankuai1view {
		display: flex;
		margin-bottom: 3px;
		.bankuaititle {
			font-size: 16px;
		}
		.bankuaititle1 {
			font-size: 16px;
			color: #FFF;
		}
	}
</style>
