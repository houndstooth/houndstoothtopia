const MS_PER_S = 1000

const PERCENT_SCALAR = 100

const calculateDroppedRate = data => {
    const targetDuration = MS_PER_S / data.fps
    const actualFrameCount = data.recordings.map(d => Math.round(d / targetDuration)).reduce((a, b) => a + b)
    return (actualFrameCount - data.recordings.length) * PERCENT_SCALAR / actualFrameCount
}

module.exports = calculateDroppedRate
