import { snapshot } from '@musical-patterns/pattern-houndstoothtopia-theme'
import webVr from './webVr'
import {setupPerformer} from '@musical-patterns/performer'

const playSong = async () => {
    await setupPerformer({
        autoStart: {
            homePosition: [
                webVr.player.position.x,
                webVr.player.position.y,
                webVr.player.position.z,
            ],
            threadSpecs: snapshot,
            vrb: webVr,
        },
    })
}

export {
    playSong,
}
