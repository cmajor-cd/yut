#!/usr/bin/env node
const packageJson = require('./package');
const program = require('commander');
const clone = require('git-clone');
const path = require('path')
const shell = require('shelljs');

program
  .version( packageJson.version, '-v, --version' )
  .description('Constructor tools of [yut framework].')
  .on('--help', () => {
    console.log('\nExample:')
    console.log('  Create a default app project source code by yut simple template.')
    console.log('    [by command]: $yut-cli newsimple myapp')
    console.log('    [or command]: $yut-cli ns myapp')
    console.log('\nExample:')
    console.log('  Create a default app project source code by yut bootstrap template.')
    console.log('    [by command]: $yut-cli newbootstrap myapp')
    console.log('    [or command]: $yut-cli nb myapp')
  })

program
  .command('newsimple <name>') //'create' + option appname <name>
  .alias('ns') // 'create' can replaced by 'c'
  .description('Create template app by yut framework.')
  .action(function (name) {
    if(name){
      let pwd = shell.pwd()
      let localpath = path.join(pwd.toString(), name)
      console.log('Constructing...');
      clone('https://gitee.com/cmajor-cd/yut-template-simple.git', localpath,null, function(){
        shell.rm('-rf', path.join(localpath, '.git'))
        console.log('Construction is complated!')
      })
    }else{
      console.log('Syntax erroe!\n Usage: yut-cli newsimple myproject')
    }
  })

  program
  .command('newbootstrap <name>') //'create' + option appname <name>
  .alias('nb') // 'create' can replaced by 'c'
  .description('Create template app by yut bootstrap framework.')
  .action(function (name) {
    if(name){
      let pwd = shell.pwd()
      let localpath = path.join(pwd.toString(), name)
      console.log('Constructing...');
      clone('https://gitee.com/cmajor-cd/yut-template-bootstrap.git', localpath,null, function(){
        shell.rm('-rf', path.join(localpath, '.git'))
        console.log('Construction is complated!')
      })
    }else{
      console.log('Syntax erroe!\n Usage: yut-cli newbootstrap myproject')
    }
  })
program.parse(process.argv)