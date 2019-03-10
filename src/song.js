import {snapshot} from '@musical-patterns/pattern-houndstoothtopia-theme'
import webVr from './webVr'
import {enableImmersiveAudio, setupPerformer} from '@musical-patterns/performer'

const playSong = async () => {
    await setupPerformer({voices: snapshot})
    const homePosition = [
        webVr.player.position.x,
        webVr.player.position.y,
        webVr.player.position.z,
    ]

    const toggle = document.querySelector('#toggle')
    toggle.onclick = enableImmersiveAudio({vrb: webVr, homePosition})
}

export {
    playSong,
}
