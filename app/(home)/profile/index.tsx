import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import fs from '../../../utils/fontNormalize'

export default function Profile() {
  return (
    <>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: function ({ focused }) {
            return focused ? (
              <Ionicons name='person' size={fs(24)} color='#003580' />
            ) : (
              <Ionicons name='person-outline' size={fs(24)} color='black' />
            )
          }
        }}
      />

      <SafeAreaView>
        <View>
          <Text>Profile</Text>
        </View>
      </SafeAreaView>
    </>
  )
}
