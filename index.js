import 'babel-polyfill'
import populateWorld from './src/world/populateWorld'
import attachKeyboard from './src/navigation/keyboard'
import {setupSong} from './src/song'

attachKeyboard()
populateWorld().then()
setupSong().then()
