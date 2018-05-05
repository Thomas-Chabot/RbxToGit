var args    = process.argv;
var root    = args.length >= 3 ? args [2] : "./games";

var modules = "./modules";

var Server = require (modules + "/Server.js");
var Script = require (modules + "/Script.js").Script;
var Path   = require (modules + "/Path.js").Path;

Path.root = root;

Server.emitter.on (Server.events.SaveScript, (scriptContents) => {
  Script.save (scriptContents).then (()=>{}, console.error);
});
