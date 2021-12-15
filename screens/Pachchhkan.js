import React from 'react';
import {
  Text,
  View,
  HStack,
  ArrowBackIcon,
  Button,
  Image,
  Center,
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';

import Sound from 'react-native-sound';

export default function Pachchhkan({navigation, route}) {
  const pachkhan = route.params.pachkhan;

  const mp3_url = 'https://app.jinjimaharaj.com/uploads/pachkhan/';
  const img_url = 'https://app.jinjimaharaj.com/uploads/pachkhan/';

  Sound.setCategory('Playback');

  const soundFile = mp3_url + pachkhan.audiofile;
  var totalduration = 0;

  const [playing, setPlaying] = React.useState();
  const [duration, setDuration] = React.useState(totalduration);
  const [mute, setMute] = React.useState(false);
  const [audio, setAudio] = React.useState(
    new Sound(soundFile, error => {
      if (error) {
        console.log('failed to load the sound', error);
      } else {
      }
    }),
  );
  React.useEffect(() => {
    setAudio(
      new Sound(soundFile, null, error => {
        if (error) {
          console.log('failed to load the sound', error);
        } else {
          audio.play();
          audio.stop();
          totalduration = audio.getDuration();
        }
      }),
    );
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
    audio.release();
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
          <Text style={styles.text}>Pachchhkan</Text>
        </View>
      </HStack>
      <View style={styles.subheader}>
        <Text style={styles.subheadertext}>{pachkhan.title}</Text>
      </View>
      <View style={{flex: 1, backgroundColor: '#FDD8DD',paddingTop:20}}>
        <View style={{height: 250, width: '100%',backgroundColor: '#FDD8DD'}}>
          {console.log(img_url + pachkhan.image)}
          <Image
            source={{uri: img_url + pachkhan.image}}
            resizeMethod="resize"
            resizeMode="cover"
            style={{ height: 250, width: '100%' }}
            alt="img"
          />
        </View>
        <View style={styles.audioplayer}>
          {/* Button to toggle between play and pause */}
          <TouchableOpacity onPress={playPause}>
            <FontAwesome
              icon={playing ? SolidIcons.pause : SolidIcons.play}
              style={{fontSize: 24}}
            />
          </TouchableOpacity>
          {/* shot total duration of the audio in min and sec format (min:sec) */}
          <Text>
            {/* seconds to min convert */}
            {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
          </Text>
          <TouchableOpacity onPress={muteUnmute}>
            <FontAwesome
              icon={mute ? SolidIcons.volumeMute : SolidIcons.volumeUp}
              style={{fontSize: 24}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignItems: 'center',
    backgroundColor: '#FDD8DD',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subheader: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#FDD8DD',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
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
    backgroundColor: '#FDD8DD',
    marginHorizontal: 20,
    borderRadius: 50,
    marginTop: 50,
    paddingHorizontal: 40,
    borderWidth: 1,
  },
});
