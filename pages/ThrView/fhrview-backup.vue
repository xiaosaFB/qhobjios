<template>
	<!-- 资讯 -->
	<view>	
		<view class="headNav">
			<view class="headNavBox">
				<scroll-view scroll-x="true" scroll-top>
					<view class="headNavLt" v-for="(item,index) in headTabList" :key="index" :class="{activeNav:index == headTabIdx}" @click="IsHeadTabClick(index,item)">
						{{ item.name }}
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="idxMain" v-if="headTabIdx ==0">
			<swiper class="swiper" indicator-active-color='#fff' :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in bannerList" :key='index' @click="JumpFuneralNews(index,item)">
					<view class="swiper-item uni-bg-red">
						<image :src="item.imgs"></image>
					</view>
					<view class="swiper-title">
						<view class="swiper-title-box">{{ item.title }}</view>
					</view>
				</swiper-item>
			</swiper>
			<view class="contBg">
				<view class="contOver" v-for="(item,index) in contOneList" :key="index" @click="jumpHotnewsdetail(item)">
					<view class="idxMainBox">
						<view class="contOverLt">
							<view class="contTxt">{{ item.title }}</view>
							<view class="contTime">{{ item.author }} {{ item.updateTime }}</view>
						</view>
						<view class="contRtImg"><image :src="item.imgs"></image></view>
					</view>
				</view>
			</view>
			<view class="shopOver">
				<view class="contTitle">
					<view class="idxMainBox">推荐热门</view>
				</view>
				<view class="idxMainBox">
					<view class="shopLt" v-for="(item,index) in contTwoList" :key='index' @click="jumpHotnewsdetail(item)">
						<view class="shopImg"><image :src="item.imgs" mode="aspectFill"></image></view>
						<view class="shopTxt">{{ item.name }}</view>
						</view>
				</view>
			</view>
			<view class="contBg">
				<view class="contTitle">
					<view class="idxMainBox">最新资讯</view>
				</view>
				<view class="newsOver">
					<view class="idxMainBox">
						<view class="newsTitle">三箭齐发！仨化工期货同日“首秀”稳起步，产业企业踊跃入场占先机</view>
						<view class="newsImg"><image src="../../static/titleLogo_ny.bcb4964.png" mode="aspectFit"></image></view>
						<view class="newsTime"><text>浏览：50</text><text>2022-01-30</text></view>
					</view>
				</view>
			</view>
			<!--内容3-->
			
		</view>
		<!--主体-->
		<!--抽空会更新模板-->
		<view class="" else-if>
			<u-list style="height: auto;">
				<u-list-item
					v-for="(item, index) in newsListData"
					:key="index"
					style="height: 80px;"
				>
					<u-cell :title="`${item.title}`" :label="item.subTitle" @click="jumpHotnewsdetail(item)">
						<u-avatar
							slot="icon"
							shape="square"
							size="35"
							:src="item.thumb"
							customStyle="margin: -3px 5px -3px 0;background-color: #767A8255;width:60px;height:60px"></u-avatar>
					</u-cell>
				</u-list-item>
			</u-list>
			<u-gap height="40" bg-color="#fff"></u-gap>
			<u-gap height="40" bg-color="#fff"></u-gap>
		</view>
	</view>
</template>

<script>
	import {newsList} from '../FirstView/homePageDataTop.js'
	export default {
		data() {
			return {
				newsListData: newsList,
				headTabList:[
					{ id:0, name:'热门资讯' },
					{ id:1, name:'资讯列表' }
				],//头部导航
				headTabIdx:0,
				
				bannerList:[
					{ id:1, imgs:'../../static/titleLogo_ny.bcb4964.png' },
					{ id:2, imgs:'../../static/titleLogo_ny.bcb4964.png' }
				],//轮播图
				
				contOneList:[
					{ id:1, title:'大商所7月10日起开展生猪期货仿真期货', author:'平台', updateTime:'2022-01-30', imgs:'../../static/titleLogo_ny.bcb4964.png',html: `<div class="details">
												
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
										</div>` },
					{ id:2, title:'晚籼稻期货基准交割调整为优质品', author:'平台', updateTime:'2022-01-30', imgs:'../../static/titleLogo_ny.bcb4964.png',html: `<div class="details">
												
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
										</div>` },
				],//内容1
				
				contTwoList:[
					{ id:1, imgs:'https://img11.360buyimg.com/n7/jfs/t1/94448/29/2734/524808/5dd4cc16E990dfb6b/59c256f85a8c3757.jpg', name:'【媒体看期市】郑商所发布花生期货合约及相关业务规则', money:'', yu:'' ,html: `<div class="details">
												
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
										</div>`},
					{ id:2, imgs:'https://img12.360buyimg.com/n7/jfs/t1/102191/19/9072/330688/5e0af7cfE17698872/c91c00d713bf729a.jpg', name:'原标题：机构投资策略“解局”： 大宗商品高涨黄金逆势低迷 比特币争宠', money:'', yu:'',html: `<div class="details">
												
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
										</div>` },
				],//内容2
				
				/*图片轮播*/
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				
			}
		},
		onLoad() {
			
		},
		methods: {
			jumpHotnewsdetail(item) {
				uni.navigateTo({
					url: '/pages/ThrView/hotnewsdetail?item='+ encodeURIComponent(JSON.stringify(item))
				});
			},
			//首页头部tab点击切换
			IsHeadTabClick: function(index,item){
				this.headTabIdx = index;
			},
			
			
			//官网复制的轮播
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
			
		}
	}
