import { cn } from '../utils'
import { Platform } from 'react-native'
import NavigationIcon from './navigation/icon'
import { View, TouchableOpacity } from 'react-native'

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      className={cn(
        'rounded-t-[35px] bg-[#111113] border-1 border-border',
        'absolute flex flex-row space-x-5 items-center justify-center w-full',
        Platform.OS !== 'android' ? 'bottom-0 pb-6 pt-3' : 'bottom-0 py-6'
      )}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return (
          <View
            key={index}
            className='flex flex-row items-center justify-center w-max py-2'
          >
            <TouchableOpacity
              onPress={onPress}
              className={cn(
                'rounded-2xl',
                isFocused ? 'bg-blue-900' : 'bg-slate-800/50'
              )}
            >
              <View className='flex flex-1 items-center justify-center p-3.5'>
                <NavigationIcon route={label} isFocused={isFocused} />
              </View>
            </TouchableOpacity>
          </View>
        )
      })}
    </View>
  )
}

export default TabBar
