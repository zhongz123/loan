import http from "@/utils/request";

// 获取还款详情
export function fetchGetRepaymentDetailApi() {
  return http.post("/api/Repayment/detail");
}

// 获取合同详情
export function fetchGetContractDetailApi() {
  return http.post("/api/Loan/contract");
}

// 获取还款渠道
export function fetchGetRepaymentChannelApi() {
  return http.post("/api/Repayment/getRepaymentChannel");
}
