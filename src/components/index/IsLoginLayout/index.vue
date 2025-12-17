<template>
  <view class="card" v-if="loanDetail.loan.status == -1">
    <view class="card-top">
      <view class="loan-info" style="text-align: center">
        <view class="welcome"
          >{{ loanDetail.userinfo.nickname }} 先生/女士</view
        >
        <view class="welcome">您已经逾期{{ loanDetail.loan.day }}天</view>
        <view class="welcome"
          >总计欠款{{ loanDetail.loan.overdue_all_amount }}元</view
        >
      </view>
    </view>
    <button class="login-button" @click="handleToRepatment">立即还款</button>
    <text class="tip">———— &nbsp;理性消费 合理消费 &nbsp;————</text>
  </view>

  <view class="card has-loan" v-if="loanDetail.loan.status == 0">
    <view class="card-top">
      <view class="loan-info" style="text-align: center">
        <view class="welcome"
          >{{ loanDetail.userinfo.nickname }} 先生/女士</view
        >
        <!-- <view class="welcome"
          >总计欠款{{ loanDetail.loan.overdue_all_amount }}元</view
        > -->
      </view>
    </view>
    <button class="login-button" @click="handleToRepatment">立即还款</button>
    <text class="tip">———— &nbsp;理性消费 合理消费 &nbsp;————</text>
  </view>

  <view class="card no-loan" v-if="loanDetail.loan.status == 1">
    <view class="card-top">
      <view class="loan-info" style="text-align: center">
        <view class="welcome"
          >{{ loanDetail.userinfo.nickname }} 先生/女士</view
        >
        <view class="welcome">没有欠款</view>
      </view>
    </view>
    <text class="tip">———— &nbsp;理性消费 合理消费 &nbsp;————</text>
  </view>

  <view>
    <slot name="noticeBar"></slot>
  </view>

  <view class="func-box">
    <!-- <view class="func-item">
      <image src="@/static/components/apply-loan.webp" mode="scaleToFill" />
      <text>申请借款</text>
    </view> -->
    <view class="func-item" @click="handleToRepatment">
      <image src="@/static/components/my-loan.webp" mode="scaleToFill" />
      <text>我的借款</text>
    </view>
    <view class="func-item" @click="handleToRepatment">
      <image src="@/static/components/my-repayment.webp" mode="scaleToFill" />
      <text>我的还款</text>
    </view>
    <view class="func-item" @click="handleToMemberCenter">
      <image src="@/static/components/member-center.webp" mode="scaleToFill" />
      <text>会员中心</text>
    </view>
    <view class="func-item" @click="handleToProfile">
      <image src="@/static/components/my-data.webp" mode="scaleToFill" />
      <text>我的资料</text>
    </view>
    <view class="func-item" @click="handleToMemberCenter">
      <image
        src="@/static/components/personal-center.webp"
        mode="scaleToFill"
      />
      <text>个人中心</text>
    </view>
    <view class="func-item" @click="handleToProofSettlement">
      <image
        src="@/static/components/proof-settlement.png"
        mode="scaleToFill"
      />
      <text>结清证明</text>
    </view>
  </view>

  <view class="overdue-box">
    <text class="overdue-title">逾期影响</text>
    <view class="overdue-list" @click="handleToOverdueDetail">
      <view class="overdue-item">
        <image
          src="@/static/components/overdue-impact.webp"
          mode="scaleToFill"
        />
        <text>罚息/违约金</text>
      </view>
      <view class="overdue-item">
        <image
          src="@/static/components/overdue-impact.webp"
          mode="scaleToFill"
        />
        <text>上报征信</text>
      </view>
      <view class="overdue-item">
        <image
          src="@/static/components/overdue-impact.webp"
          mode="scaleToFill"
        />
        <text>出行受限</text>
      </view>
      <view class="overdue-item">
        <image
          src="@/static/components/overdue-impact.webp"
          mode="scaleToFill"
        />
        <text>影响高消费</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { fetchGetLoanDetailApi } from "@/apis";
import { onMounted, ref } from "vue";

const loanDetail = ref<any>({});
const getLoanDetail = async () => {
  await fetchGetLoanDetailApi().then((res) => {
    if (res.code === 1) {
      loanDetail.value = res.data;
    }
  });
};

const handleToRepatment = () => {
  uni.switchTab({ url: "/pages/repayment/repayment" });
};

const handleToMemberCenter = () => {
  uni.switchTab({ url: "/pages/my/my" });
};

const handleToProfile = () => {
  uni.navigateTo({ url: "/pages/my/profile" });
};

const handleToOverdueDetail = () => {
  uni.navigateTo({ url: "/pages/index/impactOverdue" });
};

const handleToProofSettlement = () => {
  uni.navigateTo({ url: "/pages/index/proofSettlement" });
};

onMounted(() => {
  getLoanDetail();
});
</script>

<style scoped lang="scss">
.card {
  background: linear-gradient(rgb(233, 0, 25), rgb(255, 97, 100));
  border-bottom-left-radius: 30rpx;
  border-bottom-right-radius: 30rpx;
  padding: 40rpx;
  margin-top: 110rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.has-loan {
  background: rgb(81, 162, 255) !important;
}

.no-loan {
  background: rgb(0, 181, 120) !important;

  .login-button {
    background: rgb(81, 162, 255) !important ;
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
  font-size: 38rpx;
  color: #fff;
  line-height: 2;
  font-weight: bolder;
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
  background: rgb(0, 181, 120);
  color: #fff;
  font-size: 34rpx;
  height: 90rpx;
  line-height: 90rpx;
  border-radius: 20rpx;
  width: 220rpx;
  margin-bottom: 20rpx;
}

.tip {
  font-size: 24rpx;
  color: #fff;
}

.func-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30rpx;
  padding: 40rpx;
  .func-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 200rpx;
    border-radius: 20rpx;
    box-shadow: 10rpx 20rpx 20rpx rgba(0, 0, 0, 0.1);
    image {
      height: 64rpx;
      width: 64rpx;
    }
    text {
      font-weight: bold;
      margin-top: 10rpx;
    }
  }
}

.overdue-box {
  width: 100%;

  .overdue-title {
    margin-left: 10rpx;
    font-size: 42rpx;
    font-weight: bold;
  }

  .overdue-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 30rpx;
    margin: 20rpx 0;
    border-radius: 20rpx;

    .overdue-item {
      display: flex;
      flex-direction: column;
      align-items: center;

      image {
        width: 72rpx;
        height: 72rpx;
      }

      text {
        color: #1677ff;
        font-size: 24rpx;
        font-weight: bold;
        margin-top: 20rpx;
      }
    }
  }
}
</style>
