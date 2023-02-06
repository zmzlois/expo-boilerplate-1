import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setDefaultTheme } from '@store/theme'
import Brand from '@components/brand'

const StartupContainer = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000),
    )
    dispatch(setDefaultTheme({ theme: 'light', darkMode: null }))
    // navigateAndSimpleReset("Main");
  }

  useEffect(() => {
    init()
  })

  return (
    <View className="flex-1 justify-center items-center">
      <Brand />
      <ActivityIndicator size={'large'} className="my-8" />
      <Text className="text-base text-center">{t('welcome')}</Text>
    </View>
  )
}

export default StartupContainer