</script>

<style>
	page{ background: #F5F5F5; }
	.headNav{ 
		width: 100%;
		background: #FFFFFF;
		white-space: nowrap; 
		position: fixed;
		top: 0;
		left: 0;
		z-index: 15;
		border-bottom: 1px #F2F2F2 solid;
	}
	.headNavBox{ width: 92%;margin: 0 auto; }
	.headNavLt{	display: inline-block;height: 100upx;line-height: 100upx;font-size: 30upx;margin-right: 30upx; }
	.headNavLt:last-child{ margin-right: 0; }
	.activeNav{ color: #3B7ED5; }
	.swiper{  height: 307rpx; }
	.swiper-item image{ width: 100%;height: 307rpx;display: block; }
	
	.idxMain{ width: 100%;padding-top: 100upx; }
	.idxMainBox{ width: 92%;margin: 0 auto; }
	.contBg{ background: #FFFFFF;overflow: hidden;margin-bottom: 30upx; }
	
	.contOver{ border-bottom: 1px #EDEDED solid;overflow: hidden;transition: all 0.4s; }
	.contOver:active{ background: #E2E2E2; }
	.contOver:last-child{ border-bottom: none; }
	.contOverLt{ float: left;width: 60%; }
	.contTxt{
		color: #333333;
		font-size: 30upx;
		width: 100%;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
		overflow: hidden;
		padding-top: 30upx;
	}
	.contTime{ color: #888888;font-size: 24upx;margin-top: 30upx; }
	.contRtImg{ float: right;width: 35%;height: 155upx;margin: 30upx 0; }
	.contRtImg image{ width: 100%;height: 100%;display: block;border-radius: 6upx; }
	
	.contTitle{ background: #FFFFFF;font-size: 30upx;color: #3B7ED5;height: 80upx;line-height: 80upx;border-bottom: 1px #F5F5F5 solid; }
	.shopOver{ overflow: hidden;margin-bottom: 30upx; }
	.shopLt{ 
		float: left;
		width: 48.5%;
		background: #FFFFFF;
		height: 360upx;
		border: 1px #F2F2F2 solid;
		border-radius: 12upx;
		transition: all 0.4s;
		margin-top: 15upx;
	}
	.shopLt:nth-child(2n){ float: right; }
	.shopLt:active{ background: #E2E2E2; }
	.shopImg{ height: 220upx; }
	.shopImg image{ width: 100%;height: 100%;display: block;border-radius: 12upx 12upx 0 0; }
	.shopTxt{ font-size: 28upx;color: #333333;padding: 20upx 20upx 0 20upx;display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
	.shopMoney{ padding: 0 20upx; }
	.shopMoney text{ font-size: 26upx;color: red; }
	.shopMoney text:last-child{ color: #aaaaaa; }
	
	.newsOver{ border-bottom: 1px #F5F5F5 solid;transition: all 0.4s; }
	.newsOver:active{ background: #E2E2E2; }
	.newsOver:last-child{ border-bottom: none; }
	.newsTitle{ 
		font-size: 30upx;
		color: #333333;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:3;
		-webkit-box-orient:vertical;
		overflow: hidden;
		padding: 30upx 0 20upx 0;
		text-align: justify;
	}
	.newsImg{ height: 360upx;border: 1px #F5F5F5 solid; }
	.newsImg image{ width: 100%;height: 100%;display: block; }
	.newsTime{ overflow: hidden;padding: 20upx 0 30upx 0; }
	.newsTime text{ font-size: 26upx;color: #AAAAAA;float: left; }
	.newsTime text:last-child{ float: right; }
	
</style>
