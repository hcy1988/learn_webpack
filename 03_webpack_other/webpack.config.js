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
                    {
                        loader:"css-loader",
                        options: {
                            esModule: false
                        }
                    },
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
                use:[
                    {
                        loader:"file-loader",
                        options: {
                            name: "[name].[hash:6].[ext]",
                            outputPath: "img"
                        }
                    }
                ]
            }
        ]
    }
}   