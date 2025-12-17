import http from "@/utils/request";

// 获取系统基础配置
export function fetchGetSiteInfoApi() {
  return http.post("/api/Config/siteInfo");
}

// 获取贷款情况
export function fetchGetLoanDetailApi() {
  return http.post("/api/Loan/detail");
}

// 获取贷款数据-轮播
export function fetchGetLoanBannerApi() {
  return http.post("/api/Loan/showList");
}

// 获取结清证明列表
export function fetchGetSettledListApi() {
  return http.post("/api/Loan/settledList");
}

// 获取结清证明详情
export function fetchGetSettledDetailApi(data: any) {
  return http.post("/api/Loan/settledDetail", data);
}
