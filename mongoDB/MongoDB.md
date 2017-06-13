# mongoDB入门

## 一、简介
### MongoDB
###### 开源，高新能的NoSQL数据库；支持索引、集群、复制和故障转移、各种语言的驱动程序；高伸缩性；
### node-mongodb-native
###### mongodb的nodejs驱动

## 二、MongoDB安装（Windows）

### 1、下载MongoDB并安装
###### 下载地址：_[http://www.mongodb.org/downloads](http://www.mongodb.org/downloads "MongoDB Downloads")_

### 2、创建数据库和日志存放目录
###### 在C盘根目录下新建“M\_DB”和“M\_LOG”两个文件夹，分别存放数据库文件和日志文件

### 3、创建一个config文件

###### 打开目录“C:\Program Files\MongoDB\Server\3.4\bin”，并在此目录下新建一个mongo.config文件，文件内容如下

	##数据库目录
	dbpath=C:\M_DB

	##日志输出文件
	logpath=C:\M_LOG\mongodb.log

### 4、添加环境变量
###### 在环境变量PATH中加入“C:\Program Files\MongoDB\Server\3.4\bin”
### 5、以Windows服务器运行MongoDB

###### 以管理员方式打开CMD窗口，运行如下命令安装MongoDB服务，可以在 “控制面板\所有控制面板项\管理工具\服务”找到名为“MongoDB”的服务右键启动

```
mongod --config "C:\Program Files\MongoDB 2.6 Standard\bin\mongo.config" --install
```

### 6、启动服务
###### 在CMD窗口中运行如下命令，也可以在可以在 “控制面板\所有控制面板项\管理工具\服务”
```
net start mongodb
```

### 测试连接
######在CMD中运行如下命令，查看结果
```
mongo
```

# _**安装成功！**_

_**最后两步非必需；MongoDB默认端口是27017，可以修改！**_

 

###### 对于“C:\Program Files\MongoDB 2.6 Standard\bin”目录下的exe程序，做个简单的说明，可能更利于了解可以做些什么操作，基础学习关注mongod.exe和mongo.exe即可

* mongo.exe：客户端，支持js语法

* mongod.exe：服务端

* mongodump.exe：备份工具

* mongorestore.exe：恢复工具

* mongoexport.exe：导出工具

* mongoimport.exe：导入工具

* mongostat.exe：实时性能监控工具

* mongotop.exe：跟踪MongDB实例读写时间工具

 

##### 更多详细解释或操作可以查看：_[http://docs.mongodb.org/manual/reference/program/]("http://docs.mongodb.org/manual/reference/program/")_

## MongoDB基本语法和操作入门(mongo.exe客户端操作)
>MongoDB已经安装好，下面先对MongoDB进行一个简单的入门，再用node-mongodb-native去操作MongoDB

###　库操作

* 新建数据库：第一步：use 新建数据库名；第二步：进行此库相关的操作；如果不进行第二步，该数据库不会被创建

* 查看数据库：show dbs;

* 新建表：db.createCollection('要新建的表名');

* 查看当前数据库下表： show collections;

* 删除当前数据库指定表：db.表名.drop();

* 删除当前数据库：db.dropDatabase();



_**1.默认为存在“admin”和“local”两个数据库；admin数据库是存放管理员信息的数据库，认证会用到；local是存放replication相关的数据；这两处本篇都没有涉及到；**_

_**2.find();是个查询操作，后面会讲到，上面用到主要是为了演示use不存在的库后，进行相关操作会创建出这个库；**_

_**3.MongoDB没有像MySQL或MSSQL等数据库这么严格的规定，不是非得要先建库、建表、建各种字段，以后的操作中慢慢的会体会到^_^！**_

## nodejs操作MongoDB
```
npm install mongodb
```
## 写在之后...
>本篇针对node-mongodb-native操作MongoDB没有做更深的讲解，原因是针对它的进行再次封装的东西很多，且更利于编程实现，比如：mongoose、mongoskin、mongolian等等，应用性不错；

　　mongoose的可能用的比较多...

　　本文中很多地方我都还是习惯的用表、行等术语去描述，其实对NoSQL来说并不对，只是有助于习惯了关系型数据库的开发人员来解；

　　文章中“表”本应该描述为“collection(集合)”；“行”应该描述为“文档（document）”,一个database中可以有多个collection，一个collection中又可以有多个document

　　文章中并没有涉及认证的部分，大家自行去补一下，非常简单，我文中也挺到了两个默认数据库中的“admin”数据库

　　用CMD中使用mongo.exe操作时，插入中文遇一了问题，原因是MongoDB默认编辑是utf-8，而CMD是GBK，所以在CMD窗口中执行这个命令修改编辑即可：chcp 65001

　　注意mongodb严格区分大小写，比如查询 db.tb2.find({"name":"wilson0"})和 db.tb2.find({"Name":"wilson0"}) 并不是用的同一字段做的条件；

 

## **主要参考资料**：

### [http://docs.mongodb.org/manual/]("http://docs.mongodb.org/manual/")

### [https://github.com/mongodb/node-mongodb-native]("https://github.com/mongodb/node-mongodb-native")

######MongoDB权威指南


> ###### 本文出处：_[http://www.cnblogs.com/zhongweiv/p/node_mongodb.html]("http://www.cnblogs.com/zhongweiv/p/node_mongodb.html")_



# _MongoVUE不支持mongodb3.0以上版本！！！_