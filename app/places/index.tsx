import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Octicons
} from '@expo/vector-icons'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation
} from 'react-native-modals'
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
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState({
    id: '0',
    filter: 'cost: Low to High'
  })
  const [sortedProperties, setSortedProperties] = useState<Properties[]>([])

  const params = useLocalSearchParams() as unknown as ParamsProps

  const router = useRouter()

  const selectedDate = JSON.parse(
    params.selectedDate as unknown as string
  ) as DatePickerState

  const filteredPlaces = places.filter(function (place) {
    return place.place.toLowerCase() === params.place.toLowerCase()
  })

  const allProperties = filteredPlaces.flatMap(function (place) {
    return place.properties
  })

  const filters = [
    { id: '0', filter: 'cost: Low to High' },
    { id: '1', filter: 'cost: High to Low' }
  ]

  const applyFilter = (filter: typeof selectedFilter) => {
    setModalVisible(false)

    switch (filter.id) {
      case '0':
        setSortedProperties(
          allProperties.sort((a, b) => a.newPrice - b.newPrice) as Properties[]
        )
        break
      case '1':
        setSortedProperties(
          allProperties.sort((a, b) => b.newPrice - a.newPrice) as Properties[]
        )
        break
    }
  }

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
          <Pressable
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={function () {
              setModalVisible(!modalVisible)
            }}
          >
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

          <Pressable
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() =>
              router.push({
                pathname: '/map-view',
                params: { place: params.place }
              })
            }
          >
            <FontAwesome5 name='map-marker-alt' size={fs(22)} color='gray' />
            <Text
              style={{ fontSize: fs(15), fontWeight: '500', marginLeft: fs(8) }}
            >
              Map
            </Text>
          </Pressable>
        </Pressable>

        <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
          {(sortedProperties.length === 0
            ? allProperties
            : sortedProperties
          ).map(function (property) {
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

        <BottomModal
          visible={modalVisible}
          swipeThreshold={200}
          onHardwareBackPress={function () {
            setModalVisible(!modalVisible)
            return true
          }}
          swipeDirection={['up', 'down']}
          footer={
            <ModalFooter>
              <Pressable
                style={{
                  paddingRight: fs(10),
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  marginVertical: fs(10),
                  marginBottom: fs(20)
                }}
                onPress={() => applyFilter(selectedFilter)}
              >
                <Text>Apply</Text>
              </Pressable>
            </ModalFooter>
          }
          modalTitle={<ModalTitle title='Sort and Filter' />}
          modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
          onTouchOutside={function () {
            setModalVisible(!modalVisible)
          }}
        >
          <ModalContent style={{ width: '100%', height: fs(280) }}>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  marginVertical: fs(10),
                  flex: 2,
                  height: fs(280),
                  borderRightWidth: 1,
                  borderColor: '#e0e0e0'
                }}
              >
                <Text style={{ textAlign: 'center' }}>Sort</Text>
              </View>

              <View style={{ flex: 3, margin: fs(10) }}>
                {filters.map(function (filter) {
                  return (
                    <Pressable
                      key={filter.id}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: fs(10)
                      }}
                      onPress={() => setSelectedFilter(filter)}
                    >
                      {filter.id === selectedFilter.id ? (
                        <FontAwesome
                          name='circle'
                          size={fs(18)}
                          color='green'
                        />
                      ) : (
                        <Entypo name='circle' size={fs(18)} color='black' />
                      )}

                      <Text
                        style={{
                          fontSize: fs(16),
                          fontWeight: '500',
                          marginLeft: fs(6)
                        }}
                      >
                        {filter.filter}
                      </Text>
                    </Pressable>
                  )
                })}
              </View>
            </View>
          </ModalContent>
        </BottomModal>
      </View>
    </>
  )
}
