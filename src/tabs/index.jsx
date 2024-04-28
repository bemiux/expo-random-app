import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/Home'
import UserScreen from '../screens/User'
import SettingsScreen from '../screens/Settings'

import TabBar from '../components/tab-bar'
const Tab = createBottomTabNavigator()

export default function NavigationTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='User' component={UserScreen} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}
