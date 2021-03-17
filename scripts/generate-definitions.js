const fs = require('fs');
const p = require("path");

const isDirectory = path => fs.statSync(path).isDirectory();
const getDirectories = path =>
fs.readdirSync(path).map(name => p.join(path, name)).filter(isDirectory);

const isFile = path => fs.statSync(path).isFile();  
const getFiles = path =>
fs.readdirSync(path).map(name => p.join(path, name)).filter(isFile);

const getFilesRecursively = (path) => {
    let dirs = getDirectories(path);
    let files = dirs
        .map(dir => getFilesRecursively(dir)) // go through each directory
        .reduce((a,b) => a.concat(b), []);    // map returns a 2d array (array of file arrays) so flatten
    return files.concat(getFiles(path)).filter(file => file.endsWith('.d.ts'));
};

const dirs = getFilesRecursively('./node_modules/@airgap/beacon-sdk/dist/cjs/')
dirs.push(...getFilesRecursively('./node_modules/@taquito/'))

const getFile = (filename) => {
    const text = fs.readFileSync(filename, { encoding: 'utf8' })
    
    return text
}

const outArray = dirs.map(dir => ({
    name: dir.substring(13).split('/dist/cjs/').join('/').split('/taquito/dist/types/').join('/'),
    dts: getFile(dir)
}))

fs.writeFileSync('./src/app/types.ts', `export const libs = ${JSON.stringify(outArray)}`)