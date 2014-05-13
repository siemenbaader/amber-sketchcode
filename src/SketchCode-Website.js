define("amber-sketchcode/SketchCode-Website", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Canvas"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('SketchCode-Website');
smalltalk.packages["SketchCode-Website"].transport = {"type":"amd","amdNamespace":"amber-sketchcode"};

smalltalk.addClass('Navigation', globals.Widget, [], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'as yet unclassified',
fn: function (html) {
var self=this;
function $Website(){return globals.Website||(typeof Website=="undefined"?nil:Website)}
return smalltalk.withContext(function($ctx1) { 
var $1,$4,$3,$5,$6,$2;
_st(_st(html)._nav())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._ul();
_st($1)._class_("nav nav-pills nav-stacked span4");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st($Website())._current();
$ctx3.sendIdx["current"]=1;
$3=_st($4)._pages();
return _st($3)._do_((function(page){
return smalltalk.withContext(function($ctx4) {
$5=_st(html)._a();
_st($5)._href_("#");
_st($5)._with_(_st(_st(page)._class())._name());
$6=_st($5)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(_st($Website())._current())._show_(page);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
return _st(html)._li_($6);
}, function($ctx4) {$ctx4.fillBlock({page:page},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Navigation)});},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html nav with: [\x0a\x09\x09html ul class: 'nav nav-pills nav-stacked span4'; with: [\x0a\x09\x09\x09Website current pages do: [:page |\x0a\x09\x09\x09\x0a\x09\x09\x09\x09html li: (html a href: '#'; with: page class name; onClick: [ Website current show: page]).\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].",
messageSends: ["with:", "nav", "class:", "ul", "do:", "pages", "current", "li:", "href:", "a", "name", "class", "onClick:", "show:"],
referencedClasses: ["Website"]
}),
globals.Navigation);


globals.Navigation.klass.iVarNames = ['singletonInstance'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@singletonInstance"];
if(($receiver = $1) == nil || $receiver == null){
self["@singletonInstance"]=self._new();
self["@singletonInstance"];
} else {
$1;
};
$2=self["@singletonInstance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.Navigation.klass)});},
args: [],
source: "current\x0a\x0a\x09singletonInstance ifNil: [ singletonInstance := self new ].\x0a\x0a\x09^ singletonInstance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.Navigation.klass);


smalltalk.addClass('Page', globals.Widget, ['pageDomElement'], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "hide",
protocol: 'navigation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@pageDomElement"])._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},globals.Page)});},
args: [],
source: "hide\x0a\x09pageDomElement asJQuery hide.",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
globals.Page);

smalltalk.addMethod(
smalltalk.method({
selector: "hideAll",
protocol: 'navigation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._class())._subclasses())._do_((function(page){
return smalltalk.withContext(function($ctx2) {
return _st(page)._hide();
}, function($ctx2) {$ctx2.fillBlock({page:page},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"hideAll",{},globals.Page)});},
args: [],
source: "hideAll\x0a\x0a\x09self class subclasses do: [:page | page hide].",
messageSends: ["do:", "subclasses", "class", "hide"],
referencedClasses: []
}),
globals.Page);

smalltalk.addMethod(
smalltalk.method({
selector: "htmlFrom:",
protocol: 'rendering',
fn: function (aMarkdownString) {
var self=this;
var converter;
return smalltalk.withContext(function($ctx1) { 
var $1;
converter=_st(_st(_st(require)._value_("showdown"))._at_("converter"))._new();
$1=_st(converter)._makeHtml_(aMarkdownString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"htmlFrom:",{aMarkdownString:aMarkdownString,converter:converter},globals.Page)});},
args: ["aMarkdownString"],
source: "htmlFrom: aMarkdownString\x0a\x0a\x09|converter|\x0a\x0a\x09converter := ((require value: 'showdown') at: 'converter') new.\x0a\x09^ converter makeHtml: aMarkdownString",
messageSends: ["new", "at:", "value:", "makeHtml:"],
referencedClasses: []
}),
globals.Page);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
protocol: 'properties',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},globals.Page)});},
args: [],
source: "name\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Page);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._sublcassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.Page)});},
args: ["html"],
source: "renderContentOn: html\x0a\x09self sublcassResponsibility.",
messageSends: ["sublcassResponsibility"],
referencedClasses: []
}),
globals.Page);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._div();
_st($1)._class_("page");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return self._renderContentOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self["@pageDomElement"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Page)});},
args: ["html"],
source: "renderOn: html\x0a\x09pageDomElement := html div \x0a\x09\x09class: 'page' ;\x0a\x09\x09with: [\x0a\x09\x09self renderContentOn: html\x0a\x09].",
messageSends: ["class:", "div", "with:", "renderContentOn:"],
referencedClasses: []
}),
globals.Page);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
protocol: 'navigation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@pageDomElement"])._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},globals.Page)});},
args: [],
source: "show\x0a\x09pageDomElement asJQuery show.",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
globals.Page);


