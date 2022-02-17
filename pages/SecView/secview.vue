<template>
	<view class="content">
     
    <!-- <view class="q-title-search">
      
      <view class="search">
        <u-search 
          placeholder="搜索期货" bg-color="none" 
          border-color="#d5cabb"
			:show-action="false" 
          v-model="keyword"
          @change="onSearch">
        </u-search>
      </view>
    </view>
    <view class="container">
      <view class="u-padding-left-20 u-padding-right-40">
        <u-tabs 
          ref="uTabs" 
          :list="list" 
          :current="current" 
         lineWidth="100"
		 lineColor="#f56c6c"
          font-size="32"
          active-color="#c7ab6c"
          inactive-color="#ED6660"
          bold item-width="130"
		  :activeStyle="{
					color: '#ED6660',
					fontWeight: 'bold',
					transform: 'scale(1.05)'
				}"
		  :inactiveStyle="{
					color: '#c7ab6c',
					transform: 'scale(1)'
				}"
		  itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;"
          @change="tabsChange">
        </u-tabs>
      </view>
      <swiper class="swiper" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
        <swiper-item class="swiper-item" v-for="(item, index) in list" :key="index">
          <scroll-view scroll-y style="height: 100vh;" @scrolltolower="onreachBottom">
            <view class="main-coinbase">
              <view class="list-item" v-for="(item, index) in (filterList || ListHQData)" :key="index" @click="toKline(item, item.id)">
                <coinbase-item
                  :name="item.name"
                  :value="`${item.jiage}` ? `${item.jiage}` : '0.00'"
                  :range="`${item.updown?1:-1}`"
                  :label="`${item.zhangfu}`"
                  :hot="index == 0 || index == 1"
                  ></coinbase-item>
              </view>
            </view>
          </scroll-view>
        </swiper-item>
      </swiper>
    </view> -->
	</view>
</template>

<script>
	
	import { ListHQ } from '@/api/homePageDataTop.js';
	import CoinbaseItem from './coinbase-item.vue'
	export default {
		data() {
			return {
        keyword: '',
		ListHQDataData: ListHQ,
		ListHQData : [],
        list: [{
          name: '自选'
        },{
          name: '金属'
        },{
          name: '国内'
        },{
          name: '国外'
        }],
        current: 0, // tabs组件的current值，表示当前活动的tab选项
        swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
        filterList: false
			};
		},
    onShow() {

    },
	components: {CoinbaseItem},
	created() {
			this.ListHQData = this.ListHQDataData
	},
    onLoad () {
		 
    },
	 
    methods: {
      onSearch () {
        if (this.$u.trim(this.keyword)) {
          this.filterList = this.topSymbols.filter((item) => {
            return item.title.toLocaleUpperCase().indexOf(this.$u.trim(this.keyword.toLocaleUpperCase())) != -1
          })
        } else {
          this.filterList = false
        }
      },
       
      toKline (symbol, id) {
		  uni.navigateTo({
		  	url: '/pages/SecView/lineDetail?item='+ encodeURIComponent(JSON.stringify(symbol))
		  })
      },
 
      // tabs通知swiper切换
      tabsChange(index) {
        this.swiperCurrent = index;
		this.ListHQData =[]
		setTimeout(() =>{
			this.ListHQData = this.ListHQDataData
		}, 500);
      },
      // swiper-item左右移动，通知tabs的滑块跟随移动
      transition(e) {
        let dx = e.detail.dx;
        // this.$refs.uTabs.setDx(dx);
      },
      // 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
      // swiper滑动结束，分别设置tabs和swiper的状态
      animationfinish(e) {
        // let current = e.detail.current;
        this.swiperCurrent = e.detail.current;
        this.current = e.detail.current;
      },
      // scroll-view到底部加载更多
      onreachBottom() {
        
      },
    }
	}
</script>

<style lang="scss" scoped>
.swiper {
  height: calc(100vh - 84px - 50px);
  /* #ifdef APP-PLUS */
  height: calc(100vh - 80rpx - 44px - var(--status-bar-height));
  /* #endif */
}
.navbar-user {
  padding: 0 30rpx;
}
.main-coinbase {
  position: relative;
}
.navbar-logo {
	margin-left: 30rpx;
	.image-logo {
		width: 210rpx;
		height: 70rpx;
	}
}
.navbar-user {
	padding: 0 30rpx;
}
.q-title-search {
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  padding: 16rpx 40rpx;
  .text {
    font-size: 40rpx;
    color: #000000;
  }
}
</style>
