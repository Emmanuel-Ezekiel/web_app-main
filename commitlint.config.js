module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 140],
    'scope-empty': [2, 'never'],
    'scope-case': [2, 'always', 'upper-case']
  }
}
