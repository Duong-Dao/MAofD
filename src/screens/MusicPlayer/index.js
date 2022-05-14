import React, { useEffect, useState } from "react"
import {
  SafeAreaView, View,
  Text, TouchableOpacity, Image
} from "react-native"
import Slider from "@react-native-community/slider"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./MusicPlayerStyles"
import axios from "axios"
import IconRepeatOnce from "../../components/IconRepeatOnce"

import TrackPlayer, {
  Capability, State,
  usePlaybackState, useProgress,
  Event, RepeatMode, useTrackPlayerEvents
} from "react-native-track-player"

import { togglePlayback, setup, trackPlayerInit, slidingCompleted } from "./MusicPlayerController"


// const track = {
//   title: 'Stressed Out',
//   artist: 'Twenty One Pilots',
//   artwork: "https://random.imagecdn.app/500/150",
//   url: "http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3",
//   duration: 200
// }

// const track3 = {
//   url: 'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
//   title: 'Avaritia',
//   artist: 'deadmau5',
//   album: 'while(1<2)',
//   artwork: "https://random.imagecdn.app/500/150",
//   duration: 508
// }


export default function MusicPlayer({ route }) {



  const getStreamSong = async () => {
    await axios.get(`https://music-player-pink.vercel.app/api/song?id=${route.params.song.encodeId}`)
      .then(res => {
        trackPlayerInit()
        let trackTest = {
          id: route.params.song.encodeId,
          title: route.params.song.title,
          artist: route.params.song.artistsNames,
          artwork: route.params.song.thumbnailM,
          duration: route.params.song.duration,
          url: res.data.data["128"]
        }
        setup(trackTest)
      })
  }


  const playbackState = usePlaybackState()
  const progress = useProgress()

  const [trackArtist, setTrackArtist] = useState()
  const [trackArtwork, setTrackArtwork] = useState()
  const [trackTitle, setTrackTitle] = useState()
  const [repeatMode, setRepeatMode] = useState("off")
  const [like, setLike] = useState(false)


  const changeRepeatMode = () => {
    if (repeatMode == "off") {
      TrackPlayer.setRepeatMode(RepeatMode.Track)
      setRepeatMode("track")
    }
    if (repeatMode == "track") {
      TrackPlayer.setRepeatMode(RepeatMode.Queue)
      setRepeatMode("repeat")
    }
    if (repeatMode == "repeat") {
      TrackPlayer.setRepeatMode(RepeatMode.Off)
      setRepeatMode("off")
    }
  }

  const changeStatusHeart = () => {
    setLike(!like)
  }

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack)
      const { title, artist, artwork } = track
      setTrackTitle(title)
      setTrackArtist(artist)
      setTrackArtwork(artwork)
    }
  })

  useEffect(() => {
    getStreamSong()
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

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.mainWork}>
          <Image
            source={{ uri: trackArtwork }}
            style={styles.imgWork}
            resizeMode="contain"
          />
        </View>
        <View
          style={styles.title}>
          <Text style={styles.songTitle}>{trackTitle}</Text>
          <Text style={styles.singerName}>{trackArtist}</Text>
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
            <Ionicons
              name="play-skip-back-circle-outline"
              size={55} color="#fff"
              style={{ marginTop: 15 }} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => togglePlayback(playbackState)}>
            {playbackState === State.Playing ?
              <Ionicons
                name="pause-circle-outline"
                size={75}
                color="#E8E8E8" /> : <Ionicons
                name="play-circle-outline"
                size={75}
                color="#E8E8E8" />}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => TrackPlayer.skipToNext()}>
            <Ionicons
              name="play-skip-forward-circle-outline"
              size={55}
              color="#E8E8E8"
              style={{ marginTop: 15 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControl}>
          <TouchableOpacity onPress={() => changeStatusHeart()}>
            {like ? <Ionicons
              name="heart-outline"
              size={24}
              color="#800080" /> : <Ionicons
              name="heart-outline"
              size={24}
              color="#E8E8E8" />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeRepeatMode()}>
            {repeatMode == "off" &&
              <Ionicons
                name="repeat-outline"
                size={24}
                color="#E8E8E8" />}
            {repeatMode == "track" && <IconRepeatOnce />}

            {repeatMode == "repeat" &&
              <Ionicons
                name="repeat-outline"
                size={24}
                color="#800080" />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons
              name="share-outline"
              size={24}
              color="#E8E8E8" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons
              name="ellipsis-horizontal"
              size={24}
              color="#E8E8E8" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
