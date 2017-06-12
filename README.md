# Express框架入门（nodejs的一个MVC框架）

>express.js是node.js的一个MVC开发框架，并且支持jade，ejs等多种模板

## 一、安装

全局安装：这种方式会把包安装到全局路径里边，一般是C盘的npm/node_modules/下边

```
npm install --g express
```

查看版本
```
express --version
```
如果遇到如下图所示错误，应该使用如下命令
```
npm install -g express-generator
```
![Express](/express_test/public/images/191228442519379.png "express")
## 二、创建项目express_test
```
express -e express_test
```

项目创建成功之后，生成四个文件夹，主文件app.js与配置信息文件packetage.json

* bin是项目的启动文件，配置以什么方式启动项目，默认 npm start

* public是项目的静态文件，放置js css img等文件

* routes是项目的路由信息文件,控制地址路由

* views是视图文件，放置模板文件ejs或jade等（其实就相当于html形式文件啦~)

express这样的MVC框架模式，是一个Web项目的基本构成。

## 三、启动项目

### 1、进入项目文件
```
cd express_test
```
### 2、安装依赖
```
npm install
```
### 3、启动
```
npm start
```
_**默认端口是3000，可以到bin里边的www文件查看，或者自己修改吧~**_

![Express](/express_test/public/images/191404355634870.png "express")

_**浏览器输入地址 *localhost:3000*出现如下图结果即成功了**_

![Express](/express_test/public/images/191403291884693.png "express")
