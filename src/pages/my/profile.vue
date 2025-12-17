<template>
  <view class="profile-container">
    <!-- 自定义导航栏 -->
    <view class="nav-bar">
      <view class="nav-left" @click="handleBack">
        <image
          src="@/static/login/left.png"
          mode="aspectFit"
          class="back-icon"
        />
      </view>
      <view class="nav-title">
        <text>我的资料</text>
      </view>
      <view class="nav-right"></view>
    </view>

    <!-- 个人信息列表 -->
    <view class="info-list">
      <view class="info-item">
        <text class="label">姓名</text>
        <text class="value">{{ userInfo.username }}</text>
      </view>
      <view class="info-item">
        <text class="label">手机号</text>
        <text class="value">{{ userInfo.mobile }}</text>
      </view>
      <view class="info-item">
        <text class="label">身份证号</text>
        <text class="value">{{ userInfo.id_card }}</text>
      </view>
      <view class="info-item" @click="navigateTo('/pages/my/face-verify')">
        <text class="label">人脸识别</text>
        <view class="right-content">
          <text class="status">审核通过</text>
          <image src="@/static/my/right.png" mode="aspectFit" class="arrow" />
        </view>
      </view>
      <view
        class="info-item"
        style="flex-direction: column; align-items: flex-start"
      >
        <text class="label">银行卡</text>
        <view class="bank-card">
          <image :src="`${baseUrl}${userInfo.back_image}`" class="bank-sub-logo" />
          <view class="card-header">
            <view class="bank-logo-box">
              <image :src="`${baseUrl}${userInfo.back_image}`" class="bank-logo" />
            </view>
            <view class="bank-text-info">
              <text class="bank-name">{{ userInfo.bank_name }}</text>
              <text>储蓄卡</text>
            </view>
          </view>
          <view class="card-number">
            {{ formatBankNumber(userInfo.bank_number) }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { fetchUserInfoApi } from "@/apis";
import { onLoad } from "@dcloudio/uni-app";

const baseUrl = import.meta.env.VITE_BASE_URL;

// 用户信息
const userInfo = ref({});
const getUserInfo = async () => {
  await fetchUserInfoApi().then((res) => {
    if (res.code === 1) {
      userInfo.value = res.data.userInfo;
    }
  });
};

// 返回上一页
const handleBack = () => {
  uni.navigateBack();
};

// 页面跳转
const navigateTo = (url) => {
  uni.navigateTo({
    url,
  });
};

const formatBankNumber = (number) => {
  if (!number) return "";
  return number.replace(/(\d{4})(?=\d)/g, "$1 ");
};

onLoad(() => {
  getUserInfo();
});
</script>

<style lang="scss" scoped>
.profile-container {
  background-color: #f5f5f5;
  padding-bottom: 40rpx;

  .info-list {
    background-color: #fff;
    padding: 0 30rpx;

    .info-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30rpx 0;
      border-bottom: 2rpx solid #f5f5f5;

      .label {
        font-size: 32rpx;
        color: #333;
      }

      .value {
        font-size: 32rpx;
        color: #666;
      }

      .right-content {
        display: flex;
        align-items: center;

        .status {
          font-size: 32rpx;
          color: #666;
          margin-right: 10rpx;
        }

        .arrow {
          width: 40rpx;
          height: 40rpx;
        }
      }

      &:last-child {
        border-bottom: none;
      }
    }

    .bank-card {
      box-sizing: border-box;
      width: 100%;
      margin: 20rpx 0;
      background: linear-gradient(
        to right,
        rgb(235, 44, 44),
        rgb(253, 110, 110)
      );
      border-radius: 20rpx;
      padding: 30rpx;
      position: relative;

      .bank-sub-logo {
        width: 150rpx;
        height: 150rpx;
        position: absolute;
        right: 50rpx;
        bottom: 50rpx;
        opacity: .3;
      }

      .card-header {
        display: flex;
        align-items: center;
        margin-bottom: 40rpx;

        .bank-logo-box {
          width: 200rpx;
          height: 200rpx;
          border-radius: 200rpx;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;

          .bank-logo {
            width: 140rpx;
            height: 140rpx;
          }
        }

        .bank-text-info {
          display: flex;
          flex-direction: column;
          gap: 20rpx;
          color: #ffffff;
          margin-left: 20rpx;
        }

        .bank-name {
          color: #ffffff;
          font-size: 36rpx;
        }
      }

      .card-number {
        text-align: end;
        color: #ffffff;
        font-size: 40rpx;
        letter-spacing: 2rpx;
      }
    }
  }
}
</style>
