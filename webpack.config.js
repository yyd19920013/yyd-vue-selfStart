const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const isDev = process.env.NODE_ENV === 'development';

//导出的配置
let config = {
    //__dirname表示文件相对于工程的路径
    entry: path.join(__dirname, 'src/main.js'),
    output: {
        filename: 'bundle.js', //生成bundle.js文件
        path: path.join(__dirname, 'dist'), //生成路径为dist
    },
    plugins: [
        new webpack.DefinePlugin({ //定义组件
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new VueLoaderPlugin(), //Vue-loader在15.*之后的版本使用都是需要伴生 VueLoaderPlugin的
        new HTMLPlugin(), //配置的只是js、css、img文件，没有html页面去容纳它们。这个时候我们用到一个webpack的一个插件html-webpack-plugin
    ],
    mode: 'none',
    module: {
        rules: [{ //通过vue-loader来识别以vue结尾的文件,正则表达式中的点需要转义
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            { //通过vue-loader来识别以vue结尾的文件
                test: /\.css$/,
                use: [ //css的处理方式不同，有嵌入在页面style标签里的，有从外部文件引入的，我们这里用use来声明
                    'style-loader', //接受vue页面的style标签文件
                    'css-loader', //接受外部引入的css文件
                ],
            },
            { //处理图片文件，url-loader其实封装了我们的file-loader，file-loader其实是将文件进行处理后换个名字存放于另一个地方
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name]-aaa.[ext]',
                    }
                }],
            }
        ]
    }
}

//开发环境添加的配置
if (isDev) {
    config.devtool = '#cheap-module-eval-source-map'; //帮我们在页面上调试代码
    config.devServer = {
        host: 'localhost', //配置成'0.0.0.0'，可以通过127.0.0.1（本地默认地址）来进行访问，同时还可以在别人的机器上来访问
        port: 8000,
        overlay: {
            erros: true,
        }
    };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(), //热加载使用插件
        new webpack.NoEmitOnErrorsPlugin() //不显示不必要的错误信息
    );
}
module.exports = config;