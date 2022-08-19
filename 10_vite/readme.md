proto:
use "npx vite" to run a server
use "npx vite build" to build

I change them in package.json
now please use npm run serve, build, preview

use postcss in vite
npm install postcss -D
npm install postcss-preset-env -D
and create postcss.config.js

module.exports = {
  plugins: [
    require("postcss-preset-env")
  ]
}

