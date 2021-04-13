import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(false);
  let [username, setUsername] = useState('Mythic');

  function toBoard(level) {
    let payload = { difficulty: '', username };
    setLoading(true);
    if (username.length == 0) {
      payload = { difficulty: level, username: 'Mythic' };
    } else {
      payload = { difficulty: level, username };
    }
    navigation.navigate('Board', payload);
    setLoading(false);
  }

  return (
    <ImageBackground
      source={{ uri: 'https://image.winudf.com/v2/image1/Y29tLmJyYWluLnNxdWFyZS5wdXp6bGUuc3Vkb2t1X3NjcmVlbl81XzE1ODE1MDkwOTJfMDg3/screen-5.jpg?fakeurl=1&type=.jpg' }}
      style={
        {
          flex: 1,
          resizeMode: 'cover',
          width: null,
        }
      }
    >
      <View style={styles.container}>
        {loading ? <Text>Loading ...</Text> :
          <>
            <Text style={styles.label}>
              Username
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="e.g. Example Name"
              keyboardType="default"
              maxLength={12}
            />
            <Text style={styles.label}>
              Difficulty Option
            </Text>
            <View style={styles.btn}>
              <Button title='Easy' onPress={() => toBoard('easy')} />
              <Button title='Medium' onPress={() => toBoard('medium')} />
              <Button title='hard' onPress={() => toBoard('hard')} />
            </View>
          </>
        }
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    color: 'white',
    backgroundColor: 'black',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 10
  },
  label: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    color: '#407294',
  },
  btn: {
    marginTop: 10
  }
})