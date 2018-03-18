import buildVoice from './buildVoice'
import {SUPERTILE_PITCH_SET, PERIMETER_PITCH_SET} from './pitches'

const voices = {}

const buildVoices = () => {
    voices.supertileRhythmLowerPitchVoices = SUPERTILE_PITCH_SET.map(buildVoice)
    voices.supertileRhythmHigherPitchVoices = SUPERTILE_PITCH_SET.map(buildVoice)

    voices.perimeterRhythmTopRightGrainVoices = PERIMETER_PITCH_SET.map(buildVoice)
    voices.perimeterRhythmTopGrainVoices = PERIMETER_PITCH_SET.map(buildVoice)
    voices.perimeterRhythmTopLeftGrainVoices = PERIMETER_PITCH_SET.map(buildVoice)
    voices.perimeterRhythmLeftGrainVoices = PERIMETER_PITCH_SET.map(buildVoice)
}

export {
    buildVoices,
    voices,
}
