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


// const track3 = {
//   url: 'https://audio-previews.elements.envatousercontent.com/files/103682271/preview.mp3',
//   title: 'Avaritia',
//   artist: 'deadmau5',
//   album: 'while(1<2)',
//   artwork: "https://random.imagecdn.app/500/150",
//   duration: 508
// }


export default function MusicPlayer({ route }) {



  const playbackState = usePlaybackState()
  const progress = useProgress()
  const listIdSong = route.params.keyList
  const listIdSongLength = listIdSong.length
  const [currentIdSong, setCurrentIdSong] = useState(route.params.key)
  const [currentTrackArtist, setCurrentTrackArtist] = useState()
  const [currentTrackArtwork, setCurrentTrackArtwork] = useState()
  const [currentTrackTitle, setCurrentTrackTitle] = useState()
  const [repeatMode, setRepeatMode] = useState("off")
  const [like, setLike] = useState(false)

  // const [trackArtist, setTrackArtist] = useState()
  // const [trackArtwork, setTrackArtwork] = useState()
  // const [trackTitle, setTrackTitle] = useState()
  // const [trackDuration, setTrackDuration] = useState()
  // const [trackUrl, setTrackUrl] = useState()
  // const [track, setTrack] = useState()


  let currentIndex = listIdSong.findIndex((item) => item === currentIdSong)


  const getSong = async () => {
    const idSong = currentIdSong
    let endpoints = [
      `https://music-player-pink.vercel.app/api/info?id=${idSong}`,
      `https://music-player-pink.vercel.app/api/song?id=${idSong}`
    ]
    await axios.all(endpoints.map(endpoint => axios.get(endpoint))).then(res => {
      trackPlayerInit()
      setup({
        title: res[0].data.data.title,
        artist: res[0].data.data.artistsNames,
        artwork: res[0].data.data.thumbnailM,
        duration: res[0].data.data.duration,
        url: res[1].data.data["128"]
      })
    })
  }


  const skipNextSong = () => {
    if (currentIndex == listIdSongLength - 1) {
      currentIndex = 0
      setCurrentIdSong(listIdSong[currentIndex])
    }
    else {
      currentIndex++
      setCurrentIdSong(listIdSong[currentIndex])
    }
  }
  const skipPrevSong = () => {
    if (currentIndex == 0) {
      currentIndex = listIdSongLength - 1
      setCurrentIdSong(listIdSong[currentIndex])
    }
    else {
      currentIndex--
      setCurrentIdSong(listIdSong[currentIndex])
    }
  }

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
      setCurrentTrackTitle(title)
      setCurrentTrackArtist(artist)
      setCurrentTrackArtwork(artwork)
    }
  })

  useEffect(() => {
    getSong()
    // TrackPlayer.updateOptions({
    //   stopWithApp: true,
    //   capabilities: [
    //     Capability.Play,
    //     Capability.Pause,
    //     Capability.SkipToNext,
    //     Capability.SkipToPrevious,
    //     Capability.Stop,
    //   ],
    //   compactCapabilities: [Capability.Play, Capability.Pause],
    // })

  }, [currentIdSong])


  TrackPlayer.skipToNext()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.mainWork}>
          <Image
            source={{ uri: currentTrackArtwork }}
            style={styles.imgWork}
            resizeMode="contain"
          />
        </View>
        <View
          style={styles.title}>
          <Text style={styles.songTitle}>{currentTrackTitle}</Text>
          <Text style={styles.singerName}>{currentTrackArtist}</Text>
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
            onPress={() => skipPrevSong()}>
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
                color="#E8E8E8" />
              :
              <Ionicons
                name="play-circle-outline"
                size={75}
                color="#E8E8E8" />}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => skipNextSong()}>
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
