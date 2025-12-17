import http from "@/utils/request";

// 用户退出登录
export function fetchLogoutApi() {
  return http.post("/api/User/logout");
}

// 获取用户信息
export function fetchUserInfoApi() {
  return http.get("/api/Account/info");
}