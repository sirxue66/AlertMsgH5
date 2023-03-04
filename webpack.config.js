const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./test.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "alertmsgh5.min.js",
        // library: {
        //     name: 'AlertMsgH5',
        //     type: 'umd',
        //   },
    },
    mode: "production",
    stats: "errors-only",
    devServer: {
        port: 8001,
        hot: true,
        open: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "AlertMsgH5",
            template: "./index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)/i,
                type: "asset/resource"
            },
            {
                test: /\.css/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}