<template>
  <view class="repayment-detail-container">
    <!-- 头部标题 -->
    <view class="nav-bar">
      <view class="nav-left" @click="handleBack">
        <image
          src="@/static/login/left.png"
          mode="aspectFit"
          class="back-icon"
        />
      </view>
      <view class="nav-title">
        <text>收银台</text>
      </view>
      <view class="nav-right"></view>
    </view>

    <!-- 确认还款信息卡片 -->
    <view class="confirm-card">
      <view class="confirm-title">确认还款信息</view>
      <view class="info-item">
        <text class="label">贷款编号</text>
        <text class="value">{{ orderNo }}</text>
      </view>
      <view class="info-item">
        <text class="label">本期本金</text>
        <text class="value">¥ {{ principal }}</text>
      </view>
      <view class="info-item">
        <text class="label">本期利息</text>
        <text class="value">¥ {{ interest }}</text>
      </view>
      <view class="info-item" v-if="overdueAmount >= 0">
        <text class="label denger">逾期罚金</text>
        <text class="value denger">￥ {{ overdueAmount }}</text>
      </view>
      <view class="info-item total">
        <text class="label" :class="overdueAmount >= 0 ? 'denger' : ''"
          >总还款金额</text
        >
        <text class="value" :class="overdueAmount >= 0 ? 'denger' : ''"
          >¥ {{ total }}</text
        >
      </view>
    </view>

    <!-- 还款渠道选择 -->
    <view class="payment-channel">
      <view class="channel-title">还款渠道</view>
      <view class="channel-card">
        <view class="bank-info">
          <view class="info-row">
            <text class="label">还款渠道</text>
            <view class="value">
              <picker
                mode="selector"
                :range="channelList"
                range-key="channels_name"
                :value="selectedIndex"
                @change="handleChannelChange"
              >
                <view class="picker-wrapper">
                  <text class="picker-text">{{
                    channelList[selectedIndex]?.channels_name ||
                    "请选择还款渠道"
                  }}</text>
                  <image
                    style="width: 30rpx; height: 30rpx"
                    src="@/static/repayment/right.png"
                    mode="scaleToFill"
                  />
                </view>
              </picker>
            </view>
          </view>
          <view class="info-row">
            <text class="label">{{
              channelList[selectedIndex]?.channels_name
            }}</text>
            <text class="value">{{ channelList[selectedIndex]?.name }}</text>
          </view>
          <view class="info-row">
            <text class="label">户名</text>
            <text class="value">{{
              channelList[selectedIndex]?.account_name
            }}</text>
          </view>
          <view class="info-row" style="align-items: flex-start">
            <text class="label">收款码</text>
            <view class="value">
              <image
                style="width: 200rpx; height: 200rpx"
                :src="`${baseUrl}${channelList[selectedIndex]?.images[0]}`"
                alt="收款码"
              />
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { fetchGetRepaymentChannelApi } from "@/apis";

const baseUrl = import.meta.env.VITE_BASE_URL;

// 还款信息
const orderNo = ref("");
const principal = ref("");
const interest = ref("");
const overdueAmount = ref(0);
const total = ref("");

// 返回上一页
const handleBack = () => {
  uni.navigateBack();
};

const channelList = ref<any>([]);
const getChannel = async () => {
  await fetchGetRepaymentChannelApi().then((res: any) => {
    if (res.code === 1) {
      channelList.value = res.data;
    }
  });
};

// 添加选择器相关的响应式数据
const selectedIndex = ref(0);

// 添加选择器change事件处理函数
const handleChannelChange = (e: any) => {
  selectedIndex.value = e.detail.value;
  const selectedChannel = channelList.value[selectedIndex.value];
  console.log("选中的渠道:", selectedChannel);
  // 这里可以处理选中渠道后的其他逻辑
};

// 复制银行账号
const handleCopy = () => {
  uni.setClipboardData({
    data: "622203201001912919",
    success: () => {
      uni.showToast({
        title: "复制成功",
        icon: "success",
      });
    },
  });
};

onLoad((options) => {
  if (options && options.repaymentDetail) {
    const repaymentDetail = JSON.parse(options.repaymentDetail);
    console.log("repaymentDetail", repaymentDetail);

    orderNo.value = repaymentDetail.orderNo;
    principal.value = repaymentDetail.principal;
    interest.value = repaymentDetail.interest;
    overdueAmount.value = repaymentDetail.overdueAmount;
    total.value = repaymentDetail.totalRepay;
  }
  getChannel();
});
</script>

<style lang="scss" scoped>
.repayment-detail-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 120rpx;
  box-sizing: border-box;
}

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 88rpx;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  font-size: 32rpx;
  font-weight: 500;
  color: #333;
  z-index: 100;
  border-bottom: 2rpx solid #eee;

  .back-btn {
    padding: 20rpx;
    margin-left: -20rpx;
    margin-right: 20rpx;

    image {
      width: 36rpx;
      height: 36rpx;
    }
  }
}

.confirm-card {
  margin: 50rpx 20rpx 20rpx;
  background: #fff;
  border-radius: 16rpx;
  padding: 30rpx;

  .confirm-title {
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 30rpx;
  }

  .info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24rpx;

    .label {
      color: #666;
      font-size: 28rpx;
    }

    .value {
      color: #333;
      font-size: 28rpx;
    }

    &.total {
      margin-top: 20rpx;
      padding-top: 20rpx;
      border-top: 2rpx solid #eee;

      .label,
      .value {
        color: #333;
        font-size: 32rpx;
        font-weight: bold;
      }
    }
  }
}

.payment-channel {
  margin: 20rpx;

  .channel-title {
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 20rpx;
  }

  .channel-card {
    background: #fff;
    border-radius: 16rpx;
    padding: 30rpx;

    .bank-info {
      .info-row {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 24rpx;

        .label {
          width: 140rpx;
          color: #666;
          font-size: 28rpx;
        }

        .value {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          color: #333;
          font-size: 28rpx;
        }

        .copy-btn {
          padding: 8rpx 24rpx;
          background: #f5f5f5;
          color: #666;
          font-size: 24rpx;
          border-radius: 24rpx;
          margin-left: 20rpx;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

.bottom-btn {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20rpx;
  background: #fff;
  border-top: 2rpx solid #eee;

  .confirm-btn {
    width: 100%;
    height: 80rpx;
    line-height: 80rpx;
    background: #07c160;
    color: #fff;
    font-size: 28rpx;
    border-radius: 40rpx;
    border: none;
  }
}

.picker-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10rpx 0;
}

.picker-text {
  margin-right: 10rpx;
  font-size: 28rpx;
  color: #333;
}

.denger {
  color: red !important;
}
</style>
