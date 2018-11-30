import 'babel-polyfill'
import populateWorld from './src/world/populateWorld'
import attachKeyboard from './src/navigation/keyboard'
import webVr from './src/webVr'
import {setupPerformer} from '@musical-patterns/performer'
import houndstoothtopiaTheme from '@musical-patterns/pattern-houndstoothtopia-theme'

webVr.requestAnimationFrame()
attachKeyboard()
populateWorld()

setupPerformer({autoStart: {threadSpecs: houndstoothtopiaTheme, vrb: webVr}})
