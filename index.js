import 'babel-polyfill'
import populateWorld from './src/world/populateWorld'
import prepareViewer from './src/app/prepareViewer'
import animate from './src/app/animate'

(async () => await populateWorld())()

prepareViewer()
animate()
