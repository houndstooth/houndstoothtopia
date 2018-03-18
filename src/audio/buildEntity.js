import assignSpeaker from './assignSpeaker'
import vrEffect from '../app/vrEffect'

const BASE_GAIN = 0.1
const DEFAULT_SUSTAIN = 6

const buildEntity = ({notes, voices, noteIndex = 0, nextOnset = 0, nextOffset = DEFAULT_SUSTAIN}) => {
    const entity = {
        notes,
        voices,
        noteIndex,
        nextOffset,
        nextOnset,
    }

    const speaker = assignSpeaker()
    voices.forEach(voice => speaker.add(voice))

    entity.update = time => {
        const note = entity.notes[entity.noteIndex]
        const voice = entity.voices[note.pitch]

        if (time > entity.nextOnset) {
            if (vrEffect.isPresenting) {
                voice.setVolume(BASE_GAIN)
            }
            // console.log('duration', note.duration, 'index', entity.noteIndex)
            entity.nextOnset += note.duration
        } else if (time > entity.nextOffset) {
            voice.setVolume(0)
            entity.nextOffset += note.duration
            entity.noteIndex++
        }

        if (entity.noteIndex === entity.notes.length) entity.noteIndex = 0
    }

    return entity
}

export default buildEntity
