const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {VueLoaderPlugin} = require("vue-loader/dist/index");


module.exports = {
    target: "web",
    mode:"development",
    devtool: "source-map",
    // A method to watch when code is changed, the site will be effect.
    // watch:true,
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname, "./build"),
        filename:"js/bundle.js"
    },
    devServer: {
        //now webpack-dev-server has been delete contentBase option
        // contentBase: "./abc"
        //このオプションの意味は「webpackにてリソースがなければ、対象のパスから取得する」
        //copywebpackpluginと非常に似ている機能ですが、開発段階はstatic→directory（過去はcontentBase）を使用、
        //原因はcopyしなくて、publicを指定すればリソースを使用できる。
        //しかし、リリース段階では、すべてのリソースがパッケージ化する必要があるため、copywebpackpluginを使用することになる
        static: {
            directory: "./abc"
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
    resolve: {
        // modules: ["nodemodule"],
        //当添加extensions里的后缀后，import时可以不写后缀
        extensions: [
            ".js", ".json", ".mjs", ".vue"
        ],
        //别名可以设置路径的别名
        alias: {
            "@": path.resolve(__dirname,"./src"), //需要些./src的时候可以写成@

        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    //{loader:"style-loader"}
                    "style-loader",
                    "css-loader",
                    // {
                    //     loader:"css-loader",
                    //     options: {
                    //         esModule: false
                    //     }
                    // },
                    "postcss-loader"
                    // {
                    //     loader:"postcss-loader",
                    //     options:{
                    //         postcssOptions:{
                    //             plugins:[
                    //                 require("autoprefixer")
                    //             ]
                    //         }
                    //     }
                    // }
                ]
            },
            {
                test:/\.less/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(jpe?g|png|bmp)/,
                // use:[
                //     {
                //         loader:"file-loader",
                //         options: {
                //             name: "[name].[hash:6].[ext]",
                //             outputPath: "img"
                //         }
                //     }
                // ]
                type: "asset",
                generator: {
                    filename: "img/[name]_[hash:6][ext]"
                }
            },
            {
                test: /\.svg$/,
                type: "asset",
                generator: {
                    filename: "svg/[name]_[hash:4][ext]"
                },
                // parser: {
                //     dataUrlCondition:{
                //         maxSize: 400 * 1024 //4Kb
                //     }
                    
                // }
            },
            {
                test: /\.ttf/,
                type: "asset",
                generator: {
                    filename: "font/[name][ext]"
                }
            },
            // {
            //     test: /\.js$/,
            //     use: [
            //         {
            //             loader: "babel-loader",
            //             options: {
            //             //     plugins: [
            //             //         "@babel/plugin-transform-arrow-functions",
            //             //         "@babel/plugin-transform-block-scoping",
            //             //     ]
            //                 presets: [
            //                     "@babel/preset-env"
            //                 ]
            //             }
                        
            //         }
            //     ]
            // }
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new DefinePlugin({
            myname: "'good hcy'",
            __VUE_OPTIONS_API__  : true,
            __VUE_PROD_DEVTOOLS__ : false,
        }),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: "public",
                    // to: "",
                    globOptions:{
                        ignore: [
                            "**/index.html"
                        ]
                    }
                }
            ]
        }),
        new VueLoaderPlugin(),
    ]
}   