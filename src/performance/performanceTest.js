import vr from '../vr'

let time
let fps = 90
const recordings = []

const RECORDINGS_TO_TAKE = 8192
const RECORDINGS_TO_SHAVE = 4

setTimeout(() => {
    if (!vr.isPresenting()) {
        vr.setPresenting(true)
        fps = 60
    }
}, 5000)

const update = () => {
    if (vr.isPresenting()) {
        if (time) {
            recordings.push(Date.now() - time)
        } else {
            fetch('http://localhost:8081/connected')
        }
        time = Date.now()
    }

    if (recordings.length === RECORDINGS_TO_TAKE + RECORDINGS_TO_SHAVE) {
        fetch('http://localhost:8081', {
            method: 'POST',
            body: JSON.stringify({
                recordings: recordings.slice(RECORDINGS_TO_SHAVE),
                fps,
            }),
        })
    }
}

const performanceTest = {
    update,
}

export default performanceTest