smalltalk.addMethod(
smalltalk.method({
selector: "all",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclasses();
return $1;
}, function($ctx1) {$ctx1.fill(self,"all",{},globals.Page.klass)});},
args: [],
source: "all\x0a\x0a\x09^ self subclasses",
messageSends: ["subclasses"],
referencedClasses: []
}),
globals.Page.klass);


smalltalk.addClass('About', globals.Page, [], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
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
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.About)});},
args: ["html"],
source: "renderContentOn: html\x0a\x0a\x09html \x0a\x09\x09h1: 'Welcome to SketchCode!' ;\x0a\x0a\x09\x09p:  'SketchCode is an interactive general purpose programming environment that sees coding as a creative process. \x0a\x09\x09    It tries to rethink programming tools from the perspective of Design Thinking.' ;\x0a\x0a\x09\x09p: 'It is developed by Siemen Baader in the CMA[2] research group at Aarhus University, and part of the \x0a\x09\x09   ''Creativity in Blended Interaction Spaces''[3] project, that aims at facilitating creative\x0a\x09\x09     collaboration between high school students.' ;\x0a\x0a\x09\x09p: 'This website is a running SketchCode environment. To learn more, or to try SketchCode live in your browser, \x0a\x09\x09    use the menu to the left.' ;\x0a\x09\x09\x09\x0a\x09\x09p: 'Happy Hacking!' ;\x0a\x09\x09\x0a\x09\x09p: '-- Siemen'.",
messageSends: ["h1:", "p:"],
referencedClasses: []
}),
globals.About);



smalltalk.addClass('InstrumentalInteraction', globals.Page, [], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'as yet unclassified',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_("A blog post and hopefylly live examples \x0a\x09  on the use of instrumental interaction for the \x0a\x09  workshop to come here");
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.InstrumentalInteraction)});},
args: ["html"],
source: "renderContentOn: html\x0a\x0a\x09html with: 'A blog post and hopefylly live examples \x0a\x09  on the use of instrumental interaction for the \x0a\x09  workshop to come here'.",
messageSends: ["with:"],
referencedClasses: []
}),
globals.InstrumentalInteraction);



smalltalk.addClass('ResearchAgenda', globals.Page, [], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "content",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
return "#Hello form markdown";
},
args: [],
source: "content\x0a\x0a\x09^ '#Hello form markdown'",
messageSends: [],
referencedClasses: []
}),
globals.ResearchAgenda);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'as yet unclassified',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(html)._div())._asJQuery())._append_(self._htmlFrom_(self._content()));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.ResearchAgenda)});},
args: ["html"],
source: "renderContentOn: html\x0a\x0a\x09html div asJQuery append: \x0a\x09\x09(self htmlFrom: self content)",
messageSends: ["append:", "asJQuery", "div", "htmlFrom:", "content"],
referencedClasses: []
}),
globals.ResearchAgenda);



smalltalk.addClass('ResearchHistory', globals.Page, [], 'SketchCode-Website');


smalltalk.addClass('TryIt', globals.Page, [], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'as yet unclassified',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._with_("try it..");
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.TryIt)});},
args: ["html"],
source: "renderContentOn: html\x0a\x0a\x09html with: 'try it..'",
messageSends: ["with:"],
referencedClasses: []
}),
globals.TryIt);



