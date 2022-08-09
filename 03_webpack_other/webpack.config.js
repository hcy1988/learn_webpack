const path = require("path")

module.exports = {
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname, "./build"),
        filename:"bundle.js"
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
            }
        ]
    }
}   