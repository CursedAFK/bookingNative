import { Stack, Tabs } from 'expo-router'

export default function HomeLayout() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Tabs>
        <Tabs.Screen name='index' />
        <Tabs.Screen name='saved/index' />
        <Tabs.Screen name='bookings/index' />
        <Tabs.Screen name='profile/index' />
      </Tabs>
    </>
  )
}
