import vr from '../vr'

const buildVoice = pitch => {
    const positionalSound = vr.createPositionalSound()

    const gainNode = positionalSound.getOutput()

    const oscillator = vr.createSpatialOscillator()
    oscillator.connect(gainNode)
    oscillator.type = 'sine'
    oscillator.frequency.value = pitch
    oscillator.start(3)
    positionalSound.setNodeSource(oscillator)

    return positionalSound
}

export default buildVoice
