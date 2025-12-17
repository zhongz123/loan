<template>
  <view class="repayment-container">
    <!-- 头部标题 -->
    <view class="page-header"> 快分期 欢迎您 </view>

    <!-- 贷款信息卡片 -->
    <view class="loan-card">
      <view class="order-number">
        订单编号：{{ orderNo }}
        <text v-if="order_status" class="status"
          :class="order_status === '逾期' ? 'overdue' : order_status === '待还款' ? 'unpaid' : 'paid'">{{ order_status
          }}</text>
      </view>

      <view class="loan-info">
        <view class="info-item">
          <text class="label">借款金额</text>
          <text class="value">¥ {{ loanAmount }}</text>
        </view>
        <view class="info-item">
          <text class="label">年化利率</text>
          <text class="value">{{ interestRate }}%</text>
        </view>
        <view class="info-item">
          <text class="label">放款日期</text>
          <text class="value">{{ loanDate }}</text>
        </view>
        <view class="info-item">
          <text class="label">周期</text>
          <text class="value">{{ period }}个月</text>
        </view>
        <view class="info-item">
          <text class="label">每月还款本金</text>
          <text class="value">¥ {{ monthlyPrincipal }}</text>
        </view>
        <view class="info-item">
          <text class="label">每月还款利息</text>
          <text class="value">¥ {{ monthlyInterest }}</text>
        </view>
        <view class="info-item">
          <text class="label">总利息</text>
          <text class="value">¥ {{ monthlyTotal }}</text>
        </view>
        <view class="info-item overdue">
          <text class="label">逾期天数</text>
          <text class="value red">{{ overdueDays }}天</text>
        </view>
        <view class="info-item overdue">
          <text class="label">逾期金</text>
          <text class="value red">合计￥{{ overdueAmount }}</text>
        </view>
        <view class="info-item total">
          <text class="label">总还款金额</text>
          <text class="value">¥ {{ totalAmount }}</text>
        </view>
      </view>

      <view class="action-buttons">
        <button class="repay-btn" @click="handleRepayAll">一键还款</button>
        <button class="contract-btn" @click="handleToContract">贷款合同</button>
      </view>
    </view>

    <!-- 还款进度 -->
    <view class="repayment-progress">
      <view class="progress-title">还款列表</view>
      <view v-for="(item, index) in repaymentList" :key="index" class="progress-item">
        <view class="left-bar" :class="item.status === '已还款'
          ? 'paid'
          : item.status === '待还款'
            ? 'unpaid'
            : 'overdue'
          "></view>
        <view class="content">
          <view class="period">第{{ index + 1 }}期</view>
          <view class="amount-row">
            <text class="label">当期还款本金：</text>
            <text class="value">¥ {{ item.principal }}</text>
          </view>
          <view class="amount-row">
            <text class="label">当期还款利息：</text>
            <text class="value">¥ {{ item.interest }}</text>
          </view>
          <view class="amount-row" v-if="item.status === '逾期'">
            <text class="label">当期逾期罚金：</text>
            <text class="value">¥ {{ item.expected_amount }}</text>
          </view>
          <view class="amount-row">
            <text class="label">当期还款总额：</text>
            <text class="value">¥
              {{ item.principal + item.interest + item.expected_amount }}</text>
          </view>
          <view class="amount-row">
            <text class="label">当期还款日期：</text>
            <text class="value">{{ item.date }}</text>
          </view>
        </view>
        <view class="status-tag" :class="item.status === '已还款'
          ? 'paid'
          : item.status === '待还款'
            ? 'unpaid'
            : 'overdue'
          ">
          {{ item.status }}
        </view>
        <button v-if="item.status !== '已还款'" class="repay-btn" :class="item.status === '待还款' ? 'unpaid' : 'overdue'"
          @click="handleRepay(item)">
          立即还款
        </button>
      </view>
    </view>

    <!-- 底部导航 -->
    <view class="tab-bar">
      <view class="tab-item">
        <image src="/static/icons/home.png" mode="aspectFit" />
        <text>首页</text>
      </view>
      <view class="tab-item active">
        <image src="/static/icons/repay.png" mode="aspectFit" />
        <text>还款</text>
      </view>
      <view class="tab-item">
        <image src="/static/icons/mine.png" mode="aspectFit" />
        <text>我的</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { fetchGetRepaymentDetailApi } from "@/apis";
import { onShow } from "@dcloudio/uni-app";

// 贷款信息
// 贷款单状态
const order_status = ref("");
const orderNo = ref("");
const loanAmount = ref("0");
const interestRate = ref("0");
const loanDate = ref("");
const period = ref();
const monthlyPrincipal = ref("0");
const monthlyInterest = ref("0");
const monthlyTotal = ref("0");
const overdueDays = ref(0);
const overdueAmount = ref("0");
const totalAmount = ref("0");

// 还款记录
const repaymentList = ref<any>([]);

// 获取还款列表
const getRepaymentList = async () => {
  await fetchGetRepaymentDetailApi().then((res) => {
    if (res.code === 1) {
      order_status.value = res.data.order_status;
      orderNo.value = res.data.order_no;
      loanAmount.value = res.data.loan_amount;
      interestRate.value = res.data.loan_rate;
      loanDate.value = res.data.loan_disbursement_date;
      period.value = res.data.loan_cycle;
      monthlyPrincipal.value = res.data.cycle_principal;
      monthlyInterest.value = res.data.cycle_interest;
      monthlyTotal.value = res.data.all_interest;
      overdueDays.value = res.data.day;
      overdueAmount.value = res.data.all_expected_amount;
      totalAmount.value = res.data.overdue_all_amount;
      repaymentList.value = res.data.orderDetail;
    }
  });
};

