import {snapshot} from '@musical-patterns/pattern-houndstoothtopia-theme'
import webVr from './webVr'
import {enableImmersiveAudio, perform, setupPerformer} from '@musical-patterns/performer'

const playSong = async () => {
    await setupPerformer({threadSpecs: snapshot})
    const homePosition = [
        webVr.player.position.x,
        webVr.player.position.y,
        webVr.player.position.z,
    ]

    const enterImmersiveAudioHandler = enableImmersiveAudio({vrb: webVr, homePosition})
    const toggle = document.querySelector('#toggle')

    toggle.onclick = () => {
        enterImmersiveAudioHandler()
        perform(snapshot)
    }
}

export {
    playSong,
}
