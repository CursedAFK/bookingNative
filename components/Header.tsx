import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'
import fs from '../utils/fontNormalize'

export default function Header() {
  return (
    <View
      style={{
        backgroundColor: '#003580',
        height: fs(65),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}
    >
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: 'white',
          borderWidth: 1,
          borderRadius: 20,
          padding: fs(8)
        }}
      >
        <Ionicons name='bed-outline' size={fs(26)} color='white' />
        <Text
          style={{
            marginLeft: fs(8),
            fontWeight: 'bold',
            color: 'white',
            fontSize: fs(15)
          }}
        >
          Stays
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Ionicons name='ios-airplane-outline' size={fs(26)} color='white' />
        <Text
          style={{
            marginLeft: fs(8),
            fontWeight: 'bold',
            color: 'white',
            fontSize: fs(15)
          }}
        >
          Flights
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Ionicons name='car-outline' size={fs(26)} color='white' />
        <Text
          style={{
            marginLeft: fs(8),
            fontWeight: 'bold',
            color: 'white',
            fontSize: fs(15)
          }}
        >
          Car Rental
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <FontAwesome5 name='uber' size={fs(26)} color='white' />
        <Text
          style={{
            marginLeft: fs(8),
            fontWeight: 'bold',
            color: 'white',
            fontSize: fs(15)
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  )
}
