import { View, Text } from 'react-native'

export default function Header({ name }) {
  return (
    <>
      <View className='bg-zinc-800 h-[90px] px-4 flex justify-center items-center pt-10'>
        <View className='flex'>
          <Text className='text-zinc-100 text-lg'>{name}</Text>
        </View>
      </View>
    </>
  )
}
