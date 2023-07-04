import { AntDesign } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import fs from '../../utils/fontNormalize'

export default function Saved() {
  return (
    <>
      <Tabs.Screen
        options={{
          headerShown: false,
          title: 'Saved',
          tabBarIcon: function ({ focused }) {
            return focused ? (
              <AntDesign name='heart' size={fs(24)} color='#003580' />
            ) : (
              <AntDesign name='hearto' size={fs(24)} color='black' />
            )
          }
        }}
      />

      <SafeAreaView>
        <View>
          <Text>Saved</Text>
        </View>
      </SafeAreaView>
    </>
  )
}