// 一键还款
const handleRepayAll = () => {
  const repaymentDetail = {
    orderNo: orderNo.value,
    principal: loanAmount.value,
    interest: monthlyTotal.value,
    overdueAmount: overdueAmount.value, // 逾期金额
    totalRepay: totalAmount.value,
  };
  uni.navigateTo({
    url: `/pages/repayment/repayment-detail?repaymentDetail=${JSON.stringify(
      repaymentDetail
    )}`,
  });
};

// 跳转到贷款合同
const handleToContract = () => {
  uni.navigateTo({
    url: "/pages/repayment/contract",
  });
};

// 还款操作
const handleRepay = (item: any) => {
  const repaymentDetail = {
    orderNo: orderNo.value,
    principal: item.principal,
    interest: item.interest,
    totalRepay: item.principal + item.interest + item.expected_amount,
  };
  uni.navigateTo({
    url: `/pages/repayment/repayment-detail?repaymentDetail=${JSON.stringify(
      repaymentDetail
    )}`,
  });
};

onShow(() => {
  const token = uni.getStorageSync("h5-token");
  if (token) {
    getRepaymentList();
  } else {
    uni.reLaunch({
      url: "/pages/login/login",
    });
  }
});
</script>

<style lang="scss" scoped>
.repayment-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loan-card {
  background: #fff;
  border-radius: 16rpx;
  margin: 150rpx 20rpx 0;
  width: 90%;
  padding: 0;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.05);

  .order-number {
    background: rgb(81, 162, 255);
    color: #fff;
    font-size: 24rpx;
    padding: 20rpx 30rpx;
    border-radius: 16rpx 16rpx 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .status {
      color: #fff;
      padding: 4rpx 16rpx;
      border-radius: 4rpx;
      font-size: 24rpx;

      &.paid {
        background: #07c160;
      }

      &.unpaid {
        background: #1890ff;
      }

      &.overdue {
        background: #ff4d4f;
      }
    }
  }

  .loan-info {
    padding: 30rpx;

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
        font-weight: 500;

        &.red {
          color: #ff4d4f;
        }
      }

      &.overdue {
        .label {
          color: #ff4d4f;
        }
      }

      &.total {
        margin-top: 20rpx;
        padding-top: 20rpx;
        border-top: 2rpx solid #eee;

        .label,
        .value {
          color: #ff4d4f;
          font-size: 32rpx;
          font-weight: bold;
        }
      }
    }
  }

  .action-buttons {
    padding: 0 30rpx 30rpx;
    display: flex;
    gap: 20rpx;

    button {
      flex: 1;
      height: 80rpx;
      line-height: 80rpx;
      border-radius: 40rpx;
      font-size: 28rpx;
      border: none;

      &.repay-btn {
        background: #07c160;
        color: #fff;
      }

      &.contract-btn {
        background: #f5f5f5;
        color: #666;
      }
    }
  }
}

.repayment-progress {
  width: 100%;
  padding: 30rpx;
  box-sizing: border-box;

  .progress-title {
    font-size: 32rpx;
    font-weight: bold;
    color: #333;
    margin-bottom: 30rpx;
  }

  .progress-item {
    position: relative;
    background: #fff;
    border-radius: 12rpx;
    padding: 30rpx;
    margin-bottom: 20rpx;
    display: flex;

    .left-bar {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 8rpx;
      border-radius: 8rpx 0 0 8rpx;

      &.paid {
        background: #07c160;
      }

      &.unpaid {
        background: #1890ff;
      }

      &.overdue {
        background: #ff4d4f;
      }
    }

    .content {
      flex: 1;
      padding-left: 20rpx;

      .period {
        // color: oklch(0.707 0.165 254.624);
        font-size: 30rpx;
        font-weight: bold;
        margin-bottom: 20rpx;
      }

      .amount-row {
        display: flex;
        align-items: center;
        margin-bottom: 10rpx;

        .label {
          color: #666;
          font-size: 26rpx;
        }

        .value {
          color: #333;
          font-size: 26rpx;
        }
      }
    }

    .status-tag {
      position: absolute;
      right: 30rpx;
      top: 30rpx;
      font-size: 24rpx;
      padding: 4rpx 16rpx;
      border-radius: 4rpx;
      color: #fff;

      &.paid {
        background: #07c160;
      }

      &.unpaid {
        background: #1890ff;
      }

      &.overdue {
        background: #ff4d4f;
      }
    }

    .repay-btn {
      position: absolute;
      right: 30rpx;
      bottom: 30rpx;
      width: 160rpx;
      height: 60rpx;
      line-height: 60rpx;
      text-align: center;
      background: #ff4d4f;
      color: #fff;
      border-radius: 30rpx;
      font-size: 26rpx;

      &.unpaid {
        background: #1890ff;
      }

      &.overdue {
        background: #ff4d4f;
      }
    }
  }
}

.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100rpx;
  background-color: #fff;
  display: flex;
  align-items: center;
  border-top: 2rpx solid #eee;

  .tab-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
    font-size: 24rpx;

    image {
      width: 48rpx;
      height: 48rpx;
      margin-bottom: 6rpx;
    }

    &.active {
      color: #07c160;
    }
  }
}
</style>
