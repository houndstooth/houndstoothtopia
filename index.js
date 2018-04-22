import 'babel-polyfill'
import populateWorld from './src/world/populateWorld'
import prepareViewer from './src/app/prepareViewer'
import requestAnimationFrame from './src/app/requestAnimationFrame'

(async () => await populateWorld())()

prepareViewer()
requestAnimationFrame()
