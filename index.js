import 'babel-polyfill'
import populateWorld from './src/world/populateWorld'
import attachKeyboard from './src/navigation/keyboard'
import {playSong} from './src/song'

attachKeyboard()
populateWorld()
playSong()
