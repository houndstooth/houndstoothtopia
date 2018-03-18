import {PositionalAudio} from 'threejs-full-es6'
import listener from './listener'

const buildVoice = pitch => {
    const positionalSound = new PositionalAudio(listener)
    positionalSound.setVolume(0)
    positionalSound.setRolloffFactor(2)
    positionalSound.setDistanceModel('exponential')
    positionalSound.getOutput().panningModel = "HRTF"

    const gainNode = positionalSound.getOutput()

    const oscillator = listener.context.createOscillator()
    oscillator.connect(gainNode)
    oscillator.type = 'sine'
    oscillator.frequency.value = pitch
    oscillator.start(3)
    positionalSound.setNodeSource(oscillator)

    return positionalSound
}

export default buildVoice
