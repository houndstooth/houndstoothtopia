import 'babel-polyfill'
import populateWorld from './src/world/populateWorld'
import startSong from './src/song/startSong'
import attachKeyboard from './src/navigation/keyboard'
import webVr from './src/webVr'

webVr.requestAnimationFrame()
attachKeyboard()
populateWorld()

// contemplated adding a constant for this approx. amount that geometry takes to load,
// but decided instead to wait for the story coming soon where the song will come out of speakers
// which this path will just add as it needs i think
window.setTimeout(startSong, 1000)
