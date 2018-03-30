module.exports = {
  plugins: ['prettier', 'import', 'babel'],
  extends: ['prettier', 'airbnb-base'],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    semi: ['error', 'never']
  }
}
