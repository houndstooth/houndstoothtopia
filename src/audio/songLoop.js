import buildVoice from './buildVoice'
import buildEntity from './buildEntity'

const SHORT_BEAT = 32
const LONG_BEAT = SHORT_BEAT * Math.sqrt(2)
const DOUBLE_LONG_BEAT = LONG_BEAT * 2

const SUPERTILE_RHYTHM_LOWER_PITCH_NOTES = [
    {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 0},
    {duration: SHORT_BEAT, pitch: 0}, {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 0},
    {duration: SHORT_BEAT, pitch: 0}, {duration: SHORT_BEAT, pitch: 0}, {
        duration: LONG_BEAT,
        pitch: 0
    }, {duration: LONG_BEAT, pitch: 0},
    {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 0},
]

const SUPERTILE_RHYTHM_HIGHER_PITCH_NOTES = [
    {duration: SHORT_BEAT, pitch: 1}, {duration: LONG_BEAT, pitch: 1},
    {duration: SHORT_BEAT, pitch: 1}, {duration: SHORT_BEAT, pitch: 1}, {duration: LONG_BEAT, pitch: 1},
    {duration: SHORT_BEAT, pitch: 1}, {duration: SHORT_BEAT, pitch: 1}, {
        duration: LONG_BEAT,
        pitch: 1
    }, {duration: LONG_BEAT, pitch: 1},
    {duration: SHORT_BEAT, pitch: 1}, {duration: LONG_BEAT, pitch: 1}, {duration: LONG_BEAT, pitch: 1},
]

const PERIMETER_RHYTHM_TOP_RIGHT_GRAIN_NOTES = [
    {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 1},
    {duration: SHORT_BEAT, pitch: 2}, {duration: SHORT_BEAT, pitch: 2}, {duration: LONG_BEAT, pitch: 3},
    {duration: SHORT_BEAT, pitch: 2}, {duration: DOUBLE_LONG_BEAT, pitch: 2},
    {duration: SHORT_BEAT, pitch: 4}, {duration: LONG_BEAT, pitch: 4},
    {duration: SHORT_BEAT, pitch: 5}, {duration: SHORT_BEAT, pitch: 4}, {duration: LONG_BEAT, pitch: 4},
    {duration: SHORT_BEAT, pitch: 3}, {duration: DOUBLE_LONG_BEAT, pitch: 2},
]
const PERIMETER_RHYTHM_TOP_GRAIN_NOTES = [
    {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 1},
    {duration: SHORT_BEAT, pitch: 3}, {duration: SHORT_BEAT, pitch: 2}, {duration: LONG_BEAT, pitch: 3},
    {duration: SHORT_BEAT, pitch: 1}, {duration: DOUBLE_LONG_BEAT, pitch: 0},
    {duration: SHORT_BEAT, pitch: 4}, {duration: LONG_BEAT, pitch: 5},
    {duration: SHORT_BEAT, pitch: 7}, {duration: SHORT_BEAT, pitch: 6}, {duration: LONG_BEAT, pitch: 7},
    {duration: SHORT_BEAT, pitch: 5}, {duration: DOUBLE_LONG_BEAT, pitch: 4},
]
const PERIMETER_RHYTHM_TOP_LEFT_GRAIN_NOTES = [
    {duration: SHORT_BEAT, pitch: 2}, {duration: LONG_BEAT, pitch: 2},
    {duration: SHORT_BEAT, pitch: 3}, {duration: SHORT_BEAT, pitch: 2}, {duration: LONG_BEAT, pitch: 2},
    {duration: SHORT_BEAT, pitch: 1}, {duration: DOUBLE_LONG_BEAT, pitch: 0},
    {duration: SHORT_BEAT, pitch: 2}, {duration: LONG_BEAT, pitch: 3},
    {duration: SHORT_BEAT, pitch: 4}, {duration: SHORT_BEAT, pitch: 4}, {duration: LONG_BEAT, pitch: 5},
    {duration: SHORT_BEAT, pitch: 4}, {duration: DOUBLE_LONG_BEAT, pitch: 4},
]
const PERIMETER_RHYTHM_LEFT_GRAIN_NOTES = [
    {duration: SHORT_BEAT, pitch: 4}, {duration: LONG_BEAT, pitch: 3},
    {duration: SHORT_BEAT, pitch: 3}, {duration: SHORT_BEAT, pitch: 2}, {duration: LONG_BEAT, pitch: 1},
    {duration: SHORT_BEAT, pitch: 1}, {duration: DOUBLE_LONG_BEAT, pitch: 0},
    {duration: SHORT_BEAT, pitch: 0}, {duration: LONG_BEAT, pitch: 1},
    {duration: SHORT_BEAT, pitch: 1}, {duration: SHORT_BEAT, pitch: 2}, {duration: LONG_BEAT, pitch: 3},
    {duration: SHORT_BEAT, pitch: 3}, {duration: DOUBLE_LONG_BEAT, pitch: 4},
]

