#!/usr/bin/env node
'use strict';
const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const program = require('commander');
const version = require('./package.json').version;

const { table_metas, generate_one } = require('./tool/meta.js');

// runtime dir
const CWD = process.cwd();

program
  .version(version, '-v, --version')
  .option('-d, --dest <dest>', 'set the SQL file output path')
  .option('-f, --from <from>', 'set the directory contains the meta.json files')
  .option('-o, --output', 'show the SQL on the console')
  .parse(process.argv);

const { dest = '.', from = '.', output = false } = program;
const fromDir = path.join(CWD, from);
const destDir = path.join(CWD, dest);
// mkdir for the dest dir
mkdirp.sync(path.join(destDir));
const metas = table_metas(fromDir);
const sqls = _.map(metas, meta => {
  const sql = generate_one(meta);
  // save it
  fs.writeFileSync(path.join(destDir, meta.name + '.sql'), sql);
  if(output){
    console.log(sql);
  }
  return sql;
})

