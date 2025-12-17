<template>
  <view class="settlement-container">
    <view class="empty-tip" v-if="settlementList.length === 0">
      暂无结清记录
    </view>
    <view class="settlement-list" v-else>
      <view
        class="settlement-item"
        v-for="(item, index) in settlementList"
        :key="index"
        @click="handleToDetail(item.id)"
      >
        <view class="item-header">
          <text class="order-number">订单号：{{ item.order_no }}</text>
          <text class="order-status">已结清</text>
        </view>
        <view class="item-content">
          <view class="content-row">
            <text class="label">贷款金额</text>
            <text class="value">¥{{ item.loan_amount }}</text>
          </view>
          <view class="content-row">
            <text class="label">贷款时间</text>
            <text class="value">{{ item.loan_disbursement_date }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { fetchGetSettledListApi } from "@/apis";

const settlementList = ref<any>([]);
const getSettlementList = async () => {
  const res = await fetchGetSettledListApi();
  if (res.code === 1) {
    settlementList.value = res.data;
  }
};

const handleToDetail = (id: number) => {
  uni.navigateTo({
    url: `/pages/index/proofSettlementDetail?id=${id}`,
  });
};

onLoad(() => {
  getSettlementList();
});
</script>

<style lang="scss" scoped>
.settlement-container {
  padding: 30rpx;
  box-sizing: border-box;
  background-color: #f5f6f7;
}

.empty-tip {
  text-align: center;
  color: #999;
  font-size: 28rpx;
  padding: 60rpx 0;
}

.settlement-list {
  .settlement-item {
    background-color: #fff;
    border-radius: 16rpx;
    box-sizing: border-box;
    padding: 30rpx;
    margin-bottom: 30rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20rpx;
      padding-bottom: 20rpx;
      border-bottom: 2rpx solid #f5f5f5;

      .order-number {
        color: #333;
        font-size: 28rpx;
      }

      .order-status {
        color: #52c41a;
        font-size: 26rpx;
      }
    }

    .item-content {
      .content-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16rpx;

        &:last-child {
          margin-bottom: 0;
        }

        .label {
          color: #666;
          font-size: 26rpx;
        }

        .value {
          color: #333;
          font-size: 28rpx;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
