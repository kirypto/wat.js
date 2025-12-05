const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../src/wat.js');
const outputFile = path.join(__dirname, '../dist/wat.js');

let content = fs.readFileSync(inputFile, 'utf8');

content = content
    .replace(/\/\*\*[\s\S]*?\*\//g, '') // Remove multi-line comments (including JSDoc /** ... */)
    .replace(/\/\/.*$/gm, '') // Remove single-line comments
    .replace(/\s+$/gm, '') // Remove white space at the end of the line
    .replace(/\n\s*\n/g, '\n') // Remove blank lines
    .trimEnd(); // Trim trailing whitespace/newlines

const distDir = path.dirname(outputFile);
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

fs.writeFileSync(outputFile, content, 'utf8');

console.log('✓ Stripped comments and cleaned wat.js');
console.log(`  Output: ${outputFile}`);

