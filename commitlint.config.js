module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 范围枚举类型
    'scope-enum': [2, 'always', [
      'api',
      'components',
      'pages',
      'utils',
      'styles',
      'assets',
      'config',
      'docs',
      'build'
    ]],
    // 主题长度
    'header-max-length': [2, 'always', 100],
    // 主题不能为空
    'subject-empty': [2, 'never'],
    // 主题必须以英文句号结尾
    'subject-full-stop': [2, 'never', '.'],
    // 主题必须以小写开头
    'subject-case': [2, 'always', 'lower-case']
  }
};