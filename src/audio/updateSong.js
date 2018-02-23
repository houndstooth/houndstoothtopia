import buildVoice from './buildVoice'
import buildEntity from './buildEntity'

const SHORT_BEAT = 30
const LONG_BEAT = SHORT_BEAT * Math.sqrt(2)
const DOUBLE_LONG_BEAT = LONG_BEAT * 2

const SUPERTILE_NOTES = [
  {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 0},
  {duration: SHORT_BEAT, pitch: 0}, {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 0},
  {duration: SHORT_BEAT, pitch: 0}, {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 0},
  {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 0},
]

const PERIMETER_NOTES = [
  {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 1},
  {duration: SHORT_BEAT, pitch: 2}, {duration: SHORT_BEAT, pitch: 2}, {duration: LONG_BEAT, pitch: 3},
  {duration: SHORT_BEAT, pitch: 2}, {duration: DOUBLE_LONG_BEAT, pitch: 2},
  {duration: SHORT_BEAT, pitch: 4}, {duration: LONG_BEAT, pitch: 4},
  {duration: SHORT_BEAT, pitch: 5}, {duration: SHORT_BEAT, pitch: 4}, {duration: LONG_BEAT, pitch: 4},
  {duration: SHORT_BEAT, pitch: 3}, {duration: DOUBLE_LONG_BEAT, pitch: 2},
]

const BASE_PITCH = 440
const supertilePitches = [
  BASE_PITCH,
  BASE_PITCH * Math.sqrt(3),
  BASE_PITCH * 3 / 2,
  BASE_PITCH * 3 * Math.sqrt(3) / 4,
  BASE_PITCH * 9 / 8,
  BASE_PITCH * 9 * Math.sqrt(3) / 16,
]
const supertileVoices = supertilePitches.map(buildVoice)

const PERIMETER_BASE_PITCH = 220
const perimeterPitches = [
  PERIMETER_BASE_PITCH,
  PERIMETER_BASE_PITCH * Math.sqrt(3),
  PERIMETER_BASE_PITCH * 3,
  PERIMETER_BASE_PITCH * 3 * Math.sqrt(3),
  PERIMETER_BASE_PITCH * 9,
  PERIMETER_BASE_PITCH * 9 * Math.sqrt(3),
  PERIMETER_BASE_PITCH * 27,
]
const perimeterVoices = perimeterPitches.map(buildVoice)

const entities = [
  buildEntity({ notes: SUPERTILE_NOTES, voices: supertileVoices }),
  buildEntity({ notes: PERIMETER_NOTES, voices: perimeterVoices }),
]
//
// const composeChordOutOfAllVoicesRandomlyWeightedButTotalingToAConstantVolume = (entity) => {
//   let gainMap = entity.voices.map(Math.random)
//   const total = gainMap.reduce((sum, cur) => sum += cur, 0)
//   gainMap = gainMap.map(gain => gain / total)
//
//   entity.voices.forEach((voice, index) => voice.gainNode.gain.value = gainMap[index] * BASE_GAIN)
// }

let time = 0

export default () => {
  time++
  entities.forEach(entity => entity.update(time))
}
