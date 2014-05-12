define("amber-sketchcode/SketchCode-Website", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Canvas"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('SketchCode-Website');
smalltalk.packages["SketchCode-Website"].transport = {"type":"amd","amdNamespace":"amber-sketchcode"};

smalltalk.addClass('About', globals.Widget, [], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(html)._h1_("Welcome to SketchCode!");
_st(html)._p_("SketchCode is an interactive general purpose programming environment that sees coding as a creative process. \x0a\x09\x09    It tries to rethink programming tools from the perspective of Design Thinking.");
$ctx1.sendIdx["p:"]=1;
_st(html)._p_("It is developed by Siemen Baader in the CMA[2] research group at Aarhus University, and part of the \x0a\x09\x09   'Creativity in Blended Interaction Spaces'[3] project, that aims at facilitating creative\x0a\x09\x09     collaboration between high school students.");
$ctx1.sendIdx["p:"]=2;
_st(html)._p_("This website is a running SketchCode environment. To learn more, or to try SketchCode live in your browser, \x0a\x09\x09    use the menu to the left.");
$ctx1.sendIdx["p:"]=3;
_st(html)._p_("Happy Hacking!");
$ctx1.sendIdx["p:"]=4;
$1=_st(html)._p_("-- Siemen");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.About)});},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html \x0a\x09\x09h1: 'Welcome to SketchCode!' ;\x0a\x0a\x09\x09p:  'SketchCode is an interactive general purpose programming environment that sees coding as a creative process. \x0a\x09\x09    It tries to rethink programming tools from the perspective of Design Thinking.' ;\x0a\x0a\x09\x09p: 'It is developed by Siemen Baader in the CMA[2] research group at Aarhus University, and part of the \x0a\x09\x09   ''Creativity in Blended Interaction Spaces''[3] project, that aims at facilitating creative\x0a\x09\x09     collaboration between high school students.' ;\x0a\x0a\x09\x09p: 'This website is a running SketchCode environment. To learn more, or to try SketchCode live in your browser, \x0a\x09\x09    use the menu to the left.' ;\x0a\x09\x09\x09\x0a\x09\x09p: 'Happy Hacking!' ;\x0a\x09\x09\x0a\x09\x09p: '-- Siemen'.\x0a",
messageSends: ["h1:", "p:"],
referencedClasses: []
}),
globals.About);



smalltalk.addClass('Website', globals.Widget, [], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html) {
var self=this;
function $About(){return globals.About||(typeof About=="undefined"?nil:About)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($About())._new())._renderOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Website)});},
args: ["html"],
source: "renderOn: html\x0a\x09\x0a\x09About new renderOn: html.",
messageSends: ["renderOn:", "new"],
referencedClasses: ["About"]
}),
globals.Website);


smalltalk.addMethod(
smalltalk.method({
selector: "render",
protocol: 'rendering',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="#main"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
_st(self._new())._appendToJQuery_("#main"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},globals.Website.klass)});},
args: [],
source: "render\x0a\x09'#main' asJQuery empty.\x0a\x09self new appendToJQuery: '#main' asJQuery.",
messageSends: ["empty", "asJQuery", "appendToJQuery:", "new"],
referencedClasses: []
}),
globals.Website.klass);

});
