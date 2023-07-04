import { Tabs } from 'expo-router'
import { ModalPortal } from 'react-native-modals'

export default function RootLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen name='index' />
        <Tabs.Screen name='saved/index' />
        <Tabs.Screen name='bookings/index' />
        <Tabs.Screen name='profile/index' />
      </Tabs>

      <ModalPortal />
    </>
  )
}
