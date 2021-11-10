# yyd-vue-selfStart
使用webpack从0开始搭建vue项目步骤：

1、创建项目文件夹，在文件夹下npm init。全部回车，初始化项目，生成package.json

2、cnpm i vue@2.6.12 -S     安装运行依赖

3、cnpm i css-loader@5.2.4 style-loader@2.0.0 file-loader@6.2.0 url-loader@4.1.1 vue-loader@15.9.6 html-webpack-plugin@4.5.2 webpack@4.46.0 webpack-cli@3.3.12 webpack-dev-server@3.11.2 vue-template-compiler@2.6.12 cross-env -D     安装开发依赖

4、在package.json文件的scripts中添加命令
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js --open"

5、创建webpack.config.js文件，并写入配置

6、创建src文件夹，在里面创建App.vue和main.js文件，main.js插入一个dom元素，并用new Vue把App.vue文件挂载到元素上

7、npm run dev启动项目
