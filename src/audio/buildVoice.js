import context from './context'

const buildVoice = pitch => {
    const newVoice = {
        oscNode: context.createOscillator(),
        gainNode: context.createGain(),
    }

    newVoice.oscNode.connect(newVoice.gainNode)
    newVoice.gainNode.connect(context.destination)
    newVoice.oscNode.type = 'sine'
    newVoice.oscNode.frequency.value = pitch
    newVoice.gainNode.gain.value = 0
    newVoice.oscNode.start()

    return newVoice
}

export default buildVoice
