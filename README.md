# yut
A light web client app js framework, that based on OOP. You can say it's writed for C++ programmer.
# export and import
'cause the compatibility of node/ES6, the import failed will be found if export the source files from 'index.js'. The solution is export the lib by 'release/yut.js'. So, the main entry of 'package.json' is set to [ "main": "./release/yut.js", ].