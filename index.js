import 'babel-polyfill'
import populateWorld from './src/world/populateWorld'
import attachKeyboard from './src/navigation/keyboard'
import webVr from './src/webVr'
import {playSong} from './src/song'

webVr.requestAnimationFrame()
attachKeyboard()
populateWorld()
playSong()
