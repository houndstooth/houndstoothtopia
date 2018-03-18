import 'babel-polyfill'
import populateWorld from './src/world/populateWorld'
import prepareViewer from './src/app/prepareViewer'
import requestAnimationFrame from './src/app/requestAnimationFrame'
import startSong from './src/audio/startSong'
import './src/app/keyboard'

(async () => await populateWorld())()

prepareViewer()
requestAnimationFrame()

setTimeout(startSong, 1000)
