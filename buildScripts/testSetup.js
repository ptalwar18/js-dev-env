//This file isn't transpiled, so must use CommonJS and ES5

//Register babel to transpile before Mocha tests run
require('babel-register')();

//disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function () { };

