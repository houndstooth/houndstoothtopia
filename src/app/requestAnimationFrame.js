import vrEffect from './vrEffect'
import animate from './animate'

const animationFunction = process.env.PERFORMANCE_TEST ? (...args) => require('./performanceTest')(animate, ...args) : animate

const requestAnimationFrame = () => {
    vrEffect.requestAnimationFrame(requestAnimationFrame)
    animationFunction()
}

export default requestAnimationFrame
