cd到开发目录， 创建打包平台
  ionic platform add android
  ionic platform add ios 

1. 下载安装jdk 1.8    http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
2. 下载安装 android sdk     https://developer.android.com/studio/install.html?pkg=tools
3. 下载更新不同版本的  sdk   config 配置更新


4. ionic build android

发布android App生产秘钥步骤
1. cd到apk文件所在目录
2. 运行下面代码，按照提示操作，秘钥文件将存储到/users/zhangxuchao/文件夹中

keytool -genkey -v -keystore android.keystore -alias android -keyalg RSA -validity 20000 -keystore /Users/zhangxuchao/android_demo.keystore
