import Header from '../components/header'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

export default function UserScreen({ navigation }) {
  const { t } = useTranslation()

  return (
    <>
      <Header name={t('headers:page.user')} />
      <View className='flex flex-1 items-center justify-center pt-5 px-3 bg-zinc-900'>
        <Text className='text-lg text-gray-100'>User Screen</Text>
      </View>
    </>
  )
}
