<template>
	<view class="feedView">
		<view class="box" :isFull="true" title="反馈意见">
			<textarea v-model="data.content" placeholder="请输入您的反馈信息"></textarea>
		</view>
		<view class="box" :isFull="true" title="上传图片">
			<view class="imgs" v-for="(item, index) in data.imgList" :key="index">
				<image class="img" @click="previewImage(index)" :src="item.path" mode="aspectFit" />
				<uni-icons @click="removeImage(index)" style="color: white; font-size: 30rpx;" type="closeempty" class="remove"></uni-icons>
			</view>
			<view class="imgs" @click="chooseImage">
				<view class="img add-img">
					<uni-icons style="position:absolute; line-height: 150rpx; font-size: 149rpx;" type="camera"></uni-icons>
				</view>
			</view>
		</view>
		<button class="submit-btn" @click="submit">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					imgList: [],
					content: ""
				}
			}
		},
		methods: {
			chooseImage() {
				let _self = this;
				uni.chooseImage({
					sizeType: ['compressed', 'original'],
					sourceType: ['album', 'camera'],
					success: function(res) {
						_self.data.imgList = _self.data.imgList.concat(res.tempFiles)
					},
					fail: function(err) {
						console.log(err);
					}
				});
			},
			removeImage(index) {
				this.data.imgList.splice(index, 1)
			},
			previewImage(index) {
				uni.previewImage({
					current: index,
					urls: this.data.imgList.map(r => r.path)
				});
			},
			submit() {
				if (this.data.content.length == 0) {
					uni.showToast({
						title: '反馈内容不能是空',
						duration: 1000
					});
					return
				} else if (this.data.imgList.length==0) {
					uni.showToast({
						title: '反馈截图不能是空',
						duration: 1000
					});
					return
				} else {
					uni.showToast({
						title: '感谢您的反馈',
						duration: 1000
					});
					setTimeout(function() {
						uni.navigateBack();
					}, 1500)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.feedView {
		padding: 15px;
	}
	.box {
		margin-bottom: 20rpx;
	}
	.imgs {
		position: relative;
		display: inline-flex;
		flex-wrap: wrap;
		margin: 10rpx;
		width: 150rpx;
		height: 150rpx;
		.img {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
			border: 1rpx solid #ebebeb;
		}
		.remove {
			line-height: 30rpx;
			text-align: center;
			border-radius: 10rpx;
			position: absolute;
			right: 0rpx;	
			top: 0rpx;
			width: 30rpx;
			height: 30rpx;
			font-weight: bold;
			background-color: #e53c25;
		}
		.add-img {
			background-color: #f0f0f0;
		}
	}
	.submit-btn {
		background: linear-gradient(90deg, #10294F 18.22%, rgba(7, 39, 87, 0.9) 49.48%, rgba(3, 38, 90, 0.78) 63.02%, rgba(8, 58, 131, 0.49) 82.29%, rgba(0, 69, 172, 0.3) 100%);
		margin: 20rpx 0;
	}
</style>
