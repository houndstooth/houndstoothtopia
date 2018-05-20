import perfit from 'perfit'

const CHECKING_IF_PRESENTING_INTERVAL = 1000
const BACKUP_TRIGGER_TIMEOUT = 5000

let checkingIfInVrMode

const startCheckingIfInVrMode = webVr => {
    checkingIfInVrMode = window.setInterval(() => {
        if (inVrMode(webVr)) {
            startRecordingUsingVrConfiguration(perfit)
            stopCheckingIfInVrMode()
        }
    }, CHECKING_IF_PRESENTING_INTERVAL)
}

const stopCheckingIfInVrMode = () => {
    window.clearInterval(checkingIfInVrMode)
    checkingIfInVrMode = null
}

const scheduleBackupTrigger = () => {
    window.setTimeout(() => {
        if (checkingIfInVrMode) {
            startRecording(perfit)
            stopCheckingIfInVrMode()
        }
    }, BACKUP_TRIGGER_TIMEOUT)
}

const startRecordingUsingVrConfiguration = () => {
    perfit.setConfig('fps', 90)
    startRecording(perfit)
}

const startRecording = perfit => perfit.turnOn()

const inVrMode = webVr => webVr.getIsPresenting()

const enablePerformanceTesting = webVr => {
    webVr.changeAnimate(oldAnimate => perfit.getInjectedFunction(oldAnimate))

    startCheckingIfInVrMode(webVr)

    scheduleBackupTrigger()
}

export { enablePerformanceTesting }
