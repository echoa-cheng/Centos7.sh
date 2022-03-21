1.安装gcc
yum install gcc gcc-c++
2.前往官网下载node.js需要的版本
https://nodejs.org/zh-cn/download/current/
3.解压并重命名文件夹
tar -xvf  node-v10.14.1-linux-x64.tar.gz
mv node-* node
4.添加环境变量

vi /etc/profile
在文件最后添加以下配置：

export NODE_HOME=/usr/local/node  
export PATH=$NODE_HOME/bin:$PATH
5.刷新配置

source /etc/profile
6.验证结果：
node -v
npm -v

