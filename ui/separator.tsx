import React from 'react'
import { View } from 'react-native'

interface Props {}

const Separator: React.FC<Props> = ({}) => {
  return <View className="w-screen my-2 h-0.5 bg-slate-600 dark:bg-slate-50" />
}

Separator.defaultProps = {}

export default Separator
