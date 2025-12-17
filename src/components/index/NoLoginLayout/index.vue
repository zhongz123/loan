<template>
  <!-- 主卡片区域 -->
  <view class="card">
    <view class="card-top">
      <image
        class="penguin"
        src="@/static/index/cute.webp"
        mode="scaleToFill"
      />
      <view class="loan-info">
        <view class="welcome">你好，新朋友</view>
        <view class="loan-label">最高可贷额度(元)</view>
        <view class="loan-amount">200,000</view>
        <view class="loan-rate">年化利率(单利) 7.2%起</view>
      </view>
    </view>
    <button class="login-button" @click="handleLogin">立即登陆</button>
    <text class="tip">———— &nbsp;理性消费 合理消费 &nbsp;————</text>
  </view>

  <view>
    <slot name="noticeBar"></slot>
  </view>

  <!-- 进度指示器 -->
  <view class="steps">
    <view class="step-item">
      <image
        src="@/static/index/step-1.webp"
        mode="scaleToFill"
        style="width: 60rpx; height: 60rpx"
      />
      <text class="step-time">3分钟</text>
      <text class="step-desc">申请额度</text>
    </view>
    <text class="step-arrow">></text>
    <view class="step-item">
      <image
        src="@/static/index/step-2.webp"
        mode="scaleToFill"
        style="width: 60rpx; height: 60rpx"
      />
      <text class="step-time">30秒</text>
      <text class="step-desc">最快审批</text>
    </view>
    <text class="step-arrow">></text>
    <view class="step-item">
      <image
        src="@/static/index/step-3.webp"
        mode="scaleToFill"
        style="width: 60rpx; height: 60rpx"
      />
      <text class="step-time">1分钟</text>
      <text class="step-desc">最快放款</text>
    </view>
  </view>
</template>

<script setup lang="ts">
const handleLogin = () => {
  uni.navigateTo({
    url: '/pages/login/login',
  })
}
</script>

<style scoped lang="scss">
.card {
  background: rgb(81, 162, 255);
  border-bottom-left-radius: 30rpx;
  border-bottom-right-radius: 30rpx;
  padding: 40rpx;
  margin-top: 110rpx;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.is-login {
  }
}

.card-top {
  display: flex;
  align-items: center;
  position: relative;
}

.penguin {
  width: 300rpx;
  height: 300rpx;
}

.welcome {
  font-size: 48rpx;
  color: #fff;
  margin: 20rpx 0 40rpx;
  font-weight: bold;
}

.loan-info {
  padding: 0 20rpx;
}

.loan-label {
  font-size: 30rpx;
  color: #fff;
}

.loan-amount {
  font-size: 70rpx;
  color: #fff;
  font-weight: bold;
  display: block;
}

.loan-rate {
  font-size: 30rpx;
  color: #fff;
}

.login-button {
  background: #fff;
  color: rgb(21, 122, 238);
  font-size: 24rpx;
  font-weight: bold;
  height: 110rpx;
  line-height: 110rpx;
  border-radius: 55rpx;
  width: 250rpx;
  margin: 40rpx 40rpx 20rpx;
}

.tip {
  font-size: 24rpx;
  color: #fff;
}

.steps {
  width: 80%;
  margin: 30rpx auto;
  background: rgb(226, 232, 240);
  border-radius: 20rpx;
  padding: 30rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.step-item {
  text-align: center;
  flex: 1;
}

.step-time {
  font-size: 32rpx;
  color: #333333;
  font-weight: bold;
  display: block;
}

.step-desc {
  font-size: 24rpx;
  color: #666666;
  margin-top: 10rpx;
  display: block;
}

.step-arrow {
  color: #4bb5ff;
  font-size: 24rpx;
  margin: 0 10rpx;
}
</style>
