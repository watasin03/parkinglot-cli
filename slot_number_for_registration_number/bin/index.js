#!/usr/bin/env node

var fs = require('fs');
const yargs = require("yargs");

const options = yargs.argv;

fs.readFile('./json/parkinglot.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        var trimText = options._[0].toLowerCase();
        obj = JSON.parse(data); 
        var newArr = [];
        var text = "";
        newArr = obj.parkinglot.filter(data=> data.name === trimText)
        if(newArr.length <= 0){
            console.log('Not found');
        } else {
            for (let i = 0; i < newArr.length; i++) {
                text += newArr[i].slot+","; 
            }
            text = text.slice(0, text.length-1);
            console.log(text);
        }
        
    }
});