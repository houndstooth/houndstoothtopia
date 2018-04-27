import {items} from '../world/items'
import {Object3D} from 'three-full'

const MAX_TRIES = 30

const assignSpeaker = () => {
    let success = false
    let specificItem
    let tries = 0
    while (tries < MAX_TRIES) {
        tries++
        specificItem = randomElement(randomValue(items))
        if (specificItem && !specificItem.assigned) {
            specificItem.assigned = true
            success = true
        }
    }

    return specificItem || new Object3D()
}

const randomElement = array => array && array.length && array[Math.floor(Math.random() * array.length)]

const randomValue = object => Object.keys(object).length && object[randomElement(Object.keys(object))]

export default assignSpeaker
