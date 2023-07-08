import { FontAwesome5, Ionicons, Octicons } from '@expo/vector-icons'
import { Stack, useLocalSearchParams } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { DatePickerState } from '../(home)'
import PropertyCard from '../../components/PropertyCard'
import { Properties, places } from '../../database/places'
import fs from '../../utils/fontNormalize'

type ParamsProps = {
  rooms: number
  adults: number
  children: number
  selectedDate: DatePickerState
  place: string
}

export default function Places() {
  const params = useLocalSearchParams() as unknown as ParamsProps

  const selectedDate = JSON.parse(
    params.selectedDate as unknown as string
  ) as DatePickerState

  const filteredPlaces = places.filter(function (place) {
    return place.place.toLowerCase() === params.place.toLowerCase()
  })

  const allProperties = filteredPlaces.flatMap(function (place) {
    return place.properties
  })

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Popular Places',
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
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: fs(20),
            padding: fs(12),
            backgroundColor: 'white'
          }}
        >
          <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Octicons name='arrow-switch' size={fs(22)} color='gray' />
            <Text
              style={{ fontSize: fs(15), fontWeight: '500', marginLeft: fs(8) }}
            >
              Sort
            </Text>
          </Pressable>

          <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name='filter' size={fs(22)} color='gray' />
            <Text
              style={{ fontSize: fs(15), fontWeight: '500', marginLeft: fs(8) }}
            >
              Filter
            </Text>
          </Pressable>

          <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name='map-marker-alt' size={fs(22)} color='gray' />
            <Text
              style={{ fontSize: fs(15), fontWeight: '500', marginLeft: fs(8) }}
            >
              Map
            </Text>
          </Pressable>
        </Pressable>

        <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
          {allProperties.map(function (property) {
            return (
              <PropertyCard
                key={property.id}
                property={property as Properties}
                adults={params.adults}
                children={params.children}
                rooms={params.rooms}
                selectedDate={selectedDate}
              />
            )
          })}
        </ScrollView>
      </View>
    </>
  )
}
