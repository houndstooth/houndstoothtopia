import 'babel-polyfill'
import populateWorld from './src/world/populateWorld'
import prepareViewer from './src/app/prepareViewer'
import requestAnimationFrame from './src/app/requestAnimationFrame'
import startSong from './src/audio/startSong'
import './src/app/keyboard'

prepareViewer()
requestAnimationFrame()
populateWorld()

// contemplated adding a constant for this approx. amount that geometry takes to load,
// but decided instead to wait for the story coming soon where the song will come out of speakers
// which this path will just add as it needs i think
setTimeout(startSong, 1000)
