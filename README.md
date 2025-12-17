# loan-h5-master

基于 UniApp 框架开发的 H5 端贷款类移动端应用，主要用于用户贷款管理、还款操作、个人中心等功能。

## 项目结构

```
.
├── src
│   ├── apis          # 接口封装
│   ├── components    # 公共组件
│   ├── pages         # 页面文件
│   ├── styles        # 样式文件
│   ├── utils         # 工具函数
│   ├── App.vue       # 根组件
│   ├── main.ts       # 入口文件
│   └── pages.json    # 页面路由配置
├── docs              # 项目文档
└── package.json      # 依赖配置
```

## 开发环境

- Node.js >= 14.18
- pnpm 或 npm
- 推荐使用 VSCode + Volar 插件

## 安装依赖

```bash
npm install
# 或
pnpm install
```

## 运行项目

```bash
# 开发模式（H5）
npm run dev:h5

# 生产构建（H5）
npm run build:h5
```

## Commit 规范

本项目使用 commitlint 规范 commit message，具体请参考 [commit 规范说明](./docs/commit-guideline.md)

简单的说，commit message 应该遵循以下格式：

```
<type>(<scope>): <subject>
```

例如：

```
feat(pages): 添加还款详情页面
fix(api): 修复获取用户信息接口调用失败问题
docs(readme): 更新项目说明文档
```