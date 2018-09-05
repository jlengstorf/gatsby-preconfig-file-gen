const fs = require('fs');
const tempy = require('tempy');

// Get a random temporary JS file path.
const tmpFile = tempy.file({ extension: 'js' });
const content = `
// This is a generated file. Do not edit this, lest your changes be lost to eternity.
module.exports = function() {
  return 'Generated Data';
}
`;

// Write content to the temporary file.
fs.writeFileSync(tmpFile, content, 'utf8');

// Load the file we just created and use it!
const testFunc = require(tmpFile);
const testVal = testFunc();

// Gatsby config as usual, using values from our temp file.
module.exports = {
  siteMetadata: {
    title: testVal
  }
};
