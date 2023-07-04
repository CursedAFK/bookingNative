import { AntDesign, Entypo, Feather, Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import DatePicker from 'react-native-date-ranges'
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation
} from 'react-native-modals'
import Header from '../components/Header'
import fs from '../utils/fontNormalize'

type DatePickerState = {
  startDate: string
  endDate: string
}

export default function Home() {
  const [setselectedDate, setSetselectedDate] = useState<DatePickerState>({
    startDate: '',
    endDate: ''
  })
  const [rooms, setRooms] = useState(1)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  function customButton(onConfirm: VoidFunction) {
    return (
      <Pressable
        onPress={onConfirm}
        style={{ width: '80%', marginHorizontal: '3%' }}
      >
        <Text
          style={{ fontSize: fs(20), textAlign: 'center', color: '#003580' }}
        >
          Submit
        </Text>
      </Pressable>
    )
  }

  return (
    <>
      <StatusBar style='light' />

      <Tabs.Screen
        options={{
          headerShown: true,
          headerTitle: 'Booking.com',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: fs(20),
            fontWeight: 'bold',
            color: 'white'
          },
          headerStyle: {
            backgroundColor: '#003580',
            borderBottomColor: 'transparent',
            shadowColor: 'transparent'
          },
          headerRight: function () {
            return (
              <Ionicons
                name='notifications-outline'
                size={fs(24)}
                color='white'
                style={{ marginRight: fs(12) }}
              />
            )
          },
          title: 'Home',
          tabBarIcon: function ({ focused }) {
            return focused ? (
              <Entypo name='home' size={fs(24)} color='#003580' />
            ) : (
              <AntDesign name='home' size={fs(24)} color='black' />
            )
          }
        }}
      />

      <View>
        <Header />

        <ScrollView>
          <View
            style={{
              margin: fs(20),
              borderColor: '#ffc72c',
              borderWidth: fs(3),
              borderRadius: 6
            }}
          >
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: fs(10),
                paddingHorizontal: fs(10),
                borderColor: '#ffc72c',
                borderWidth: fs(2),
                paddingVertical: fs(15)
              }}
            >
              <Feather name='search' size={fs(24)} color='black' />
              <TextInput
                placeholder='Enter your destination'
                placeholderTextColor='black'
              />
            </Pressable>

            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: fs(10),
                paddingHorizontal: fs(10),
                borderColor: '#ffc72c',
                borderWidth: fs(2),
                paddingVertical: fs(15)
              }}
            >
              <Feather name='calendar' size={fs(24)} color='black' />
              <DatePicker
                style={{
                  width: fs(350),
                  height: fs(30),
                  borderRadius: 0,
                  borderWidth: 0,
                  borderColor: 'transparent'
                }}
                customStyles={{
                  placeholderText: {
                    fontSize: fs(15),
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 'auto'
                  },
                  headerStyle: {
                    backgroundColor: '#003580'
                  },
                  contentText: {
                    fontSize: fs(15),
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 'auto'
                  }
                }}
                selectedBgColor='#0047ab'
                customButton={function (onConfirm: VoidFunction) {
                  return customButton(onConfirm)
                }}
                onConfirm={function ({ startDate, endDate }: DatePickerState) {
                  setSetselectedDate({ startDate, endDate })
                }}
                allowFontScaling={false}
                placeholder={'Apr 27, 2018 → Jul 10, 2018'}
                mode={'range'}
              />
            </Pressable>

            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: fs(10),
                paddingHorizontal: fs(10),
                borderColor: '#ffc72c',
                borderWidth: fs(2),
                paddingVertical: fs(15)
              }}
              onPress={function () {
                setModalVisible(!modalVisible)
              }}
            >
              <Ionicons name='person-outline' size={fs(24)} color='black' />
              <TextInput
                placeholder='1 room * 2 adults * 0 children'
                placeholderTextColor='red'
              />
            </Pressable>

            <Pressable
              style={{
                paddingHorizontal: fs(10),
                borderColor: '#ffc72c',
                borderWidth: fs(2),
                paddingVertical: fs(15),
                backgroundColor: '#2a52be'
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: fs(15),
                  fontWeight: '500',
                  color: 'white'
                }}
              >
                Search
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>

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
            <ModalButton
              text='Apply'
              style={{ marginBottom: fs(20), backgroundColor: '#003580' }}
              textStyle={{ color: 'white' }}
              onPress={function () {
                setModalVisible(!modalVisible)
              }}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title='Select rooms and guests' />}
        modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
        onTouchOutside={function () {
          setModalVisible(!modalVisible)
        }}
      >
        <ModalContent style={{ width: '100%', height: fs(310) }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: fs(15)
            }}
          >
            <Text style={{ fontSize: fs(16), fontWeight: '500' }}>Rooms</Text>

            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: fs(10)
              }}
            >
              <Pressable
                style={{
                  width: fs(30),
                  height: fs(30),
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0'
                }}
                onPress={function () {
                  if (rooms > 0) {
                    setRooms(function (prev) {
                      return prev - 1
                    })
                  }
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: fs(16),
                    fontWeight: '600',
                    paddingHorizontal: fs(6)
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: fs(14),
                    fontWeight: '500',
                    paddingHorizontal: fs(6)
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
                style={{
                  width: fs(30),
                  height: fs(30),
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0'
                }}
                onPress={function () {
                  setRooms(function (prev) {
                    return prev + 1
                  })
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: fs(16),
                    fontWeight: '600',
                    paddingHorizontal: fs(6)
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: fs(15)
            }}
          >
            <Text style={{ fontSize: fs(16), fontWeight: '500' }}>Adults</Text>

            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: fs(10)
              }}
            >
              <Pressable
                style={{
                  width: fs(30),
                  height: fs(30),
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0'
                }}
                onPress={function () {
                  if (adults > 0) {
                    setAdults(function (prev) {
                      return prev - 1
                    })
                  }
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: fs(16),
                    fontWeight: '600',
                    paddingHorizontal: fs(6)
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: fs(14),
                    fontWeight: '500',
                    paddingHorizontal: fs(6)
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                style={{
                  width: fs(30),
                  height: fs(30),
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0'
                }}
                onPress={function () {
                  setAdults(function (prev) {
                    return prev + 1
                  })
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: fs(16),
                    fontWeight: '600',
                    paddingHorizontal: fs(6)
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: fs(15)
            }}
          >
            <Text style={{ fontSize: fs(16), fontWeight: '500' }}>
              Children
            </Text>

            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: fs(10)
              }}
            >
              <Pressable
                style={{
                  width: fs(30),
                  height: fs(30),
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0'
                }}
                onPress={function () {
                  if (children > 0) {
                    setChildren(function (prev) {
                      return prev - 1
                    })
                  }
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: fs(16),
                    fontWeight: '600',
                    paddingHorizontal: fs(6)
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: fs(14),
                    fontWeight: '500',
                    paddingHorizontal: fs(6)
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                style={{
                  width: fs(30),
                  height: fs(30),
                  borderRadius: 13,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0'
                }}
                onPress={function () {
                  setChildren(function (prev) {
                    return prev + 1
                  })
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: fs(16),
                    fontWeight: '600',
                    paddingHorizontal: fs(6)
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  )
}
