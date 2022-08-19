const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.comm.config");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    //now webpack-dev-server has been delete contentBase option
    // contentBase: "./abc"
    //このオプションの意味は「webpackにてリソースがなければ、対象のパスから取得する」
    //copywebpackpluginと非常に似ている機能ですが、開発段階はstatic→directory（過去はcontentBase）を使用、
    //原因はcopyしなくて、publicを指定すればリソースを使用できる。
    //しかし、リリース段階では、すべてのリソースがパッケージ化する必要があるため、copywebpackpluginを使用することになる
    static: {
      directory: "./public"
      //directory: "./public" 開発段階
    },
    //hot module replacement option, but vue-loader is effect to vue file
    //hot: true,
    //We can set host and port
    //host: "0.0.0.0",
    //port: 8888,
    //npm run serve will open browser automatically 
    open: true, // same to write "--open" behind "webpack serve"
    //Compress files with gzip
    // compress: true,

    //如果需要本地解决跨域请求资源的问题，可以使用proxy来实现
    // proxy: {
    //     "/api": {
    //         target: "http://localhost:8888",
    //         pathRewrite: {
    //             '^/api': ''
    //         },
    //         secure: false，   //如果需要接触https的认证证书问题，可以将secure设置为false
    //         changeOrigin: true,  //修改请求源，让代理代替自己。主要是应对某些网站过滤域名。因为不加changeOrigin的话，请求源的head是localhost，如果对象网页有check head的话，就会失败
    //     }
    // }
  },
  plugins: [
    new CleanWebpackPlugin(),
  ]
}
)