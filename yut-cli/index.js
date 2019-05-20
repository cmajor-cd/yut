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
    console.log('  Create a default app project source code by yut framework.')
    console.log('    [by command]: $yut-cli create myapp')
    console.log('    [or command]: $yut-cli c myapp')
  })

program
  .command('create <name>') //'create' + option appname <name>
  .alias('c') // 'create' can replaced by 'c'
  .description('Create template app by yut framework.')
  .action(function (name) {
    if(name){
      let pwd = shell.pwd()
      let localpath = path.join(pwd.toString(), name)
      console.log('Constructing...');
      clone('https://github.com/cmajor-cd/yut-template.git', localpath,null, function(){
        shell.rm('-rf', path.join(localpath, '.git'))
        console.log('Construction is complated!')
      })
    }else{
      console.log('Syntax erroe!\n Usage: yut-cli create myproject')
    }
  })
program.parse(process.argv)