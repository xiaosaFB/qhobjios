<template>
	<view class="coinbase-item" @click="handle">
		<view class="coin-hot">
      <view>
        <text class="coin-text1" :class="[parseFloat(range) >= 0 ? 'up' : 'down']">{{ name.split('/')[0] }}<text class="gray" v-if="name.split('/')[1]">/ {{ name.split('/')[1] }}</text></text>
        <image src="/static/icon/hot.png" mode="aspectFit" class="icon-hotpic" v-if="hot"></image>
      </view>
      <view class="coin-num">
        <text style="font-size: 20upx;">涨幅： {{ Number(label).toFixed(2) }}%</text>
      </view>
    </view>
	<text class="coin-text-label">￥{{ value }}</text>
		<view class="conbox-label">
      <text class="coin-text2">${{ (value/6).toFixed(0) }}</text>
      
    </view>
		<!-- <text class="coin-text3" :class="[parseFloat(range) >= 0 ? 'up' : 'down']">{{ Number(label).toFixed(2) }}%</text> -->
	</view>
</template>

<script>
	export default {
    props: {
      hot: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      value: {
        type: [String,Number],
        default: ''
      },
      label: {
        type: [String,Number],
        default: ''
      },
      range: {
        type: [String,Number],
        default: ''
      },
      nums: {
        type: [String, Number, Boolean],
        default: false
      }
    },
		data() {
			return {
				
			};
		},
    methods: {
      handle () {
        this.$emit('click')
      }
    }
	}
</script>

<style lang="scss">
.coinbase-item {
  padding: 30rpx 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &:active {
    background-color: #f7f8f9;
  }
  &::after {
    content: '';
    position: absolute;
    left: 20rpx;
    right: 20rpx;
    bottom: 0;
    width: 100%;
    height: 1rpx;
    background-color: grey;
  }
  .coin-hot {
    width: 240rpx;
    position: relative;
    display: flex;
    flex-direction: column;
    .icon-hotpic {
      width: 40rpx;
      height: 40rpx;
      margin-top: -10rpx;
    }
  }
  .gray {
    font-size: 15px;
    font-weight: 400;
    color: #999;
    margin-left: 6rpx;
  }
  .coin-text1 {
    font-size: 14px;
    color:#333333;
    font-weight: bold;
	&.up {
	  color: #4eb772;
	}
	&.down {
	  color: #ed6660;
	}
  }
  .coin-text2 {
    // font-weight: bold;
    &.up {
      color: #4eb772;
    }
    &.down {
      color: #ed6660;
    }
  }
  .conbox-label {
    width: 260rpx;
    font-size: 30upx;
    text-align: right;
    display: flex;
    flex-direction: column;
  }
  .coin-text-label {
    font-size: 15px;
    color: #999;
  }
  .coin-text3 {
    border-radius: 15px;
    color: #fff;
    width: 150rpx;
    height: 56rpx;
    text-align: center;
    line-height: 56rpx;
    &.up {
      background-color: #4eb772;
    }
    &.down {
      background-color: #ed6660;
    }
  }
  .coin-num {
    color: #878ba8;
  }
  .up {
    color: #4eb772;
  }
  &.down {
    color: #ed6660;
  }
}
.up {
      color: #4eb772;
    }
.down {
      color: #ed6660;
    }
</style>
