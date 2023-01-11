import React from "react";
import { Text, View } from "react-native";

import Icon from "@expo/vector-icons/Ionicons";

import { Global } from "../../styles/global";
import { Style } from "./style";
import colors from '../../styles/colors.json';

import { ProgressBar } from "../../assets/svg/ProgressBar";

import { formattedTime } from "../../utils/formattedTime";

interface PlayerProps {
  isPlaying: boolean;
  pauseSound: () => void;
  playSound: () => void;
  totalDuration: number;
  currentTime: number;
  statusProgressBar: number;
  indexMusic: number;
  setIndexMusic: (v: number) => void;
  listMusicLength: number
}

export const PlayerComponent = ({
  isPlaying,
  currentTime,
  totalDuration,
  statusProgressBar,
  playSound,
  pauseSound,
  indexMusic,
  setIndexMusic,
  listMusicLength
}: PlayerProps
) => {
  return (
    <View style={Style.playerContainer}>
      <View style={Style.actionsContainer}>
        <Icon
          onPress={() => indexMusic >= 1 ? setIndexMusic(indexMusic - 1) : null}
          name='play-back'
          color={colors.title}
          size={28}
        />
        <Icon
          onPress={isPlaying ? pauseSound : playSound}
          name={isPlaying ? 'pause' : 'play-sharp'}
          color={colors.title}
          size={30}
        />
        <Icon
          onPress={() => indexMusic < listMusicLength ? setIndexMusic(indexMusic + 1) : null}
          name='play-forward'
          color={colors.title}
          size={28}
        />
      </View>

      <View>
        <ProgressBar percent={statusProgressBar} />
        <View style={Style.durationContainer}>
          <Text style={Style.time}>{formattedTime(totalDuration).time}</Text>
          <Text style={Style.time}>{formattedTime(currentTime).time}</Text>
        </View>
      </View>
    </View>
  )
}