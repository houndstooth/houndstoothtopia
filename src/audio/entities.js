import {
    PERIMETER_RHYTHM_LEFT_GRAIN_NOTES,
    PERIMETER_RHYTHM_TOP_GRAIN_NOTES,
    PERIMETER_RHYTHM_TOP_LEFT_GRAIN_NOTES,
    PERIMETER_RHYTHM_TOP_RIGHT_GRAIN_NOTES,
    SUPERTILE_RHYTHM_HIGHER_PITCH_NOTES,
    SUPERTILE_RHYTHM_LOWER_PITCH_NOTES
} from './notes'
import buildEntity from './buildEntity'
import {voices} from './voices'

let entities

const buildEntities = () => {
    entities = [
        // one set
        buildEntity({notes: SUPERTILE_RHYTHM_LOWER_PITCH_NOTES, voices: voices.supertileRhythmLowerPitchVoices}),
        buildEntity({notes: SUPERTILE_RHYTHM_HIGHER_PITCH_NOTES, voices: voices.supertileRhythmHigherPitchVoices}),

        buildEntity({notes: PERIMETER_RHYTHM_TOP_RIGHT_GRAIN_NOTES, voices: voices.perimeterRhythmTopRightGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_TOP_GRAIN_NOTES, voices: voices.perimeterRhythmTopGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_TOP_LEFT_GRAIN_NOTES, voices: voices.perimeterRhythmTopLeftGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_LEFT_GRAIN_NOTES, voices: voices.perimeterRhythmLeftGrainVoices}),

        // two sets
        buildEntity({notes: SUPERTILE_RHYTHM_LOWER_PITCH_NOTES, voices: voices.supertileRhythmLowerPitchVoices}),
        buildEntity({notes: SUPERTILE_RHYTHM_HIGHER_PITCH_NOTES, voices: voices.supertileRhythmHigherPitchVoices}),

        buildEntity({notes: PERIMETER_RHYTHM_TOP_RIGHT_GRAIN_NOTES, voices: voices.perimeterRhythmTopRightGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_TOP_GRAIN_NOTES, voices: voices.perimeterRhythmTopGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_TOP_LEFT_GRAIN_NOTES, voices: voices.perimeterRhythmTopLeftGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_LEFT_GRAIN_NOTES, voices: voices.perimeterRhythmLeftGrainVoices}),

        // three sets??
        buildEntity({notes: SUPERTILE_RHYTHM_LOWER_PITCH_NOTES, voices: voices.supertileRhythmLowerPitchVoices}),
        buildEntity({notes: SUPERTILE_RHYTHM_HIGHER_PITCH_NOTES, voices: voices.supertileRhythmHigherPitchVoices}),

        buildEntity({notes: PERIMETER_RHYTHM_TOP_RIGHT_GRAIN_NOTES, voices: voices.perimeterRhythmTopRightGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_TOP_GRAIN_NOTES, voices: voices.perimeterRhythmTopGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_TOP_LEFT_GRAIN_NOTES, voices: voices.perimeterRhythmTopLeftGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_LEFT_GRAIN_NOTES, voices: voices.perimeterRhythmLeftGrainVoices}),

        // FOUR sets??
        buildEntity({notes: SUPERTILE_RHYTHM_LOWER_PITCH_NOTES, voices: voices.supertileRhythmLowerPitchVoices}),
        buildEntity({notes: SUPERTILE_RHYTHM_HIGHER_PITCH_NOTES, voices: voices.supertileRhythmHigherPitchVoices}),

        buildEntity({notes: PERIMETER_RHYTHM_TOP_RIGHT_GRAIN_NOTES, voices: voices.perimeterRhythmTopRightGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_TOP_GRAIN_NOTES, voices: voices.perimeterRhythmTopGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_TOP_LEFT_GRAIN_NOTES, voices: voices.perimeterRhythmTopLeftGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_LEFT_GRAIN_NOTES, voices: voices.perimeterRhythmLeftGrainVoices}),

        // FIIIIVE sets??
        buildEntity({notes: SUPERTILE_RHYTHM_LOWER_PITCH_NOTES, voices: voices.supertileRhythmLowerPitchVoices}),
        buildEntity({notes: SUPERTILE_RHYTHM_HIGHER_PITCH_NOTES, voices: voices.supertileRhythmHigherPitchVoices}),

        buildEntity({notes: PERIMETER_RHYTHM_TOP_RIGHT_GRAIN_NOTES, voices: voices.perimeterRhythmTopRightGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_TOP_GRAIN_NOTES, voices: voices.perimeterRhythmTopGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_TOP_LEFT_GRAIN_NOTES, voices: voices.perimeterRhythmTopLeftGrainVoices}),
        buildEntity({notes: PERIMETER_RHYTHM_LEFT_GRAIN_NOTES, voices: voices.perimeterRhythmLeftGrainVoices}),
    ]
}

export {
    buildEntities,
    entities,
}
