#!/usr/bin/env node
var args    = process.argv;
var root    = args.length >= 3 ? args [2] : process.cwd();

var modules = "./modules";

var Server = require (modules + "/Server.js");
var Script = require (modules + "/Script.js").Script;
var Path   = require (modules + "/Path.js").Path;

Path.root = root;

console.log (`Saving to directory ${root}`);

Server.emitter.on (Server.events.SaveScript, (scriptContents) => {
  Script.save (scriptContents).then (()=>{
    console.log ("Script saved");
  }, console.error);
});
