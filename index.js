import 'babel-polyfill'
import populateWorld from './src/world/populateWorld'
import attachKeyboard from './src/navigation/keyboard'
import webVr from './src/webVr'
import {enableImmersiveAudio, restart, setupPerformer, togglePaused} from '@musical-patterns/performer'
import houndstoothtopiaTheme from '@musical-patterns/pattern-houndstoothtopia-theme'

webVr.requestAnimationFrame()
attachKeyboard()
populateWorld()

setupPerformer({
    onUpdate: () => {
    },
})
enableImmersiveAudio({vrb: webVr})
restart(houndstoothtopiaTheme)
togglePaused()
