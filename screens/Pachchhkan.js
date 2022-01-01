import React from 'react';
import {Text, View, HStack, ArrowBackIcon, Image} from 'native-base';
import {StyleSheet, TouchableOpacity, BackHandler} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';
import TrackPlayer from 'react-native-track-player';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Pachchhkan({navigation, route}) {
  const pachkhan = route.params.pachkhan;

  const mp3_url = 'https://app.jinjimaharaj.com/uploads/pachkhan/';
  const img_url = 'https://app.jinjimaharaj.com/uploads/pachkhan/';

  const soundFile = mp3_url + pachkhan.audiofile;
  var totalduration = 0;

  const [playing, setPlaying] = React.useState();
  const [duration, setDuration] = React.useState(totalduration);
  const [mute, setMute] = React.useState(false);

  React.useEffect(() => {
    TrackPlayer.setupPlayer().then(() => {


     TrackPlayer.updateOptions({
         stopWithApp: true,
     });

      TrackPlayer.add({
        id: 'pachkhan',
        url: soundFile,
        title: 'Pachchhkan',
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
