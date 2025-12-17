<template>
  <view class="login-container">
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
        <text>登录</text>
      </view>
      <view class="nav-right"></view>
    </view>

    <!-- 登录优势特点 -->
    <view class="features">
      <image src="@/static/login/bg.webp" mode="aspectFit" />
    </view>

    <!-- 登录表单 -->
    <view class="login-form">
      <view class="input-row">
        <image
          src="/static/login/phone.svg"
          class="input-icon"
          mode="aspectFit"
        ></image>
        <input
          type="number"
          v-model="phone"
          placeholder="请输入手机号"
          maxlength="11"
          class="input"
        />
      </view>
      <view class="divider"></view>
      <view class="input-row">
        <image
          src="/static/login/lock.svg"
          class="input-icon"
          mode="aspectFit"
        ></image>
        <input
          type="number"
          v-model="code"
          placeholder="请输入验证码"
          maxlength="6"
          class="input"
        />
        <button
          class="code-btn"
          @click="getVerificationCode"
          :disabled="isGettingCode"
        >
          {{ codeButtonText }}
        </button>
      </view>
      <view class="divider"></view>
      <button class="login-btn" @click="handleLogin">登录</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from "vue";
import { fetchGetCodeApi, fetchMobileLoginApi } from "@/apis";

// 响应式状态
const phone = ref<string>("");
const code = ref<string>("");
const isGettingCode = ref<boolean>(false);
const countdown = ref<number>(60);
const timer = ref<any>(null);

// 计算属性
const codeButtonText = computed(() => {
  return isGettingCode.value ? `${countdown.value}秒后重试` : "获取验证码";
});

// 方法
const handleBack = () => {
  uni.reLaunch({ url: "/pages/index/index" });
};

const getVerificationCode = async () => {
  if (!phone.value || phone.value.length !== 11) {
    uni.showToast({
      title: "请输入正确的手机号",
      icon: "none",
    });
    return;
  }

  isGettingCode.value = true;
  countdown.value = 60;
  timer.value = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      isGettingCode.value = false;
      if (timer.value) {
        clearInterval(timer.value);
      }
    }
  }, 1000);

  // TODO: 调用获取验证码接口
  await fetchGetCodeApi({
    mobile: phone.value,
  }).then((res) => {
    if (res.code === 1) {
      uni.showToast({
        title: "验证码发送成功",
        icon: "none",
      });
    }
  });
};

const handleLogin = async () => {
  if (!phone.value || phone.value.length !== 11) {
    uni.showToast({
      title: "请输入正确的手机号",
      icon: "none",
    });
    return;
  }

  if (!code.value || code.value.length !== 6) {
    uni.showToast({
      title: "请输入6位验证码",
      icon: "none",
    });
    return;
  }

  // TODO: 调用登录接口
  await fetchMobileLoginApi({
    mobile: phone.value,
    code: Number(code.value),
  }).then((res) => {
    if (res.code === 1) {
      uni.setStorageSync("h5-token", res.data.userInfo.token);
      uni.showToast({
        title: "登录成功",
        icon: "success",
      });
      setTimeout(() => {
        handleBack();
      }, 500);
    }
  });
};

// 生命周期钩子
onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value);
  }
});
</script>

<style lang="scss">
#app {
  background-color: #fff;
}
</style>

<style lang="scss" scoped>
.login-container {
  box-sizing: border-box;
  background-color: #fff;
  min-height: 100vh;
}

.nav-bar {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  height: 88rpx;
  padding: 0 30rpx;
  background-color: #fff;
  z-index: 999;
  box-shadow: 1rpx 1rpx 5rpx rgba(0, 0, 0, 0.1);

  .nav-left,
  .nav-right {
    width: 50rpx;
    height: 50rpx;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .nav-title {
    text-align: center;
    font-size: 32rpx;
    color: #333;
    font-weight: 500;
  }
}

.features {
  padding-top: 100rpx;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  box-sizing: border-box;
  width: 100%;
  padding: 0 50rpx;
  margin-top: 60rpx;
  background: #fff;
  border-radius: 20rpx;
  box-shadow: none;

  .input-row {
    display: flex;
    align-items: center;
    padding: 0 0 0 10rpx;
    height: 90rpx;
    background: #fff;

    .input-icon {
      width: 36rpx;
      height: 36rpx;
      margin-right: 20rpx;
    }

    .input {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 28rpx;
      color: #333;
      outline: none;
    }

    .code-btn {
      width: 180rpx;
      height: 60rpx;
      line-height: 60rpx;
      background: none;
      border: none;
      color: #1890ff;
      font-size: 28rpx;
      padding: 0;
      margin-left: 10rpx;

      &:disabled {
        color: #ccc;
      }
    }
  }

  .divider {
    height: 2rpx;
    background: #f0f0f0;
    margin: 0 0 0 56rpx;
  }

  .login-btn {
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    background-color: #1890ff;
    color: #fff;
    font-size: 32rpx;
    border-radius: 12rpx;
    margin-top: 60rpx;
    border: none;

    &:active {
      opacity: 0.8;
    }
  }
}
</style>
