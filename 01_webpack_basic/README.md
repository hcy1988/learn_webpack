global install
npm install webpack webpack-cli -g

local install
npm install webpack webpack-cli -D
(--save-dev)=-D

use local webpack to build
npx webpack

or u can add script to package.json like this:
  "scripts": {
    "build":"webpack"  //u dont need npx
  },
then u can use "npm run build" to use webpack with local

