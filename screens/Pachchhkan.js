import React from 'react';
import {Text, View, HStack, ArrowBackIcon} from 'native-base';
import {StyleSheet, TouchableOpacity, BackHandler, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import TrackPlayer, {
  Event,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

export default function Pachchhkan({navigation, route}) {
  const pachkhan = route.params.pachkhan;

  const mp3_url = 'https://app.jinjimaharaj.com/uploads/pachkhan/';
  const img_url = 'https://app.jinjimaharaj.com/uploads/pachkhan/';

  const soundFile = mp3_url + pachkhan.audiofile;
  var totalduration = 0;

  const [playing, setPlaying] = React.useState();
  const [duration, setDuration] = React.useState(totalduration);
  const [mute, setMute] = React.useState(false);
  const progress = useProgress();

  React.useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.updateOptions({
        stopWithApp: false,
      });

      TrackPlayer.add({
        id: 'pachkhan',
        url: soundFile,
        title: pachkhan.title,
        artist: 'Jinji Maharaj',
        artwork: img_url + pachkhan.image,
      });

      TrackPlayer.getDuration().then(duration => {
        totalduration = duration;
        setDuration(totalduration);
      });
    });

    const backAction = () => {
      TrackPlayer.reset();
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        TrackPlayer.reset();
      };
    }, []),
  );

  useTrackPlayerEvents([Event.PlaybackState], e => {
    if (e.state === 1) {
      setPlaying(false);
      TrackPlayer.seekTo(0);
      TrackPlayer.pause();
    }
  });

  const playPause = () => {
    if (playing) {
      TrackPlayer.pause();
      setPlaying(false);
    } else {
      TrackPlayer.play();
      setPlaying(true);
    }
  };

  const muteUnmute = () => {
    if (mute) {
      TrackPlayer.setVolume(1);
      setMute(false);
    } else {
      TrackPlayer.setVolume(0);
      setMute(true);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <HStack style={styles.header}>
          <TouchableOpacity
            style={{position: 'absolute'}}
            onPress={() => {
              TrackPlayer.reset();
              navigation.goBack();
            }}>
            <ArrowBackIcon />
          </TouchableOpacity>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.text}>Pachchhkan</Text>
          </View>
        </HStack>
        <View style={styles.subheader}>
          <Text style={styles.subheadertext}>{pachkhan.title}</Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#FDD8DD', paddingTop: 20}}>
          <View
            style={{height: 250, width: '100%', backgroundColor: '#FDD8DD'}}>
            <Image
              source={{uri: img_url + pachkhan.image}}
              resizeMethod="resize"
              resizeMode="contain"
              style={{height: 250, width: '100%'}}
              alt="img"
            />
          </View>
          <View style={styles.audioplayer}>
            {/* Button to toggle between play and pause */}
            <TouchableOpacity onPress={playPause}>
              <Image
                source={
                  playing
                    ? require('../images/icons/pause.png')
                    : require('../images/icons/play.png')
                }
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
            {/* shot total duration of the audio in min and sec format (min:sec) */}
            <Text>
              {/* seconds to min convert */}
              {/* {Math.floor(duration / 60)}:{Math.floor(duration % 60)} */}
              {Math.floor(progress.position / 60)}:
              {Math.floor(progress.position % 60)}/{duration}
            </Text>
            <TouchableOpacity onPress={muteUnmute}>
              <Image
                source={
                  mute
                    ? require('../images/icons/mute.png')
                    : require('../images/icons/sound.png')
                }
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
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
    alignItems: 'center',
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
