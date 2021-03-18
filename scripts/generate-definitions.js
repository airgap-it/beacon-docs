const fs = require('fs');
const getFilesRecursively = require('./get-files-in-folder')

const files = getFilesRecursively('./node_modules/@airgap/beacon-sdk/dist/cjs/').filter(file => file.endsWith('.d.ts'))
files.push(...getFilesRecursively('./node_modules/@taquito/').filter(file => file.endsWith('.d.ts')))

const getFile = (filename) => {
    const text = fs.readFileSync(filename, { encoding: 'utf8' })
    
    return text
}

const outArray = files.map(dir => ({
    name: dir.substring(13).split('/dist/cjs/').join('/').split('/taquito/dist/types/').join('/'),
    dts: getFile(dir)
}))

fs.writeFileSync('./src/app/types.ts', `export const libs = ${JSON.stringify(outArray)}`)