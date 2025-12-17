// 类型定义
type RequestConfig = UniApp.RequestOptions & {
  showLoading?: boolean;
};

type ResponseData<T = any> = {
  code: number;
  data: T;
  msg?: string;
  message?: string;
};

// 基础配置
const config = {
  baseUrl: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  header: {
    "Content-Type": "application/json",
    server: 1,
  },
};

// 统一错误处理
const handleError = (error: any) => {
  const msg = error?.msg || error?.message || "请求失败";
  uni.showToast({ title: msg, icon: "none" });
  return Promise.reject(error);
};

// 统一处理登录失效
const handleAuthError = () => {
  uni.removeStorageSync("h5-token");
  uni.navigateTo({ url: "/pages/login/login" });
};

// 请求拦截器
const requestInterceptor = (options: RequestConfig) => {
  const token = uni.getStorageSync("h5-token");
  return {
    ...options,
    url: `${config.baseUrl}${options.url}`,
    header: {
      ...config.header,
      ...options.header,
      ...(token ? { "Ba-User-Token": token } : {}),
    },
    timeout: config.timeout,
  };
};

// 响应拦截器
const responseInterceptor = (response: {
  statusCode: number;
  data: ResponseData;
}) => {
  const { statusCode, data } = response;

  // 处理业务错误
  if (data.code !== 1) {
    if (data.code === 303) {
      handleAuthError();
    }
    return handleError(data);
  }

  // 处理 HTTP 错误
  if (statusCode < 200 || statusCode >= 300) {
    return handleError({ message: "网络请求异常" });
  }

  return data;
};

// 请求函数
const request = <T = any>(options: RequestConfig): Promise<ResponseData<T>> => {
  const mergedOptions = requestInterceptor(options);
  const showLoading = options.showLoading ?? true;

  showLoading && uni.showLoading({ title: "加载中...", mask: true });

  return new Promise((resolve, reject) => {
    uni.request({
      ...mergedOptions,
      success: (response: any) => {
        showLoading && uni.hideLoading();
        try {
          resolve(responseInterceptor(response));
        } catch (error) {
          reject(error);
        }
      },
      fail: (error) => {
        showLoading && uni.hideLoading();
        handleError(error);
      },
    });
  });
};

// HTTP 方法封装
export const http = {
  request,
  get: <T = any>(url: string, data?: any, config?: Partial<RequestConfig>) =>
    request<T>({ url, method: "GET", data, ...config }),
  post: <T = any>(url: string, data?: any, config?: Partial<RequestConfig>) =>
    request<T>({ url, method: "POST", data, ...config }),
  put: <T = any>(url: string, data?: any, config?: Partial<RequestConfig>) =>
    request<T>({ url, method: "PUT", data, ...config }),
  delete: <T = any>(url: string, data?: any, config?: Partial<RequestConfig>) =>
    request<T>({ url, method: "DELETE", data, ...config }),
};

export default http;
