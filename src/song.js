import {pattern} from '@musical-patterns/pattern-houndstoothtopia-theme'
import webVr from './webVr'
import {enableImmersiveAudio, setupPerformer} from '@musical-patterns/performer'
import {compilePattern} from '@musical-patterns/compiler'

const playSong = async () => {
    const voices = await compilePattern(pattern)
    await setupPerformer({voices})
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
