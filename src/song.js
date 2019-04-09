import {pattern} from '@musical-patterns/pattern-houndstoothtopia-theme'
import webVr from './webVr'
import {enableImmersiveAudio, setupPerformer} from '@musical-patterns/material'

const playSong = async () => {
    await setupPerformer({pattern})
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
