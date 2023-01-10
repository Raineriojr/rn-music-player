import { Sound } from "expo-av/build/Audio";

export let interval = null;

export function initInterval(sound: Sound, setCurrentTime: (value: number) => void) {
  interval = setInterval(() => {
    async function UpdateMusicTime() {
      const infoSound: any = await sound.getStatusAsync();
      setCurrentTime(infoSound.positionMillis)
    }        
    UpdateMusicTime()
  }, 1000)
}