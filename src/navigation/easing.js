import TWEEN from '@tweenjs/tween.js'

export const ease = (object, property, target, easingTime, onComplete = () => {
}) => {
    new TWEEN.Tween(object)
        .to({[property]: target}, easingTime)
        .easing(TWEEN.Easing.Quintic.Out)
        .onComplete(onComplete)
        .start()
}

const easing = {
    update: () => TWEEN.update(),
}

export default easing
