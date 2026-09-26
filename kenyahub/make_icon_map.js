const fs = require('fs');

const content = fs.readFileSync('src/lib/tools-registry.ts', 'utf8');
const matches = [...content.matchAll(/icon:\s*'([^']+)'/g)];
const uniqueIcons = [...new Set(matches.map(m => m[1]))];

console.log(uniqueIcons.join(', '));
