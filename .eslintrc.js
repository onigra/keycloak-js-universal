module.exports = {
  plugins: ['prettier', 'import', 'babel', 'flowtype'],
  extends: ['prettier', 'airbnb-base'],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    semi: ['error', 'never']
  }
}
