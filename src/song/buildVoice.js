import webVr from '../webVr'

const buildVoice = pitch => {
    const positionalSound = webVr.createPositionalSound()

    const gainNode = positionalSound.getOutput()

    const oscillator = webVr.createSpatialOscillator()
    oscillator.connect(gainNode)
    oscillator.type = 'sine'
    oscillator.frequency.value = pitch
    oscillator.start(3)
    positionalSound.setNodeSource(oscillator)

    return positionalSound
}

export default buildVoice
