import { Stack, useLocalSearchParams } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { DatePickerState } from '../../../(home)'
import { places } from '../../../../database/places'
import fs from '../../../../utils/fontNormalize'

interface Params {
  name: string
  adults: number
  children: number
  rooms: number
  selectedDate: DatePickerState
}

const PropertyDetails = () => {
  const params = useLocalSearchParams() as unknown as Params

  const selectedDate = JSON.parse(
    params.selectedDate as unknown as string
  ) as DatePickerState

  const property = places
    .flatMap(place => place.properties)
    .find(place => place.name === params.name)

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: params.name,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: fs(20),
            fontWeight: 'bold',
            color: 'white'
          },
          headerStyle: {
            backgroundColor: '#003580'
          }
        }}
      />

      <StatusBar style='light' />

      <View>
        <Text>PropertyDetails</Text>
      </View>
    </>
  )
}

export default PropertyDetails
