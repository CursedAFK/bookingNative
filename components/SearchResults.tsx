import { useRouter } from 'expo-router'
import { FlatList, Image, Pressable, Text, View } from 'react-native'
import type { Places } from '../database/places'
import fs from '../utils/fontNormalize'

type SearchResultsProps = {
  data: Places
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchResults({
  data,
  input,
  setInput
}: SearchResultsProps) {
  const router = useRouter()

  return (
    <View style={{ padding: fs(10) }}>
      <FlatList
        data={data}
        keyExtractor={function (item) {
          return item.id
        }}
        renderItem={function ({ item }) {
          if (
            !input ||
            !item.place.toLowerCase().includes(input.toLowerCase())
          ) {
            return null
          }

          return (
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: fs(10)
              }}
              onPress={function () {
                setInput(item.place)
                router.push({ pathname: '/', params: { input: item.place } })
              }}
            >
              <View>
                <Image
                  source={{ uri: item.placeImage }}
                  style={{ width: fs(70), height: fs(70) }}
                />
              </View>

              <View style={{ marginLeft: fs(10) }}>
                <Text style={{ fontSize: fs(15), fontWeight: '500' }}>
                  {item.place}
                </Text>

                <Text style={{ marginVertical: fs(4) }}>
                  {item.shortDescription}
                </Text>

                <Text style={{ color: '#999', fontSize: fs(15) }}>
                  {item.properties.length} Properties
                </Text>
              </View>
            </Pressable>
          )
        }}
      />
    </View>
  )
}
