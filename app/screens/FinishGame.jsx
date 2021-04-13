import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, Image, View, ImageBackground, Button } from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';

export default function FinishGame({ navigation, route }) {
  let [scale, setScale] = useState(1);
  const { username } = route.params;

  function onZoom(event) {
    setScale(event.nativeEvent.scale)
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
        <Text style={{ backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto' }}>Thank you {username}, have a nice day!!</Text>
        <Text style={{ backgroundColor: 'black', color: 'white', marginLeft: 'auto', marginRight: 'auto', marginBottom: 10 }}>Please zoom in this picture</Text>
        <PinchGestureHandler onGestureEvent={onZoom}>
          <Image
            source={{ uri: 'https://miro.medium.com/max/3760/1*OEnS6-DEn56szCwdOs2mrA.jpeg' }}
            style={[
              {
                width: 250,
                height: 250,
                marginBottom: 10
              },
              {
                transform: [{
                  scale
                }]
              }
            ]}
          />
        </PinchGestureHandler>
        <Button title='Back to Home' onPress={() => navigation.replace('Welcome to The Sugoku Game')}></Button>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});