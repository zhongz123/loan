<template>
  <div class="impact-overdue">
    <!-- 主要内容区域 -->
    <div class="content">
      <!-- 标题 -->
      <div class="section-title">逾期影响</div>
      <div class="subtitle">请尽快还款以免带来不必要的影响</div>

      <!-- 特别告知 -->
      <div class="notice-box">
        <div class="notice-title">特别告知</div>
        <div class="notice-content">
          如您逾期后，将承担支付罚息、违约金、催收费用等费用，并影响您的个人征信记录。
        </div>
      </div>

      <!-- 风险提示 -->
      <div class="risk-box">
        <div class="risk-title">逾期后将会面临的风险</div>
        <div class="risk-items">
          <div class="risk-item">
            1. 逾期罚息或违约金
            <div class="risk-detail">
              自逾期之日起，将按照合同约定的罚息或违约金标准计算罚息或违约金。
            </div>
          </div>
          <div class="risk-item">
            2. 上报征信
            <div class="risk-detail">
              我们会将您的不良记录上报至中国人民银行金融征信系统基础数据库，对您的信用状况会造成多方面影响。
            </div>
          </div>
        </div>
        <div class="risk-title" style="font-weight: 500">
          可能会影响您与其他金融机构之间的贷款申请业务。
        </div>
        <div class="risk-title" style="font-weight: 500">
          您在入职新岗位或面临晋升时，如在背景调查阶段被用人单位了解到存在不良征信，将可能会严重影响到您在工作中长期积累的正面评价，影响您的入职或晋升。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.impact-overdue {
  background: #f5f5f5;
  min-height: 100vh;
}

.content {
  padding: 16px;
}

.section-title {
  font-size: 36rpx;
  font-weight: 500;
  color: #333;
  font-weight: bold;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

.notice-box,
.risk-box,
.impact-card {
  background: #fff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.notice-title,
.risk-title {
  padding: 20rpx 0;
  font-size: 32rpx;
  background-color: rgba(194, 179, 200, 0.3);
  color: #333;
  text-align: center;
  font-weight: bold;
  margin-bottom: 12px;
}

.notice-content,
.risk-detail {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.risk-item {
  margin-bottom: 12px;
  font-size: 14px;
  color: #333;
}

.risk-detail {
  margin-top: 4px;
}

.impact-card {
  background: #f8f0ff;
}

.impact-content {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #666;
}

.dot {
  width: 6px;
  height: 6px;
  background: #666;
  border-radius: 50%;
  margin-right: 8px;
}
</style>
