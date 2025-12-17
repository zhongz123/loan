import http from "@/utils/request";

// 获取短信验证码
export function fetchGetCodeApi(data: any) {
  return http.post("/api/User/getCode", data);
}

// 手机号登录
export function fetchMobileLoginApi(data: any) {
  return http.post("/api/User/mobileLogin", data);
}
