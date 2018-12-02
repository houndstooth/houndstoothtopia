import {houndstoothtopiaThemePattern} from '@musical-patterns/pattern-houndstoothtopia-theme'
import webVr from './webVr'
import {compilePattern} from '@musical-patterns/compiler'
import {setupPerformer} from '@musical-patterns/performer'

const playSong = async () => {
    const {spec, material} = houndstoothtopiaThemePattern
    spec.patternPositionOffset = [
        webVr.player.position.x,
        webVr.player.position.y,
        webVr.player.position.z,
    ]
    const houndstoothtopiaTheme = await compilePattern({spec, material})
    setupPerformer({autoStart: {threadSpecs: houndstoothtopiaTheme, vrb: webVr}})
}

export {
    playSong,
}
