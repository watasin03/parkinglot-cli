#!/usr/bin/env node

var fs = require('fs');
const yargs = require("yargs");
const options = yargs.argv;
var parkObj = {
    parkinglot: []
 };
var numCheck = parseInt(options._[0]);

if(!numCheck){
    console.log('Please insert number');
} else {
    fs.readFile('./json/parkinglot.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            if(!data){
                for (let i = 0; i < numCheck; i++) {
                    parkObj.parkinglot.push({
                        slot: i+1, 
                        name:"",
                        color:""
                    });
                }
                var json = JSON.stringify(parkObj);
                fs.writeFile('./json/parkinglot.json', json, 'utf8',function(err) {
                    if(err) {
                        console.log("Error Saved");
                        console.log(err);
                        
                    }
                    console.log(`Created a parking lot with ${numCheck} slots`);
                });
            } else {
                obj = JSON.parse(data); 
                if(obj.parkinglot.length >= numCheck){
                    console.log('Can not extend slot');
                } else {
                    var total = numCheck - obj.parkinglot.length;
                    for (let i = 0; i < total; i++) {
                        obj.parkinglot.push({
                            slot: obj.parkinglot.length+1, 
                            name:"",
                            color:""
                        });
                    }
                    newJson = JSON.stringify(obj);
                    fs.writeFile('./json/parkinglot.json', newJson, 'utf8', function(err) {
                        if(err) {
                            console.log("Error Saved");
                            console.log(err);
                            
                        }
                        console.log(`Created a parking lot with ${numCheck} slots`);
                    }); 
                }
            }
        }
    });
}
