const audioCtx = new (window.AudioContext || window.webkitAudioContext)()

const buildVoice = pitch => {
  const newVoice = {
    oscNode: audioCtx.createOscillator(),
    gainNode: audioCtx.createGain(),
  }

  newVoice.oscNode.connect(newVoice.gainNode)
  newVoice.gainNode.connect(audioCtx.destination)
  newVoice.oscNode.type = 'sine'
  newVoice.oscNode.frequency.value = pitch
  newVoice.gainNode.gain.value = 0
  newVoice.oscNode.start()

  return newVoice
}

export default buildVoice
