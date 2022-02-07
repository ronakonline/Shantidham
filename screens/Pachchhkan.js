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
import ImageColors from 'react-native-image-colors';

export default function Pachchhkan({navigation, route}) {
  const pachkhan = route.params.pachkhan;

  const mp3_url = 'https://app.jinjimaharaj.com/uploads/pachkhan/';
  const img_url = 'https://app.jinjimaharaj.com/uploads/pachkhan/';

  const soundFile = mp3_url + pachkhan.audiofile;
  var totalduration = pachkhan.duration;

  const [playing, setPlaying] = React.useState();
  const [duration, setDuration] = React.useState(totalduration);
  const [mute, setMute] = React.useState(false);
  const [PageColor , setPageColor] = React.useState('#FDD8DD');
  const progress = useProgress();

  React.useEffect(() => {
    const fetchColors = async () => {
      const result = await ImageColors.getColors(img_url + pachkhan.image);
      switch (result.platform) {
        case 'ios': 
          setPageColor(result.primary);
          break;
        case 'android':
          setPageColor(result.average);
          break;
      }
      console.log(PageColor);
      console.log(result);
    };
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
        duration: totalduration,
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

    fetchColors();

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
      <View style={{flex: 1}}>
        {/* <HStack style={Object.assign({},styles.header,{backgroundColor:PageColor,borderBottomColor:PageColor})}>
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
        </HStack> */}
        <HStack style={Object.assign({},styles.header,{backgroundColor:PageColor,borderBottomColor:PageColor})}>
          <View style={styles.headerButtonView}>
            <TouchableOpacity onPress={() => { navigation.pop() }} >
              <Image source={require('../images/icons/back.png')} style={styles.headerButtonImage} />
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>Pachchhkan</Text>
        </HStack>
        <View style={Object.assign({},styles.subheader,{backgroundColor:PageColor,borderBottomColor:PageColor})}>
          <Text style={styles.subheadertext}>{pachkhan.title}</Text>
        </View>
        <View style={{flex: 1, backgroundColor: PageColor, paddingTop: 20}}>
          <View
            style={{height: 250, width: '100%', backgroundColor: PageColor}}>
            <Image
              source={{uri: img_url + pachkhan.image}}
              resizeMethod="resize"
              resizeMode="contain"
              style={{height: 250, width: '100%'}}
              alt="img"
            />
          </View>
          <View style={Object.assign({},styles.audioplayer,{backgroundColor:PageColor})}>
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
              {Math.floor(progress.position % 60)}/{Math.floor(duration / 60)}:{Math.floor(duration % 60)}
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
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    alignItems: 'center',
    backgroundColor: '#FDD8DD',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0BCC0',
    backgroundColor: '#FDD8DD',
  },
  headerButtonView: {
    aspectRatio: 1, height: 30, alignSelf: 'center', position: 'absolute', left: 10  },
  headerButtonImage: {
    aspectRatio: 1, height: '100%', padding: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
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
