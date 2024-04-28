import { View } from 'react-native'
import { User, Settings, Compass } from 'lucide-react-native'

export default function NavigationIcon({ route, iconSize, isFocused }) {
  let Icon

  if (route == 'Home') {
    Icon = (
      <Compass
        strokeWidth={2.5}
        size={iconSize || 28}
        className={!isFocused && 'text-slate-400'}
      />
    )
  } else if (route == 'User') {
    Icon = (
      <User
        strokeWidth={2.5}
        size={iconSize || 28}
        className={!isFocused && 'text-slate-400'}
      />
    )
  } else if (route == 'Settings') {
    Icon = (
      <Settings
        strokeWidth={2.5}
        size={iconSize || 28}
        className={!isFocused && 'text-slate-400'}
      />
    )
  }

  return <View>{Icon}</View>
}
