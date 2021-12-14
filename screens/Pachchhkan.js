import React from 'react';
import {Text, View, HStack, ArrowBackIcon, Button} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import Sound from 'react-native-sound';

Sound.setCategory('Playback');

// const soundFile = require('../audios/test.mp3');
const soundFile = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
var totalduration = 0;

var audio = new Sound(soundFile, null, error => {
  if (error) {
    console.log('failed to load the sound', error);
  } else {
    audio.play(); // have to put the call to play() in the onload callback
    audio.stop();
    totalduration = audio.getDuration();
  }
});
export default function Pachchhkan({navigation}) {
  const [playing, setPlaying] = React.useState();
  const [duration, setDuration] = React.useState(totalduration);
  React.useEffect(() => {
    var audio = new Sound(soundFile, null, error => {
      if (error) {
        console.log('failed to load the sound', error);
      } else {
        audio.play(); // have to put the call to play() in the onload callback
        audio.stop();
        totalduration = audio.getDuration();
      }
    });
    audio.setVolume(1);
    return () => {
      audio.release();
    };
  }, []);

  const playPause = () => {
    if (audio.isPlaying()) {
      audio.stop();
      setPlaying(false);
    } else {
      setPlaying(true);
      setDuration(audio.getDuration());
      audio.play(success => {
        if (success) {
          setPlaying(false);
          console.log('successfully finished playing');
        } else {
          setPlaying(false);
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };

  const stopPlayer = () =>{
    audio.stop();
    setPlaying(false);
  }

  return (
    <View style={{flex: 1}}>
      <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => {stopPlayer(); navigation.goBack()}}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>Booking</Text>
        </View>
      </HStack>
      <View style={styles.subheader}>
        <Text style={styles.subheadertext}>Pachchhkan</Text>
      </View>
      <View>
        {/* Button to toggle between play and pause */}
        <Button onPress={playPause}>{playing ? 'Pause' : 'Play'}</Button>
        {/* show the current playback time in min and sec format (min:sec) */}
        <Text>
          {audio.getCurrentTime(seconds => {
            return seconds;
          })}
        </Text>
        {/* shot total duration of the audio in min and sec format (min:sec) */}
        <Text>
          {/* seconds to min convert */}
          {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignItems: 'center',
    backgroundColor: '#cecefb',
    borderBottomWidth: 1,
    borderBottomColor: '#A8C4E5',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subheader: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#cecefb',
    borderBottomWidth: 1,
    borderBottomColor: '#A8C4E5',
  },
  subheadertext: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
});
