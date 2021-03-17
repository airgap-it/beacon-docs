const fs = require('fs')

const START_STR = '/// START'
const END_STR = '/// END'

const keepBetween = (text, start, end) => {
    // console.log('')
    // console.log('')
    // console.log('')
    // console.log('checking', text)
    let cleanText = ''

    const startPos = text.indexOf(start)
    const endPos = text.indexOf(end)
    if (startPos >= 0 && endPos >= 0) {
        cleanText += text.substring(startPos + start.length, endPos)
        cleanText += keepBetween(text.substring(endPos + end.length), start, end)
    }


    return cleanText
}

const getFile = (filename) => {
    const text = fs.readFileSync(filename, { encoding: 'utf8' })
    const cleanText = keepBetween(text, START_STR, END_STR)

    const lines = cleanText.split('\n')
    

    return lines.map(l => {
        return l.startsWith('    ') ? l.substr(4) : l
    }).join('\n').trim()
}

const files = [
    'request-permissions',
    'read-previous-state',
    'send-operation',
    'connect-to-testnet',
    'enable-dark-mode',
    // 'contract-call',
    // 'handle-error-response',

    // //
    // 'subscribe-to-events',
    // 'custom-block-explorer',
]

const data = files.map(f => ({
    name: f,
    value: getFile('./src/examples/' + f + '.ts')
}))

fs.writeFileSync('./src/app/samples.ts', `export const samples = ${JSON.stringify(data)}`)