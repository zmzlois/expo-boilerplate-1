// Example metro.config.js for an Expo project
// Expo is not required, you just need to wrap your config using withNativewind
const { getDefaultConfig } = require('expo/metro-config')
const withNativewind = require('nativewind/metro')

module.exports = withNativewind(getDefaultConfig(__dirname))
