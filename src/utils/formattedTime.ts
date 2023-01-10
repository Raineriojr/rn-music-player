export function formattedTime(currentTime: number) {
  const minutesDuration = new Date(currentTime).getMinutes().toString();
  const secondsDuration = new Date(currentTime).getSeconds().toString();
  const minuteFormat = '0' + minutesDuration.slice(-2)
  const secondFormat = '0' + secondsDuration
  const time = minuteFormat + ':' + secondFormat.slice(-2)

  return {
    time: Number.isNaN(time) ? '00:00' : time
  }
}