import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import Slider from "@react-native-community/slider";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./MusicPlayerStyles";
import TrackPlayer, {
  Capability, State,
  usePlaybackState, useProgress,
  Event, RepeatMode, useTrackPlayerEvents
} from "react-native-track-player";


const track3 = {
  url: 'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3', // Load media from the network
  title: 'Avaritia',
  artist: 'deadmau5',
  album: 'while(1<2)',
  genre: 'Progressive House, Electro House',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork: 'http://example.com/cover.png', // Load artwork from the network
  duration: 500
};

const trackPlayerInit = async () => {
  await TrackPlayer.setupPlayer({});
  return true;
};

const setup = async () => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    return
  }
  else {
    await TrackPlayer.setupPlayer({}).then(async () => {
      await TrackPlayer.reset()
      await TrackPlayer.add({
        url: 'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
        title: 'Avaritia',
        artist: 'deadmau5',
        album: 'while(1<2)',
        genre: 'Progressive House, Electro House',
        date: '2014-05-20T07:00:00+00:00',
        artwork: 'http://example.com/cover.png',
        duration: 500
      })
      TrackPlayer.setRepeatMode(RepeatMode.Queue)
    })
  }
}

const togglePlayback = async (playbackState) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack == null) {

  } else {
    if (playbackState !== State.Playing) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
}

export default function MusicPlayer() {
  const playbackState = usePlaybackState()
  const progress = useProgress()
  console.log("Progress", progress);

  const slidingCompleted = async (value) => {
    await TrackPlayer.seekTo(value);
  }

  useEffect(() => {
    trackPlayerInit()
    TrackPlayer.updateOptions({
      stopWithApp: false,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      compactCapabilities: [Capability.Play, Capability.Pause],
    })
    setup()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.mainWork}>
          <Image
            source={require("../../assets/iconMain.jpg")}
            style={styles.imgWork}
          />
        </View>
        <View
          style={styles.title}>
          <Text style={styles.songTitle}>Song</Text>
          <Text style={styles.singerName}>name</Text>
        </View>
        <View>
          <Slider
            style={styles.processContainer}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#ccc"
            minimumTrackTintColor="#ccc"
            maximumTrackTintColor="orange"
            onSlidingComplete={slidingCompleted}
          />
          <View style={styles.processLabel}>
            <Text style={styles.processLabelTxt}>
              {new Date(progress.position * 1000).toISOString().substring(14, 19)}
            </Text>
            <Text style={styles.processLabelTxt}>
              {new Date((progress.duration - progress.position) * 1000).toISOString().substring(14, 19)}
            </Text>
          </View>
        </View>
        <View style={styles.musicControls}>
          <TouchableOpacity
            style={{}}
            onPress={() => TrackPlayer.skipToPrevious()}>
            <Icon
              name="play-skip-back-circle-outline"
              size={55} color="#fff"
              style={{ marginTop: 15 }} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => togglePlayback(playbackState)}>
            {playbackState === State.Playing ? <Icon
              name="pause-circle-outline"
              size={75}
              color="#E8E8E8" /> : <Icon
              name="play-circle-outline"
              size={75}
              color="#E8E8E8" />}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => TrackPlayer.skipToNext()}>
            <Icon
              name="play-skip-forward-circle-outline"
              size={55}
              color="#E8E8E8"
              style={{ marginTop: 15 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControl}>
          <TouchableOpacity onPress={() => { }}>
            <Icon
              name="heart-outline"
              size={24}
              color="#E8E8E8" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Icon
              name="repeat-outline"
              size={24}
              color="#E8E8E8" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Icon
              name="share-outline"
              size={24}
              color="#E8E8E8" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Icon
              name="ellipsis-horizontal"
              size={24}
              color="#E8E8E8" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
