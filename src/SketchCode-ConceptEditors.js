define("amber-sketchcode/SketchCode-ConceptEditors", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Canvas"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('SketchCode-ConceptEditors');
smalltalk.packages["SketchCode-ConceptEditors"].transport = {"type":"amd","amdNamespace":"amber-sketchcode"};

smalltalk.addClass('StateChart', globals.Widget, [], 'SketchCode-ConceptEditors');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
var temporary,variable,names;
return self;},
args: [],
source: "initialize\x0a\x09\x22comment stating purpose of message\x22\x0a\x0a\x09| temporary variable names |",
messageSends: [],
referencedClasses: []
}),
globals.StateChart);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$2;
_st(_st(html)._div())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._table();
_st($1)._class_("table table-condensed table-hover");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._thead())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$3=_st(html)._th();
$ctx4.sendIdx["th"]=1;
_st($3)._with_("&nbsp");
$ctx4.sendIdx["with:"]=4;
$4=_st(html)._th();
$ctx4.sendIdx["th"]=2;
_st($4)._with_("inactive");
$ctx4.sendIdx["with:"]=5;
$5=_st(html)._th();
$ctx4.sendIdx["th"]=3;
_st($5)._with_("paused");
$ctx4.sendIdx["with:"]=6;
$6=_st(html)._th();
$ctx4.sendIdx["th"]=4;
_st($6)._with_("fading-in");
$ctx4.sendIdx["with:"]=7;
$7=_st(html)._th();
$ctx4.sendIdx["th"]=5;
_st($7)._with_("shown");
$ctx4.sendIdx["with:"]=8;
$8=_st(html)._th();
$ctx4.sendIdx["th"]=6;
return _st($8)._with_("fading-out");
$ctx4.sendIdx["with:"]=9;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$9=_st(html)._tr();
$ctx4.sendIdx["tr"]=1;
_st($9)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$10=_st(html)._th();
$ctx5.sendIdx["th"]=7;
_st($10)._with_("mouseover");
$ctx5.sendIdx["with:"]=12;
$11=_st(html)._td();
$ctx5.sendIdx["td"]=1;
_st($11)._with_("foo [dropdown]");
$ctx5.sendIdx["with:"]=13;
_st(html)._td();
$ctx5.sendIdx["td"]=2;
_st(html)._td();
$ctx5.sendIdx["td"]=3;
_st(html)._td();
$ctx5.sendIdx["td"]=4;
$12=_st(html)._td();
$ctx5.sendIdx["td"]=5;
return $12;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)})}));
$ctx4.sendIdx["with:"]=11;
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._th())._with_("mouseover");
$ctx5.sendIdx["with:"]=15;
$13=_st(html)._td();
$ctx5.sendIdx["td"]=6;
_st($13)._with_("foo [dropdown]");
_st($13)._td();
$ctx5.sendIdx["td"]=7;
_st($13)._td();
$ctx5.sendIdx["td"]=8;
_st($13)._td();
$ctx5.sendIdx["td"]=9;
$14=_st($13)._td();
return $14;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)})}));
$ctx4.sendIdx["with:"]=14;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["with:"]=10;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.StateChart)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22comment stating purpose of message\x22\x0a\x09html div with: [\x0a\x09\x09html table class: 'table table-condensed table-hover'; with: [\x0a\x09\x09\x09html thead with: [\x0a\x09\x09\x09\x09html th with: '&nbsp'.\x0a\x09\x09\x09\x09html th with: 'inactive'.\x0a\x09\x09\x09\x09html th with: 'paused'.\x0a\x09\x09\x09\x09html th with: 'fading-in'.\x0a\x09\x09\x09\x09html th with: 'shown'.\x0a\x09\x09\x09\x09html th with: 'fading-out'.\x0a\x09\x09\x09].\x0a\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09html th with: 'mouseover'.\x0a\x09\x09\x09\x09\x09html td with: 'foo [dropdown]'.\x0a\x09\x09\x09\x09\x09html td ; td; td; td. ].\x0a\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09html th with: 'mouseover'.\x0a\x09\x09\x09\x09\x09html td with: 'foo [dropdown]'; td ; td; td; td.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].",
messageSends: ["with:", "div", "class:", "table", "thead", "th", "tbody", "tr", "td"],
referencedClasses: []
}),
globals.StateChart);


});
