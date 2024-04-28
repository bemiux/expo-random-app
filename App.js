import './src/localization/i18n'
import NavigationTabs from './src/tabs'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  )
}
