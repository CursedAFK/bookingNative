import { Stack } from 'expo-router'
import { ModalPortal } from 'react-native-modals'

export default function RootLayout() {
  return (
    <>
      <Stack />

      <ModalPortal />
    </>
  )
}
