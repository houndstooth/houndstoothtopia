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

export {
    SUPERTILE_RHYTHM_LOWER_PITCH_NOTES,
    SUPERTILE_RHYTHM_HIGHER_PITCH_NOTES,
    PERIMETER_RHYTHM_TOP_RIGHT_GRAIN_NOTES,
    PERIMETER_RHYTHM_TOP_GRAIN_NOTES,
    PERIMETER_RHYTHM_TOP_LEFT_GRAIN_NOTES,
    PERIMETER_RHYTHM_LEFT_GRAIN_NOTES,
}
