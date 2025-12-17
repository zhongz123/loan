<template>
  <view class="detail-container">
    <view style="margin-bottom: 40rpx"
      >编号：{{ detail.order_info.order_no }}</view
    >
    <view class="page-title">结清证明</view>
    <view class="detail-content">
      <view class="borrower-info">
        <text class="info-row"
          >借款人：<text class="text-weight">{{
            detail.userinfo.nickname
          }}</text
          >，</text
        >
        <text class="info-row"
          >身份证号：<text class="text-weight">{{
            detail.userinfo.id_card
          }}</text></text
        >
      </view>

      <view class="loan-info">
        <view class="info-paragraph">
          于<text class="text-weight">{{
            detail.order_info.loan_disbursement_date
          }}</text>
          向贷款人
          <text class="text-weight">{{ detail.config.party }}</text>
          （以下简称"贷款人"）申请的消费信用贷款， 借款金额<text
            class="text-weight"
            >{{ detail.order_info.loan_amount }}</text
          >
          元整，借款周期
          <text class="text-weight">{{ detail.order_info.loan_cycle }} </text>
          个月。
          <view class="stamp">
            <image
              class="stamp-img"
              src="@/static/repayment/seal.png"
              mode="scaleToFill"
            />
          </view>
        </view>

        <view class="info-paragraph">
          借款人已于
          <text class="text-weight">{{ detail.order_info.repayment_time }}</text>
          向贷款人结清上述贷款本息。
        </view>
      </view>

      <view class="statement">
        本证明仅用于证明借款人已结清上述贷款本息，不作为其他用途，再次复印无效。
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
import { fetchGetSettledDetailApi } from "@/apis";

const order_id = ref<number | null>(null);

const detail = ref<any>({});
const getSettlementDetail = async () => {
  await fetchGetSettledDetailApi({ order_id: order_id.value }).then(
    (res: any) => {
      detail.value = res.data;
    }
  );
};

onLoad((opts) => {
  if (opts && opts.id) {
    order_id.value = Number(opts.id);
    getSettlementDetail();
  }
});
</script>

<style scoped lang="scss">
.text-weight {
  font-weight: bold;
  border-bottom: 1rpx solid #333;
}
.detail-container {
  padding: 40rpx;
  background-color: #fff;
  min-height: 100vh;
}

.page-title {
  font-size: 42rpx;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60rpx;
}

.detail-content {
  padding: 0 20rpx;
}

.borrower-info {
  font-size: 32rpx;
  line-height: 1.8;
  margin-bottom: 40rpx;

  .info-row {
    color: #333;
  }
}

.loan-info {
  margin-bottom: 60rpx;

  .info-paragraph {
    font-size: 32rpx;
    line-height: 1.8;
    color: #333;
    text-indent: 2em;
    margin-bottom: 30rpx;
  }
}

.statement {
  font-size: 32rpx;
  line-height: 1.8;
  color: #333;
  text-indent: 2em;
  margin-bottom: 80rpx;
}

.stamp {
  position: absolute;
  left: 40rpx;
  text-align: right;
  padding-right: 60rpx;

  .stamp-img {
    width: 200rpx;
    height: 200rpx;
  }
}
</style>
