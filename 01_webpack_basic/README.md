global install
npm install webpack webpack-cli -g

local install with dev mode
npm install webpack webpack-cli -D
(--save-dev)=-D

local install
npm install webpack webpack-cli

use local webpack to build
npx webpack

or u can add script to package.json like this:
  "scripts": {
    "build":"webpack"  //u dont need npx
  },
then u can use "npm run build" to use webpack with local

build to specified path
npx webpack --entry ./src/ooxx.js --output-path ./dist (or ./build etc)
#default is find ./src/index.js --output-path ./dist

