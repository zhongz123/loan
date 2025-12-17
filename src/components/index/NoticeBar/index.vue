<template>
  <!-- 滚动消息区域 -->
  <view class="notice-bar">
    <text class="notice-icon">📢</text>
    <swiper
      class="swiper"
      circular
      :indicator-dots="false"
      :autoplay="true"
      :interval="1000"
      vertical
    >
      <swiper-item v-for="item in noticeList" :key="item.mobile">
        <view class="swiper-item">
          <text class="notice-text"
            >{{ item.loan_disbursement_date }} {{ item.mobile }} 成功借款 {{item.loan_amount}}元</text
          ></view
        >
      </swiper-item>
    </swiper>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { fetchGetLoanBannerApi } from "@/apis";

// 消息公告
const noticeList = ref<any[]>([]);
const getNoticeList = async () => {
  await fetchGetLoanBannerApi().then((res) => {
    if (res.code === 1) {
      noticeList.value = res.data;
    }
  });
};

onMounted(() => {
  getNoticeList();
});
</script>

<style scoped lang="scss">
.notice-bar {
  margin-top: 30rpx;
  background: rgb(255, 249, 237);
  height: 45rpx;
  padding: 20rpx 30rpx;
  display: flex;
  align-items: center;
}

.swiper {
  height: 100%;
  width: 100%;
}

.notice-icon {
  margin-right: 20rpx;
  font-size: 32rpx;
}

.notice-text {
  font-size: 28rpx;
  color: rgb(253, 91, 37);
  font-weight: bolder;
}
</style>
