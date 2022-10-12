import {pattern} from "@musical-patterns/pattern-houndstoothtopia-theme"
import {setupPerformer, play} from "@musical-patterns/material"

const setupSong = async () => {
    await setupPerformer({pattern})
}

const song = document.querySelector("#song")
song.onclick = () => {
    play()
}

export {
    setupSong,
}
