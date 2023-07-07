import { Feather } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchResults from '../../components/SearchResults'
import { places } from '../../database/places'
import fs from '../../utils/fontNormalize'

export default function Search() {
  const [input, setInput] = useState('')

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <StatusBar style='auto' />

      <SafeAreaView>
        <View
          style={{
            padding: fs(10),
            margin: fs(10),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderColor: '#ffc72c',
            borderWidth: fs(4),
            borderRadius: fs(10)
          }}
        >
          <TextInput
            placeholder='Enter your destination'
            inputMode='search'
            value={input}
            onChangeText={function (text) {
              setInput(text)
            }}
          />

          <Feather name='search' size={fs(22)} color='black' />
        </View>

        <SearchResults data={places} input={input} setInput={setInput} />
      </SafeAreaView>
    </>
  )
}
