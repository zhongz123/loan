<template>
  <view class="container">
    <!-- 头部文字 -->
    <view class="page-header" style="height: 160rpx">
      <text class="header-title">{{ isLogin ? '快分期' : '消费分期' }} 欢迎您</text>
      <text class="header-subtitle">超快下款 超低利率</text>
    </view>

    <!-- 登录布局 -->
    <IsLoginLayout v-if="isLogin">
      <template #noticeBar>
        <NoticeBar />
      </template>
    </IsLoginLayout>

    <!-- 未登录布局 -->
    <NoLoginLayout v-else>
      <template #noticeBar>
        <NoticeBar />
      </template>
    </NoLoginLayout>

    <!-- 产品详情卡片 -->
    <view class="product-card">
      <view class="product-title">产品详情</view>
      <view class="product-item">
        <text class="item-label">贷款利率：</text>
        <text class="item-value">年化利息(单利) 7.2%-34%</text>
      </view>
      <view class="product-item">
        <text class="item-label">最高金额：</text>
        <text class="item-value">最高可贷200,000元</text>
      </view>
      <view class="product-item">
        <text class="item-label">计息方式：</text>
        <text class="item-value">等额本息、等额本金、本息同还</text>
      </view>
      <view class="product-item">
        <text class="item-label">放款方式：</text>
        <text class="item-value">快10秒，放款至本人银行卡</text>
      </view>
      <view class="product-item">
        <text class="item-label">申请条件：</text>
        <text class="item-value">18~55岁凭身份证申请贷款</text>
      </view>
    </view>

    <view class="product-card">
      <view class="product-title">了解消费分期</view>
      <view style="text-align: center">
        <image
          src="@/static/index/about-us.webp"
          mode="aspectFit"
          style="width: 80%"
        />
      </view>
      <view class="product-title" style="font-size: 24rpx">合作机构</view>
      <image src="@/static/index/cooperation.webp" mode="aspectFit" />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IsLoginLayout from "@/components/index/IsLoginLayout/index.vue";
import NoLoginLayout from "@/components/index/NoLoginLayout/index.vue";
import { onShow } from "@dcloudio/uni-app";
import NoticeBar from "@/components/index/NoticeBar/index.vue";

const isLogin = ref<boolean>(false);

onShow(() => {
  isLogin.value = !!uni.getStorageSync("h5-token");
});
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  box-sizing: border-box;
  padding: 60rpx 0;
  background: #f5f5f5;
}

.header-title {
  font-size: 48rpx;
  color: #333;
  font-weight: bold;
}

.header-subtitle {
  font-size: 26rpx;
  color: #b1afaf;
  display: block;
  margin-top: 6rpx;
}

.product-card {
  background: #ffffff;
  border-radius: 16rpx;
  margin: 30rpx 30rpx;
  padding: 30rpx;
}

.product-title {
  font-size: 48rpx;
  text-align: center;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
  padding-left: 20rpx;
}

.product-item {
  display: flex;
  padding: 16rpx 0;
}

.item-label {
  width: 160rpx;
  font-size: 28rpx;
  color: #666;
}

.item-value {
  flex: 1;
  font-size: 28rpx;
  color: #333;
}
</style>
