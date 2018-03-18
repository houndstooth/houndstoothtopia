import {Color, CubeGeometry, Mesh, MeshLambertMaterial, PositionalAudio} from 'threejs-full-es6'
import listener from './listener'
import scene from '../app/scene'

const addSpeaker = () => {
    const positionalSound = new PositionalAudio(listener)
    positionalSound.setVolume(0.1)
    positionalSound.setRolloffFactor(2)
    positionalSound.setDistanceModel('exponential')
    positionalSound.getOutput().panningModel = "HRTF"

    const oscillator = listener.context.createOscillator()
    oscillator.connect(positionalSound.getOutput())
    oscillator.type = 'sine'
    oscillator.frequency.value = 555
    oscillator.start(3)
    positionalSound.setNodeSource(oscillator)

    const speaker = new Mesh(
        new CubeGeometry(1),
        new MeshLambertMaterial({color: new Color(0x664466)})
    )
    speaker.position.set(5, 1, -5)
    speaker.add(positionalSound)
    scene.add(speaker)
}

export default addSpeaker
