const presets = ['module:babel-preset-expo']
const plugins = []

plugins.push(
  [
    'module-resolver',
    {
      root: ['./'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './app/*',
        '@ui': './ui/',
        '@context': './context/',
        '@hooks': './hooks/',
        '@config': './config/',
        '@services': './services/',
        '@store': './store/',
        '@utils': './utils/',
      },
    },
  ],
  'react-native-reanimated/plugin'
)

plugins.push(require.resolve('expo-router/babel'))

presets.push('nativewind/babel')

module.exports = api => {
  api.cache(true)
  return {
    presets,
    plugins,
  }
}
