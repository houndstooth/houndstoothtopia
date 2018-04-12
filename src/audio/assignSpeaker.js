import {items} from '../world/items'

const assignSpeaker = () => {
    let success = false
    let specificItem
    while (!success) {
        specificItem = randomElement(randomValue(items))
        if (!specificItem.assigned) {
            specificItem.assigned = true
            success = true
        }
    }

    return specificItem
}

const randomElement = array => array[Math.floor(Math.random() * array.length)]

const randomValue = object => object[randomElement(Object.keys(object))]

export default assignSpeaker
