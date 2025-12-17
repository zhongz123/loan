<template>
  <view class="my-container">
    <!-- 公用顶部 -->
    <view class="page-header"> 快分期 欢迎您 </view>

    <!-- 用户信息区域 -->
    <view class="user-info">
      <image class="avatar" src="@/static/my/avatar.png"></image>
      <view class="user-detail">
        <text class="username">{{ userInfo.username || "" }}</text>
        <text class="phone">{{ userInfo.nickname || "" }}</text>
      </view>
    </view>

    <!-- 功能菜单列表 -->
    <view class="menu-list">
      <view class="menu-item" @click="switchTo('/pages/repayment/repayment')">
        <text>我的借款</text>
        <image src="@/static/my/right.png" mode="aspectFit" />
      </view>
      <view class="menu-item" @click="switchTo('/pages/repayment/repayment')">
        <text>我的还款</text>
        <image src="@/static/my/right.png" mode="aspectFit" />
      </view>
      <view class="menu-item" @click="navigateTo('/pages/my/profile')">
        <text>我的资料</text>
        <image src="@/static/my/right.png" mode="aspectFit" />
      </view>
      <view class="menu-item" @click="handleLogout">
        <text>退出登录</text>
        <image src="@/static/my/right.png" mode="aspectFit" />
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { fetchLogoutApi, fetchUserInfoApi } from "@/apis";
import { onShow } from "@dcloudio/uni-app";

// 用户信息
const userInfo = ref({});

const getUserInfo = async () => {
  await fetchUserInfoApi().then((res) => {
    if (res.code === 1) {
      userInfo.value = res.data.userInfo;
    }
  });
};

// 页面跳转
const navigateTo = (url) => {
  uni.navigateTo({
    url,
  });
};

const switchTo = (url) => {
  uni.switchTab({
    url,
  });
};

// 退出登录
const handleLogout = () => {
  uni.showModal({
    title: "提示",
    content: "确认退出登录？",
    success: async (res) => {
      if (res.confirm) {
        await fetchLogoutApi().then((res) => {
          if (res.code === 1) {
            // 清除登录状态
            uni.removeStorageSync("h5-token");
            // 跳转到登录页
            setTimeout(() => {
              uni.navigateTo({
                url: "/pages/login/login",
              });
            }, 500);
          }
        });
      }
    },
  });
};

onShow(() => {
  const token = uni.getStorageSync("h5-token");
  if (token) {
    getUserInfo();
  }
});
</script>

<style lang="scss" scoped>
.my-container {
  background-color: #f5f5f5;
  padding-top: 150rpx;
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-info {
    display: flex;
    align-items: center;
    padding: 40rpx;
    background-color: #fff;
    width: 80%;
    border-radius: 20rpx;

    .avatar {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      margin-right: 30rpx;
    }

    .user-detail {
      flex: 1;
      display: flex;
      flex-direction: column;
      .username {
        font-size: 36rpx;
        font-weight: bold;
        color: #333;
        margin-bottom: 10rpx;
      }

      .phone {
        font-size: 28rpx;
        color: #666;
      }
    }
  }

  .menu-list {
    margin-top: 10rpx;
    background-color: #fff;
    width: 80%;
    margin-top: 40rpx;

    .menu-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30rpx 40rpx;
      border-bottom: 1rpx solid #eee;

      text {
        font-size: 32rpx;
        color: #333;
      }

      image {
        width: 50rpx;
        height: 50rpx;
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
