import { Stack, useLocalSearchParams } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect, useRef } from 'react'
import { Pressable, Text } from 'react-native'
import Map, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Properties, places } from '../../database/places'
import fs from '../../utils/fontNormalize'

interface Params {
  place: string
}

const MapView = () => {
  const params = useLocalSearchParams() as unknown as Params

  const map = useRef<Map>(null)

  const properties = places
    .filter(place => place.place === params.place)
    .flatMap(place => place.properties) as Properties[]

  const coordinates = properties.map(property => ({
    latitude: +property.latitude,
    longitude: +property.longitude
  }))

  useEffect(() => {
    map.current?.fitToCoordinates(coordinates, {
      edgePadding: {
        top: fs(190),
        left: fs(190),
        bottom: fs(190),
        right: fs(190)
      }
    })
  }, [])

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <StatusBar style='auto' />

      <SafeAreaView>
        <Map ref={map} style={{ width: '100%', height: '100%' }}>
          {properties.map(property => (
            <Marker
              title={property.name}
              coordinate={{
                latitude: +property.latitude,
                longitude: +property.longitude
              }}
            >
              <Pressable
                style={{
                  backgroundColor: '#003580',
                  paddingHorizontal: fs(7),
                  paddingVertical: fs(4),
                  borderRadius: fs(4)
                }}
              >
                <Text
                  style={{
                    fontSize: fs(16),
                    color: '#fff',
                    textAlign: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  {property.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))}
        </Map>
      </SafeAreaView>
    </>
  )
}

export default MapView
