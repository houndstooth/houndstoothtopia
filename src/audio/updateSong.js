const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

const BASE_GAIN = 0.1
const SHORT_BEAT = 30
const LONG_BEAT = Math.sqrt(2) * SHORT_BEAT
const SUSTAIN = 6

const BASE_PITCH = 440
const PITCHES = [
  BASE_PITCH,
  BASE_PITCH * Math.sqrt(3),
  BASE_PITCH * 3 / 2,
  BASE_PITCH * 3 * Math.sqrt(3) / 4,
  BASE_PITCH * 9 / 8,
  BASE_PITCH * 9 * Math.sqrt(3) / 16,
]

const RHYTHM = [
  SHORT_BEAT, LONG_BEAT,
  SHORT_BEAT, SHORT_BEAT, LONG_BEAT,
  SHORT_BEAT, SHORT_BEAT, LONG_BEAT, LONG_BEAT,
  SHORT_BEAT, LONG_BEAT, LONG_BEAT
]

const voice = pitch => {
  const newVoice = {
    oscNode: audioCtx.createOscillator(),
      gainNode: audioCtx.createGain(),
  }

  newVoice.oscNode.connect(newVoice.gainNode)
  newVoice.gainNode.connect(audioCtx.destination)
  newVoice.oscNode.type = 'sine'
  newVoice.oscNode.frequency.value = pitch
  newVoice.gainNode.gain.value = 0
  newVoice.oscNode.start()

  return newVoice
}

let voices = PITCHES.map(voice)

let time = 0

let timeToPlayNextNote = 0
let timeToStopPlayingNote = SUSTAIN

let rhythmCellIndex = 0

export default () => {
  time++

  if (time > timeToPlayNextNote) {
    let gainMap = voices.map(Math.random)
    const total = gainMap.reduce((sum, cur) => sum += cur, 0)
    gainMap = gainMap.map(gain => gain / total)

    voices.forEach((voice, index) => voice.gainNode.gain.value = gainMap[index] * BASE_GAIN)
    timeToPlayNextNote += RHYTHM[rhythmCellIndex]
  } else if (time > timeToStopPlayingNote) {
    voices.forEach(voice => voice.gainNode.gain.value = 0)
    timeToStopPlayingNote += RHYTHM[rhythmCellIndex]
    rhythmCellIndex++
  }

  if (rhythmCellIndex === RHYTHM.length) rhythmCellIndex = 0
}
