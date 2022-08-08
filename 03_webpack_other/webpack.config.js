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
                type:"asset/resource"
            }
        ]
    }
}   