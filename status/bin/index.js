#!/usr/bin/env node

var Table = require('cli-table');
var fs = require('fs');
const yargs = require("yargs");

const options = yargs.argv;

fs.readFile('./json/parkinglot.json', 'utf8', function readFileCallback(err, data){
    // instantiate
    var table = new Table({
        head: ['Slot No.', 'Registration No.',' Colour']
    });
    if (err){
        console.log(err);
    } else {
        obj = JSON.parse(data); 
        // console.log(`Slot No.       Registration No.        Colour`);
        for (let i = 0; i < obj.parkinglot.length; i++) {
            table.push(
                [obj.parkinglot[i].slot,obj.parkinglot[i].name,obj.parkinglot[i].color]
            );
        }
        console.log(table.toString());
    }
});