smalltalk.addClass('Website', globals.Widget, ['pages'], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "container",
protocol: 'rendering',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("body"._asJQuery())._find_(".container");
return $1;
}, function($ctx1) {$ctx1.fill(self,"container",{},globals.Website)});},
args: [],
source: "container\x0a\x0a\x09^ 'body' asJQuery find: '.container'",
messageSends: ["find:", "asJQuery"],
referencedClasses: []
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "hideAllPages",
protocol: 'rendering',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@pages"])._do_((function(page){
return smalltalk.withContext(function($ctx2) {
return _st(page)._hide();
}, function($ctx2) {$ctx2.fillBlock({page:page},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"hideAllPages",{},globals.Website)});},
args: [],
source: "hideAllPages\x0a\x09pages do: [:page | page hide]",
messageSends: ["do:", "hide"],
referencedClasses: []
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
function $About(){return globals.About||(typeof About=="undefined"?nil:About)}
function $ResearchAgenda(){return globals.ResearchAgenda||(typeof ResearchAgenda=="undefined"?nil:ResearchAgenda)}
function $TryIt(){return globals.TryIt||(typeof TryIt=="undefined"?nil:TryIt)}
function $InstrumentalInteraction(){return globals.InstrumentalInteraction||(typeof InstrumentalInteraction=="undefined"?nil:InstrumentalInteraction)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
$1=_st($Array())._new();
$ctx1.sendIdx["new"]=1;
$2=$1;
$3=_st($About())._new();
$ctx1.sendIdx["new"]=2;
_st($2)._add_($3);
$ctx1.sendIdx["add:"]=1;
$4=$1;
$5=_st($ResearchAgenda())._new();
$ctx1.sendIdx["new"]=3;
_st($4)._add_($5);
$ctx1.sendIdx["add:"]=2;
$6=$1;
$7=_st($TryIt())._new();
$ctx1.sendIdx["new"]=4;
_st($6)._add_($7);
$ctx1.sendIdx["add:"]=3;
_st($1)._add_(_st($InstrumentalInteraction())._new());
$8=_st($1)._yourself();
self["@pages"]=$8;
globals.Website.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Website)});},
args: [],
source: "initialize\x0a\x09pages := Array new\x0a\x09\x09add: About new ;\x0a\x09\x09add: ResearchAgenda new ;\x0a\x09\x09add: TryIt new ;\x0a\x09\x09add: InstrumentalInteraction new ;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09super initialize.\x0a\x0a\x09",
messageSends: ["add:", "new", "yourself", "initialize"],
referencedClasses: ["Array", "About", "ResearchAgenda", "TryIt", "InstrumentalInteraction"]
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "pages",
protocol: 'rendering',
fn: function () {
var self=this;
var $1;
$1=self["@pages"];
return $1;
},
args: [],
source: "pages\x0a\x0a\x09^ pages",
messageSends: [],
referencedClasses: []
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "pages:",
protocol: 'rendering',
fn: function (anObject) {
var self=this;
self["@pages"]=anObject;
return self;},
args: ["anObject"],
source: "pages: anObject\x0a\x0a\x09pages := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
function $Navigation(){return globals.Navigation||(typeof Navigation=="undefined"?nil:Navigation)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("row");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($3)._class_("col-xs-2");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($Navigation())._new())._renderOn_(html);
$ctx3.sendIdx["renderOn:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
$5=_st(html)._div();
_st($5)._class_("col-xs-10");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@pages"])._do_((function(page){
return smalltalk.withContext(function($ctx4) {
return _st(page)._renderOn_(html);
}, function($ctx4) {$ctx4.fillBlock({page:page},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Website)});},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html div class: 'row'; with: [\x0a\x09\x09\x0a\x09\x09html div class: 'col-xs-2'; with: [\x0a\x09\x09\x09Navigation new renderOn: html.\x0a\x09\x09].\x0a\x09\x09html div class: 'col-xs-10'; with: [\x0a\x09\x09\x09\x0a\x09\x09\x09pages do: [:page | page renderOn: html ]\x0a\x09\x09].\x0a\x09]",
messageSends: ["class:", "div", "with:", "renderOn:", "new", "do:"],
referencedClasses: ["Navigation"]
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
protocol: 'rendering',
fn: function (aPage) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._hideAllPages();
_st(aPage)._show();
return self}, function($ctx1) {$ctx1.fill(self,"show:",{aPage:aPage},globals.Website)});},
args: ["aPage"],
source: "show: aPage\x0a\x0a\x09self hideAllPages.\x0a\x09aPage show",
messageSends: ["hideAllPages", "show"],
referencedClasses: []
}),
globals.Website);


globals.Website.klass.iVarNames = ['singletonInstance'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'rendering',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@singletonInstance"];
if(($receiver = $1) == nil || $receiver == null){
self["@singletonInstance"]=self._new();
self["@singletonInstance"];
} else {
$1;
};
$2=self["@singletonInstance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.Website.klass)});},
args: [],
source: "current\x0a\x09singletonInstance ifNil: [singletonInstance := self new ].\x0a\x09\x0a\x09^ singletonInstance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.Website.klass);

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
