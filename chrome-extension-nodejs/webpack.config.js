const path = require('path');

module.exports = {
  entry: './script.js',
  output: {
    filename: 'data.js',
    path: path.resolve(__dirname)
  }
};
