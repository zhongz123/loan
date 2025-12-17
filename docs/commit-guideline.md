# Git Commit 规范

## Commit Message 格式

```
<type>(<scope>): <subject>
```

### Type (必须)

用于说明 commit 的类别，只允许使用下面几个标识：

- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style：格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- perf：性能优化
- test：增加测试
- chore：构建过程或辅助工具的变动
- revert：回滚到上一个版本

### Scope (可选)

用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

对于本项目，允许的范围有：

- api: 接口相关
- components: 组件相关
- pages: 页面相关
- utils: 工具类相关
- styles: 样式相关
- assets: 静态资源相关
- config: 配置相关
- docs: 文档相关
- build: 构建相关

### Subject (必须)

用于简短描述本次 commit 的内容，不超过100个字符。

## 示例

```
feat(pages): 添加还款详情页面

- 创建 repayment-detail.vue 页面
- 实现还款记录列表展示功能
```

```
fix(api): 修复获取用户信息接口调用失败问题

- 修改 request.ts 拦截器逻辑
- 增加 token 刷新机制
```

```
docs(readme): 更新项目说明文档

- 补充开发环境搭建步骤
- 添加部署流程说明
```