const BASE_PITCH = 282
const SUPERTILE_PITCH_SET = [
    BASE_PITCH,
    BASE_PITCH * Math.sqrt(3),
    BASE_PITCH * 3 / 2,
    BASE_PITCH * 3 * Math.sqrt(3) / 4,
    BASE_PITCH * 9 / 8,
    BASE_PITCH * 9 * Math.sqrt(3) / 16,
]
const supertileRhythmLowerPitchVoices = SUPERTILE_PITCH_SET.map(buildVoice)
const supertileRhythmHigherPitchVoices = SUPERTILE_PITCH_SET.map(buildVoice)

const PERIMETER_BASE_PITCH = 141
const PERIMETER_PITCH_SET = [
    PERIMETER_BASE_PITCH,
    PERIMETER_BASE_PITCH * Math.sqrt(3),
    PERIMETER_BASE_PITCH * 3,
    PERIMETER_BASE_PITCH * 3 * Math.sqrt(3),
    PERIMETER_BASE_PITCH * 9,
    PERIMETER_BASE_PITCH * 9 * Math.sqrt(3),
    PERIMETER_BASE_PITCH * 27,
    PERIMETER_BASE_PITCH * 27 * Math.sqrt(3),
]
const perimeterRhythmTopRightGrainVoices = PERIMETER_PITCH_SET.map(buildVoice)
const perimeterRhythmTopGrainVoices = PERIMETER_PITCH_SET.map(buildVoice)
const perimeterRhythmTopLeftGrainVoices = PERIMETER_PITCH_SET.map(buildVoice)
const perimeterRhythmLeftGrainVoices = PERIMETER_PITCH_SET.map(buildVoice)

const entities = [
    buildEntity({notes: SUPERTILE_RHYTHM_LOWER_PITCH_NOTES, voices: supertileRhythmLowerPitchVoices}),
    buildEntity({notes: SUPERTILE_RHYTHM_HIGHER_PITCH_NOTES, voices: supertileRhythmHigherPitchVoices}),
    buildEntity({notes: PERIMETER_RHYTHM_TOP_RIGHT_GRAIN_NOTES, voices: perimeterRhythmTopRightGrainVoices}),
    buildEntity({notes: PERIMETER_RHYTHM_TOP_GRAIN_NOTES, voices: perimeterRhythmTopGrainVoices}),
    buildEntity({notes: PERIMETER_RHYTHM_TOP_LEFT_GRAIN_NOTES, voices: perimeterRhythmTopLeftGrainVoices}),
    buildEntity({notes: PERIMETER_RHYTHM_LEFT_GRAIN_NOTES, voices: perimeterRhythmLeftGrainVoices}),
]

let time = 0

const songLoop = () => {
    requestAnimationFrame(songLoop)
    time++
    entities.forEach(entity => entity.update(time))
}

export default songLoop
