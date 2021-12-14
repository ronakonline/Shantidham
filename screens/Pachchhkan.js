import React from 'react';
import {Text, View, HStack, ArrowBackIcon, Button} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';

import Sound from 'react-native-sound';

Sound.setCategory('Playback');

// const soundFile = require('../audios/test.mp3');
const soundFile =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
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
  const [mute, setMute] = React.useState(false);
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
      audio.pause();
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

  const muteUnmute = () => {
    if (mute) {
      audio.setVolume(1);
      setMute(false);
    } else {
      audio.setVolume(0);
      setMute(true);
    }
  };


  const stopPlayer = () => {
    audio.stop();
    setPlaying(false);
    setMute(false);
    audio.setVolume(1);
  };

  

  return (
    <View style={{flex: 1}}>
      <HStack style={styles.header}>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => {
            stopPlayer();
            navigation.goBack();
          }}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text}>Booking</Text>
        </View>
      </HStack>
      <View style={styles.subheader}>
        <Text style={styles.subheadertext}>Pachchhkan</Text>
      </View>
      <View style={styles.audioplayer}>
        {/* Button to toggle between play and pause */}
        <TouchableOpacity onPress={playPause}>
          <FontAwesome icon={playing ?   SolidIcons.pause : SolidIcons.play} style={{fontSize: 24}} />
        </TouchableOpacity>
        {/* shot total duration of the audio in min and sec format (min:sec) */}
        <Text>
          {/* seconds to min convert */}
         {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
        </Text>
        <TouchableOpacity onPress={muteUnmute}>
          <FontAwesome icon={mute ? SolidIcons.volumeMute : SolidIcons.volumeUp} style={{fontSize: 24}} />
        </TouchableOpacity>
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
  audioplayer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#cecefb',
    marginHorizontal: 20,
    borderRadius: 50,
    marginTop: 50,
    paddingHorizontal: 40,
  },
});
