#!/usr/bin/env node

var fs = require('fs');
const yargs = require("yargs");

const options = yargs.argv;

var numCheck = parseInt(options._[0]);

if(!numCheck){
    console.log('Please insert number');
} else {
    fs.readFile('./json/parkinglot.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            obj = JSON.parse(data); 
            if(obj.parkinglot.length < numCheck){
                console.log(`Slot did not create`);
            } else {
                obj.parkinglot[numCheck-1].name = "";
                obj.parkinglot[numCheck-1].color = "";
                newJson = JSON.stringify(obj);
                fs.writeFile('./json/parkinglot.json', newJson, 'utf8', function(err) {
                    if(err) {
                        console.log("Error Saved");
                        console.log(err);
                        
                    }
                    console.log(`Slot number ${numCheck} is free `);
                }); 
            }
        }
    });
}