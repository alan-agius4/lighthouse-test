const { computeJSTokenLength } = require('lighthouse/lighthouse-core/lib/minification-estimator');

console.log(process.argv[2]);
const content = require('fs').readFileSync(process.argv[2], 'utf-8');
const tokenLength = computeJSTokenLength(content);
const wastedRatio = 1 - tokenLength / content.length;

console.log('Total string length: ' + content.length);
console.log('Computed token length: ' + tokenLength);
console.log('Waste percentage: ' + (wastedRatio * 100));
