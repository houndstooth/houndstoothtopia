const BASE_GAIN = 0.1
const DEFAULT_SUSTAIN = 6

const buildEntity = ({notes, voices, noteIndex = 0, nextOnset = 0, nextOffset = DEFAULT_SUSTAIN }) => {
  const entity = {
    notes,
    voices,
    noteIndex,
    nextOffset,
    nextOnset,
  }

  entity.update = time => {
    if (time > entity.nextOnset) {
      entity.voices[entity.notes[entity.noteIndex].pitch].gainNode.gain.value = BASE_GAIN
      // console.log('duration', entity.notes[entity.noteIndex].duration, 'index', entity.noteIndex)
      entity.nextOnset += entity.notes[entity.noteIndex].duration
    } else if (time > entity.nextOffset) {
      entity.voices[entity.notes[entity.noteIndex].pitch].gainNode.gain.value = 0
      entity.nextOffset += entity.notes[entity.noteIndex].duration
      entity.noteIndex++
    }

    if (entity.noteIndex === entity.notes.length) entity.noteIndex = 0
  }

  return entity
}

export default buildEntity
