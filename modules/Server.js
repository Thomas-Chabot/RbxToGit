var events     = require ("events");
var express    = require ("express");
var bodyParser = require ("body-parser");

var app     = express ();
var evt     = new events.EventEmitter ();

const PORT  = 2402;

const EVENTS = {
  SaveScript: 'SaveScript'
}

app.use (bodyParser.text ());

app.post ("/post", function (req, res) {
  evt.emit ('SaveScript', req.body);
	res.sendStatus (200);
});

app.listen (PORT, ()=>{
	console.log ("Listening on port 2402");
});

module.exports.emitter = evt;
module.exports.events  = EVENTS;
