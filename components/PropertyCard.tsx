import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Dimensions, Image, Pressable, Text, View } from 'react-native'
import { DatePickerState } from '../app/(home)'
import { Properties } from '../database/places'
import fs from '../utils/fontNormalize'

type PropertyCardProps = {
  property: Properties
  rooms: number
  adults: number
  children: number
  selectedDate: DatePickerState
}

export default function PropertyCard({
  property,
  adults,
  children,
  rooms,
  selectedDate
}: PropertyCardProps) {
  const { width, height } = Dimensions.get('window')

  return (
    <View>
      <Pressable
        style={{
          margin: fs(15),
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center'
        }}
      >
        <View>
          <Image
            source={{ uri: property.image }}
            style={{ height: height / fs(4 * 0.8), width: width - fs(280) }}
          />
        </View>

        <View style={{ padding: fs(10) }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ width: fs(200) }}>{property.name}</Text>
            <AntDesign name='hearto' size={fs(24)} color='red' />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: fs(6),
              marginTop: fs(7)
            }}
          >
            <MaterialIcons name='stars' size={fs(24)} color='black' />
            <Text>{property.rating}</Text>

            <View
              style={{
                backgroundColor: '#6cb4ee',
                paddingVertical: fs(3),
                borderRadius: fs(5),
                width: fs(110)
              }}
            >
              <Text style={{ color: 'white', textAlign: 'center' }}>
                Genius Level
              </Text>
            </View>
          </View>

          <Text
            style={{
              width: fs(240),
              marginTop: fs(6),
              color: 'gray',
              fontWeight: 'bold'
            }}
          >
            {property.address.length > fs(30)
              ? property.address.slice(0, fs(30))
              : property.address}
          </Text>

          <Text
            style={{ marginTop: fs(4), fontSize: fs(15), fontWeight: '500' }}
          >
            Price for 1 Night and {adults} adults
          </Text>

          <View
            style={{
              marginTop: fs(5),
              flexDirection: 'row',
              alignItems: 'center',
              gap: fs(8)
            }}
          >
            <Text
              style={{
                fontSize: fs(18),
                color: 'red',
                textDecorationLine: 'line-through'
              }}
            >
              {property.oldPrice * adults}
            </Text>

            <Text
              style={{
                fontSize: fs(18),
                color: 'black'
              }}
            >
              Rs {property.newPrice * adults}
            </Text>
          </View>

          <View style={{ marginTop: fs(6) }}>
            <Text style={{ fontSize: fs(16), color: 'gray' }}>Deluxe Room</Text>

            <Text style={{ fontSize: fs(16), color: 'gray' }}>
              Hotel Room : 1 bed
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#6082b6',
              paddingVertical: fs(3),
              borderRadius: fs(5),
              marginTop: fs(4),
              width: fs(160),
              paddingHorizontal: fs(4)
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>
              Limited Time deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}
