const express = require('express');
const app = express();
const fs = require('fs');
const readline = require('readline');
const {parse} = require('csv-parse')
// const {parse} = require('fast-csv');
// var i=1;
// fs.createReadStream('employee.csv').pipe(parse({skipRows:1,delimiter:','}))
// .on('error',(err)=>{ console.log(err)})
// .on('data',(row) => {
//     console.log(row)
// })
const data = []
fs.createReadStream('employee.csv')
  .pipe(parse({ delimiter: ',' }))
  .on('data', (r) => {
   // console.log(r);
    data.push(r);        
  })
  .on('end', () => {
    console.log(data);
    console.log(typeof(data[0]))
  })

 
app.listen(3000,()=>{
    console.log('server is runing');
})