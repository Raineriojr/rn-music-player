import React from 'react';
import { Image, View } from 'react-native';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';

// **Components
import { DescriptionComponent } from '../components/description/DescriptionComponent';
import { PlayerComponent } from '../components/player/PlayerComponent';

import { initInterval, interval } from '../utils/intervalMusic';
import { getAlbum } from '../services/requestApi';

import { Style } from './home.style';


interface listMusicProps {
  title: Array<string>;
  artist: string;
  music: Array<string>;
  image: string
}

export const Home = () => {
  const [totalDuration, setTotalDuration] = React.useState<number>(0);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [indexMusic, setIndexMusic] = React.useState<number>(0);

  const [listMusic, setListMusic] = React.useState<listMusicProps>(null!);
  const [musicPlaying, setMusicPlaying] = React.useState<Sound>();
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);

  let statusProgressBar = (100 * currentTime) / totalDuration
  let listMusicLength = listMusic?.music.length - 1
  let albumId = 212357

  async function playSound() {
    console.log('Playing Sound');

    if (musicPlaying) {
      const infoMusicPlaying: any = await musicPlaying.getStatusAsync();
      await musicPlaying.setPositionAsync(infoMusicPlaying.positionMillis)

      initInterval(musicPlaying, setCurrentTime)

      const playSound: any = await musicPlaying.playAsync()
      setIsPlaying(playSound.isPlaying)

    } else {
      const { sound } = await Audio.Sound.createAsync({ uri: listMusic?.music[indexMusic] })
      const infoSound: any = await sound.getStatusAsync();

      setMusicPlaying(sound);
      setTotalDuration(infoSound.durationMillis)

      initInterval(sound, setCurrentTime)

      const playSound: any = await sound.playAsync();
      setIsPlaying(playSound.isPlaying)
    }
  }

  async function pauseSound() {
    console.log("Pause Sound");
    const infoSound: any = await musicPlaying.pauseAsync();
    setIsPlaying(infoSound.isPlaying)
  }

  React.useEffect(() => {
    console.log("Loading album");
    const _getAlbumApi = async () => {
      const response: any = await getAlbum(albumId);

      const musics = Object.values(response.data.tracks.data)
        .map((music: { title: string, preview: string }) => {
          return {
            link: music.preview,
            title: music.title
          }
        })

      setListMusic({
        title: musics.map((v) => v.title),
        artist: response.data.artist.name,
        image: response.data.cover_medium,
        music: musics.map((v) => v.link),
      })
    }
    _getAlbumApi()
  }, [])

  React.useEffect(() => {
    function resetWhenFinishMusic() {
      if (currentTime == totalDuration || !isPlaying) {
        setIsPlaying(false);
        setCurrentTime(0);
        setTotalDuration(0)
        setMusicPlaying(null)
        clearInterval(interval)
      }
    }
    resetWhenFinishMusic()

  }, [currentTime, isPlaying])

  React.useEffect(() => {
    function resetWhenChangeMusic() {
      setTotalDuration(0);
      setCurrentTime(0);
      setMusicPlaying(null)
    }
    resetWhenChangeMusic()
    
  }, [indexMusic])

  React.useEffect(() => {
    return musicPlaying
      ? () => {
        musicPlaying.unloadAsync();
      }
      : undefined;
  }, [musicPlaying]);

  return (
    <View style={Style.container}>
      <Image
        source={{ uri: listMusic?.image }}
        style={Style.image}
      />

      <DescriptionComponent
        title={listMusic?.title[indexMusic]}
        subtitle={listMusic?.artist}
      />

      <PlayerComponent
        isPlaying={isPlaying}
        currentTime={currentTime}
        totalDuration={totalDuration}
        statusProgressBar={statusProgressBar}
        playSound={playSound}
        pauseSound={pauseSound}
        indexMusic={indexMusic}
        setIndexMusic={setIndexMusic}
        listMusicLength={listMusicLength}
      />
    </View>
  )
}