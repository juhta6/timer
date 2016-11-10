var page = new tabris.Page({
  topLevel: true
});

tabris.ui.set("toolbarVisible", false);

page.open()

var delays = 1;
var selections = "Start"
var sets = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000];

var text = new tabris.TextView({
  layoutData:{centerX: 0, top: 10},
  font: "60px"
}).appendTo(page)

var top = 40;


var timer = new tabris.InactivityTimer({
  delay: delays
}).on("timeout", function(widget){
  delays = delays + 1
  newText(widget)
  timer.set("delay", delays)
  text.set("text", delays+"ms")
  timer.start()
});

var button = new tabris.Button({
  layoutData: {bottom: 10, left: 10, right: 10, height: 70},
  font: "40px",
  text: selections
}).on("select", function(widget){
  sett(widget)
 }).appendTo(page);

function sett(widget){
   if (selections == "Start" || selections == "Resume"){
    widget.set("text", selections = "Stop")
    timer.start()
  } else if (selections == "Stop"){
  timer.cancel()
   widget.set("text", selections = "Resume")
  }
}
function newText(widget){
  for(var set of sets){
  if (delays == set){
   console.log("hit " +set+"!")
 new tabris.TextView({
  layoutData:{top: top = top + 40, centerX: 0},
   text: "hit " +set+"!",
  font: "30px",
}).appendTo(page);
  }
 }
}
