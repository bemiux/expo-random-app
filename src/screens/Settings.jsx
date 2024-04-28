import i18next from 'i18next'
import { useState } from 'react'
import { View } from 'react-native'
import Header from '../components/header'
import { useTranslation } from 'react-i18next'
import Dropdown from 'react-native-input-select'
import { languages } from '../localization/i18n'

export default function SettingsScreen({ navigation }) {
  const { t, i18n } = useTranslation('settings')
  const { t: tHeader } = useTranslation('headers')
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  const languagesArr = languages.map((lang) => {
    return {
      label: t(`lang_${lang.value}`),
      value: lang.value,
    }
  })

  return (
    <>
      <Header name={tHeader('page.settings')} />
      <View className='flex flex-1 items-center justify- pt-5 px-3 bg-zinc-900'>
        <Dropdown
          options={languagesArr}
          label={t('lang_select')}
          placeholder='Select a language...'
          selectedValue={selectedLanguage || i18n.language || 'en'}
          primaryColor={'blue'}
          onValueChange={(value) => {
            setSelectedLanguage(value)
            i18next.changeLanguage(value)
          }}
          listComponentStyles={{
            itemSeparatorStyle: {
              opacity: 0,
              borderWidth: 2,
              borderColor: 'white',
              backgroundColor: 'none',
            },
          }}
          placeholderStyle={{
            color: 'blue',
            fontSize: 15,
            fontWeight: '500',
          }}
          labelStyle={{ color: 'white', fontSize: 16, fontWeight: '500' }}
          dropdownHelperTextStyle={{
            color: 'green',
            fontWeight: '900',
          }}
          dropdownStyle={{
            backgroundColor: '#1C1C30',
            paddingVertical: 5,
            paddingHorizontal: 15,
            minHeight: 40,
            // borderColor: 'green',
          }}
          modalControls={{
            modalOptionsContainerStyle: {
              padding: 10,
              backgroundColor: '#1C1C20',
            },
            // modalBackgroundStyle: {
            //   backgroundColor: 'rgba(196, 198, 246, 0.5)',
            // },
          }}
          checkboxControls={{
            checkboxSize: 15,
            checkboxStyle: {
              backgroundColor: 'blue',
              borderRadius: 8, // To get a circle - add the checkboxSize and the padding size
              padding: 4,
              borderColor: 'black',
            },
            checkboxLabelStyle: { color: 'white', fontSize: 20 },
            // checkboxComponent: <View style={styles.radioButton} />,
          }}
          selectedItemStyle={{
            fontSize: 18,
            color: 'white',
            fontWeight: '600',
          }}
        />
      </View>
    </>
  )
}
