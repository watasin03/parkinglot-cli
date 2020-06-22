#!/usr/bin/env node

var fs = require('fs');
const yargs = require("yargs");

const options = yargs.argv;

const text = options._;

fs.readFile('./json/parkinglot.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        if(!data){
            console.log(`No Parkinglot create`);
        } else {
            obj = JSON.parse(data); 
            for (let i = 0; i < obj.parkinglot.length; i++) {

                if (obj.parkinglot[i].name == "") {
                    obj.parkinglot[i].name = text[0];
                    obj.parkinglot[i].color = text[1];
                    var json = JSON.stringify(obj);
                    fs.writeFile('./json/parkinglot.json', json, 'utf8',function(err) {
                        if(err) {
                            console.log("Error Saved");
                            console.log(err);
                        }
                    });
                    console.log(`Allocated slot number: ${ obj.parkinglot[i].slot}`);
                    return;
                } else if(obj.parkinglot[i].name == text[0] && obj.parkinglot[i].color == text[1]){
                    console.log(`Allocated slot already exits`);
                    return;
                } else {
                    continue;
                }
            }
            console.log('Sorry, parking lot is full ');
        }
    }
});