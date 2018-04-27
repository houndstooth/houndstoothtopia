const fs = require('fs')
const readline = require('readline')
const process = require('process')
const cp = require('child_process')
const os = require('os')

const macSedTweak = os.platform() === 'win32' ? '' : "'' -e "

fs.readdir('./geometry', (err, infiles) => {
    infiles.forEach(name => {
        const infile = './geometry/' + name
        if (infile.slice(-3) === 'mtl') {
            fs.unlink(infile, () => {
            })
            return
        }

        const rl = readline.createInterface({
            input: fs.createReadStream(infile),
            output: process.stdout,
            terminal: false
        })
        const outfile = infile + '.snapped'

        rl
            .on('line', line => processLine(outfile, line))
            .on('close', () => {
                cp.execSync(`obj-simplify -in ${outfile} -out ${infile}`, {
                    stdio: 'inherit',
                    stderr: 'inherit',
                    shell: true
                })
                fs.unlinkSync(outfile)
                cp.execSync(`sed -i ${macSedTweak}'/^[#lmosu].*$/d' ${infile}`, {
                    stdio: 'inherit',
                    stderr: 'inherit',
                    shell: true
                })
                fs.readFile(infile, 'utf8', (err, data) => {
                    const linesExceptFirst = data.split('\n').filter(line => line !== '').join('\n')
                    fs.writeFile(infile, linesExceptFirst, () => {
                    })
                }, () => {
                })
            })
    })
})

const processLine = (outfile, line) => {
    const splitLine = line.split(' ')

    const header = splitLine.shift()
    if (header === 'f') {
        fs.appendFileSync(outfile, line + '\n')
        return
    }
    if (header !== 'v' && header !== 'vn') return

    fs.appendFileSync(
        outfile,
        [header].concat(
            splitLine.map(chunk => maybeSnap(
                parseFloat(chunk),
                header === 'v' ? 5 : 3
            ))
        ).join(' ') + '\n'
    )
}

const maybeSnap = (value, precision) => {
    const decimalPart = Math.abs(value % 1)
    const snapDecimalPart = findClosest(decimalPart, snapDecimalParts[precision])

    const pow = Math.pow(10, precision + 1)
    const maxDelta = Math.pow(10, -precision) / 2
    const delta = Math.round(Math.abs(decimalPart - snapDecimalPart) * pow) / pow

    const isNegative = value < 0
    const negatator = isNegative ? -1 : 1
    const result = delta <= maxDelta ? negatator * (Math.abs(value) - decimalPart + snapDecimalPart) : value

    return result.toString().slice(0, isNegative ? 9 : 8)
}

const baseDecimalParts = [
    0,
    0.5,
    0.333333,
    0.25,
    0.2,
    0.4,
    0.166667,
    0.142857,
    0.285714,
    0.428571,
    0.125,
    0.375,
    0.111111,
    0.222222,
    0.444444,
    0.1,
    0.3,
    0.414214, // sqrt 2
    0.828427, // sqrt 2 * 2
    0.707107, // sqrt 2 * 1/2
    0.121320, // sqrt 2 * 3/2
    0.353554, // sqrt 2 * 1/4
    0.146446, // (2 - sqrt 2) * 1/4
    0.732051, // sqrt 3
    0.242641, // sqrt 2 * 3
    0.485281, // sqrt 2 * 6
    0.727922, // sqrt 2 * 9
    0.970562, // sqrt 2 * 12
    0.154701, // 2 * sqrt(1/3)
    0.788676, // (3 + sqrt(3)) / 6
    0.408248, // sqrt (2/3) / 2
    0.816497, // sqrt (2/3)
    0.577350, // sqrt (1/3)
    0.894338, // 1/12(9 + sqrt(3))
    0.447169, // 1/24(9 + sqrt(3))
]

const baseDecimalPartsBothWays = baseDecimalParts
    .concat(baseDecimalParts.map(decimalPart => 1 - decimalPart)).sort()

const snapDecimalParts = {
    [5]: baseDecimalPartsBothWays,
    [3]: baseDecimalPartsBothWays.map(baseDecimal => parseFloat(baseDecimal.toPrecision(4)))
}

const findClosest = (value, array) => {
    let mid
    let lo = 0
    let hi = array.length - 1
    while (hi - lo > 1) {
        mid = Math.floor((lo + hi) / 2)
        if (array[mid] < value) {
            lo = mid
        } else {
            hi = mid
        }
    }
    if (value - array[lo] <= array[hi] - value) {
        return array[lo]
    }
    return array[hi]
}
