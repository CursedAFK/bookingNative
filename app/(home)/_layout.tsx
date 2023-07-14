import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { Stack, Tabs } from 'expo-router'
import fs from '../../utils/fontNormalize'

export default function HomeLayout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Tabs>
        <Tabs.Screen
          name='index'
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name='home' size={fs(24)} color='#003580' />
              ) : (
                <AntDesign name='home' size={fs(24)} color='black' />
              )
          }}
        />

        <Tabs.Screen
          name='saved/index'
          options={{
            headerShown: false,
            title: 'Saved',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name='heart' size={fs(24)} color='#003580' />
              ) : (
                <AntDesign name='hearto' size={fs(24)} color='black' />
              )
          }}
        />

        <Tabs.Screen
          name='bookings/index'
          options={{
            headerShown: false,
            title: 'Bookings',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name='notifications' size={fs(24)} color='#003580' />
              ) : (
                <Ionicons
                  name='notifications-outline'
                  size={fs(24)}
                  color='black'
                />
              )
          }}
        />

        <Tabs.Screen
          name='profile/index'
          options={{
            headerShown: false,
            title: 'Profile',
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name='person' size={fs(24)} color='#003580' />
              ) : (
                <Ionicons name='person-outline' size={fs(24)} color='black' />
              )
          }}
        />
      </Tabs>
    </>
  )
}
