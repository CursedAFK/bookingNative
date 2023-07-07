import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import fs from '../../../utils/fontNormalize'

export default function Bookings() {
  return (
    <>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Bookings',
          tabBarIcon: function ({ focused }) {
            return focused ? (
              <Ionicons name='notifications' size={fs(24)} color='#003580' />
            ) : (
              <Ionicons
                name='notifications-outline'
                size={fs(24)}
                color='black'
              />
            )
          }
        }}
      />

      <SafeAreaView>
        <View>
          <Text>Bookings</Text>
        </View>
      </SafeAreaView>
    </>
  )
}
