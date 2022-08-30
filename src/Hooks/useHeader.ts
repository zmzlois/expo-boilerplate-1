import { StyleProp, ViewStyle } from 'react-native'
import useTheme from './useTheme'

export default function () {
  const { Colors } = useTheme()
  const headerStyle: StyleProp<ViewStyle> = {
    height: 0,
    backgroundColor: Colors.background,
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  }

  const bottomSheetHeaderStyle: StyleProp<ViewStyle> = {
    backgroundColor: Colors.background,
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  }
  return {
    headerStyle,
    bottomSheetHeaderStyle,
  }
}
