define("amber-sketchcode/SketchCode-Website", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Canvas", "amber_core/Kernel-Objects", "amber_core/Kernel-Announcements"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('SketchCode-Website');
smalltalk.packages["SketchCode-Website"].transport = {"type":"amd","amdNamespace":"amber-sketchcode"};

smalltalk.addClass('Navigation', globals.Widget, [], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
function $Website(){return globals.Website||(typeof Website=="undefined"?nil:Website)}
function $NavigationPill(){return globals.NavigationPill||(typeof NavigationPill=="undefined"?nil:NavigationPill)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(html)._nav())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._ul();
_st($1)._class_("nav nav-pills nav-stacked span4");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st($Website())._current())._pages())._do_((function(page){
return smalltalk.withContext(function($ctx4) {
return _st(_st($NavigationPill())._for_(page))._renderOn_(html);
}, function($ctx4) {$ctx4.fillBlock({page:page},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Navigation)});},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html nav with: [\x0a\x09\x09html ul class: 'nav nav-pills nav-stacked span4'; with: [\x0a\x09\x09\x09Website current pages do: [:page |\x0a\x09\x09\x09\x09(NavigationPill for: page) renderOn: html\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].",
messageSends: ["with:", "nav", "class:", "ul", "do:", "pages", "current", "renderOn:", "for:"],
referencedClasses: ["Website", "NavigationPill"]
}),
globals.Navigation);


globals.Navigation.klass.iVarNames = ['singletonInstance'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'instance creation',
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


smalltalk.addClass('NavigationPill', globals.Widget, ['page', 'listItemDomElement'], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "handleNavigationAnnouncement:",
protocol: 'navigation',
fn: function (aPageChange) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aPageChange)._toPage()).__eq(self["@page"]);
if(smalltalk.assert($1)){
self._setActive();
} else {
self._setInactive();
};
return self}, function($ctx1) {$ctx1.fill(self,"handleNavigationAnnouncement:",{aPageChange:aPageChange},globals.NavigationPill)});},
args: ["aPageChange"],
source: "handleNavigationAnnouncement: aPageChange\x0a\x0a\x09aPageChange toPage = page\x0a\x09\x09ifTrue:  [ self setActive ]\x0a\x09\x09ifFalse: [ self setInactive ]\x09",
messageSends: ["ifTrue:ifFalse:", "=", "toPage", "setActive", "setInactive"],
referencedClasses: []
}),
globals.NavigationPill);

smalltalk.addMethod(
smalltalk.method({
selector: "handlePageChange:",
protocol: 'navigation',
fn: function (aPageChange) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aPageChange)._toPage()).__eq(self["@page"]);
if(smalltalk.assert($1)){
self._setActive();
} else {
self._setInactive();
};
return self}, function($ctx1) {$ctx1.fill(self,"handlePageChange:",{aPageChange:aPageChange},globals.NavigationPill)});},
args: ["aPageChange"],
source: "handlePageChange: aPageChange\x0a\x0a\x09aPageChange toPage = page\x0a\x09\x09ifTrue:  [ self setActive ]\x0a\x09\x09ifFalse: [ self setInactive ]\x09",
messageSends: ["ifTrue:ifFalse:", "=", "toPage", "setActive", "setInactive"],
referencedClasses: []
}),
globals.NavigationPill);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.NavigationPill.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@listItemDomElement"]=nil;
self["@page"]=nil;
self._subscribeToPageChanges();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.NavigationPill)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09listItemDomElement := nil.\x0a\x09page := nil.\x0a\x09\x0a\x09self subscribeToPageChanges",
messageSends: ["initialize", "subscribeToPageChanges"],
referencedClasses: []
}),
globals.NavigationPill);

smalltalk.addMethod(
smalltalk.method({
selector: "navigateToPage",
protocol: 'navigation',
fn: function () {
var self=this;
function $WebsiteAnnouncer(){return globals.WebsiteAnnouncer||(typeof WebsiteAnnouncer=="undefined"?nil:WebsiteAnnouncer)}
function $PageChange(){return globals.PageChange||(typeof PageChange=="undefined"?nil:PageChange)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($WebsiteAnnouncer())._current())._announce_(_st($PageChange())._for_(self["@page"]));
return self}, function($ctx1) {$ctx1.fill(self,"navigateToPage",{},globals.NavigationPill)});},
args: [],
source: "navigateToPage\x0a\x0a\x09WebsiteAnnouncer current \x0a\x09\x09announce: (PageChange for: page)",
messageSends: ["announce:", "current", "for:"],
referencedClasses: ["WebsiteAnnouncer", "PageChange"]
}),
globals.NavigationPill);

smalltalk.addMethod(
smalltalk.method({
selector: "page",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@page"];
return $1;
},
args: [],
source: "page\x0a\x09^ page",
messageSends: [],
referencedClasses: []
}),
globals.NavigationPill);

smalltalk.addMethod(
smalltalk.method({
selector: "page:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@page"]=anObject;
return self;},
args: ["anObject"],
source: "page: anObject\x0a\x09page := anObject",
messageSends: [],
referencedClasses: []
}),
globals.NavigationPill);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._a();
_st($1)._href_(_st(self["@page"])._path());
_st($1)._with_(_st(self["@page"])._title());
$2=_st($1)._onClick_((function(e){
return smalltalk.withContext(function($ctx2) {
self._navigateToPage();
return false;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,1)})}));
self["@listItemDomElement"]=_st(html)._li_($2);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.NavigationPill)});},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09listItemDomElement := html li: (html a \x0a\x09\x09href: page path ; \x0a\x09\x09with: page title ;\x0a\x09\x09onClick: [ :e |  self navigateToPage. false ]\x0a\x09).",
messageSends: ["li:", "href:", "a", "path", "with:", "title", "onClick:", "navigateToPage"],
referencedClasses: []
}),
globals.NavigationPill);

smalltalk.addMethod(
smalltalk.method({
selector: "setActive",
protocol: 'rendering',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@listItemDomElement"])._asJQuery())._addClass_("active");
return self}, function($ctx1) {$ctx1.fill(self,"setActive",{},globals.NavigationPill)});},
args: [],
source: "setActive\x0a\x0a\x09listItemDomElement asJQuery addClass: 'active'",
messageSends: ["addClass:", "asJQuery"],
referencedClasses: []
}),
globals.NavigationPill);

smalltalk.addMethod(
smalltalk.method({
selector: "setInactive",
protocol: 'rendering',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@listItemDomElement"])._asJQuery())._removeClass_("active");
return self}, function($ctx1) {$ctx1.fill(self,"setInactive",{},globals.NavigationPill)});},
args: [],
source: "setInactive\x0a\x0a\x09listItemDomElement asJQuery removeClass: 'active'",
messageSends: ["removeClass:", "asJQuery"],
referencedClasses: []
}),
globals.NavigationPill);

smalltalk.addMethod(
smalltalk.method({
selector: "setupNavigationSubscriptions",
protocol: 'navigation',
fn: function () {
var self=this;
function $WebsiteAnnouncer(){return globals.WebsiteAnnouncer||(typeof WebsiteAnnouncer=="undefined"?nil:WebsiteAnnouncer)}
function $PageChange(){return globals.PageChange||(typeof PageChange=="undefined"?nil:PageChange)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($WebsiteAnnouncer())._current();
$ctx1.sendIdx["current"]=1;
_st($1)._unsubscribe_(self);
_st(_st($WebsiteAnnouncer())._current())._on_send_to_($PageChange(),"handlePageChange:",self);
return self}, function($ctx1) {$ctx1.fill(self,"setupNavigationSubscriptions",{},globals.NavigationPill)});},
args: [],
source: "setupNavigationSubscriptions\x0a\x09\x0a\x09WebsiteAnnouncer current unsubscribe: self.\x0a\x09\x0a\x09WebsiteAnnouncer current\x0a\x09\x09on: PageChange\x0a\x09\x09send: #handlePageChange:\x0a\x09\x09to: self\x0a\x09\x09",
messageSends: ["unsubscribe:", "current", "on:send:to:"],
referencedClasses: ["WebsiteAnnouncer", "PageChange"]
}),
globals.NavigationPill);

smalltalk.addMethod(
smalltalk.method({
selector: "subscribeToPageChanges",
protocol: 'navigation',
fn: function () {
var self=this;
function $WebsiteAnnouncer(){return globals.WebsiteAnnouncer||(typeof WebsiteAnnouncer=="undefined"?nil:WebsiteAnnouncer)}
function $PageChange(){return globals.PageChange||(typeof PageChange=="undefined"?nil:PageChange)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($WebsiteAnnouncer())._current();
$ctx1.sendIdx["current"]=1;
_st($1)._unsubscribe_(self);
_st(_st($WebsiteAnnouncer())._current())._on_send_to_($PageChange(),"handlePageChange:",self);
return self}, function($ctx1) {$ctx1.fill(self,"subscribeToPageChanges",{},globals.NavigationPill)});},
args: [],
source: "subscribeToPageChanges\x0a\x09\x0a\x09WebsiteAnnouncer current unsubscribe: self.\x0a\x09\x0a\x09WebsiteAnnouncer current\x0a\x09\x09on: PageChange\x0a\x09\x09send: #handlePageChange:\x0a\x09\x09to: self\x0a\x09\x09",
messageSends: ["unsubscribe:", "current", "on:send:to:"],
referencedClasses: ["WebsiteAnnouncer", "PageChange"]
}),
globals.NavigationPill);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'instance creation',
fn: function (aPage) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._page_(aPage);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aPage:aPage},globals.NavigationPill.klass)});},
args: ["aPage"],
source: "for: aPage\x0a\x09^ self new \x0a\x09\x09page: aPage;\x0a\x09\x09yourself",
messageSends: ["page:", "new", "yourself"],
referencedClasses: []
}),
globals.NavigationPill.klass);


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
selector: "path",
protocol: 'properties',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="#".__comma(_st(self._class())._name());
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},globals.Page)});},
args: [],
source: "path\x0a\x09^ '#' , self class name ",
messageSends: [",", "name", "class"],
referencedClasses: []
}),
globals.Page);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'pageContent',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.Page)});},
args: ["html"],
source: "renderContentOn: html\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
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
selector: "title",
protocol: 'properties',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 

	return self
		._class()
		._name()
		.replace( /([a-z])([A-Z])/g, "$1 $2" );
	;
return self}, function($ctx1) {$ctx1.fill(self,"title",{},globals.Page)});},
args: [],
source: "title \x0a\x09<\x0a\x09return self\x0a\x09\x09._class()\x0a\x09\x09._name()\x0a\x09\x09.replace( /([a-z])([A-Z])/g, \x22$1 $2\x22 );\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.Page);



smalltalk.addClass('About', globals.Page, [], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'pageContent',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(html)._h1_("Welcome!");
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
source: "renderContentOn: html\x0a\x0a\x09html \x0a\x09\x09h1: 'Welcome!' ;\x0a\x0a\x09\x09p:  'SketchCode is an interactive general purpose programming environment that sees coding as a creative process. \x0a\x09\x09    It tries to rethink programming tools from the perspective of Design Thinking.' ;\x0a\x0a\x09\x09p: 'It is developed by Siemen Baader in the CMA[2] research group at Aarhus University, and part of the \x0a\x09\x09   ''Creativity in Blended Interaction Spaces''[3] project, that aims at facilitating creative\x0a\x09\x09     collaboration between high school students.' ;\x0a\x0a\x09\x09p: 'This website is a running SketchCode environment. To learn more, or to try SketchCode live in your browser, \x0a\x09\x09    use the menu to the left.' ;\x0a\x09\x09\x09\x0a\x09\x09p: 'Happy Hacking!' ;\x0a\x09\x09\x0a\x09\x09p: '-- Siemen'.",
messageSends: ["h1:", "p:"],
referencedClasses: []
}),
globals.About);



smalltalk.addClass('InstrumentalInteraction', globals.Page, [], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'pageContent',
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
protocol: 'pageContent',
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
protocol: 'pageContent',
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
protocol: 'pageContent',
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



smalltalk.addClass('URLBar', globals.Object, ['pages'], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "handlePageChange:",
protocol: 'navigation',
fn: function (aPageChange) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._path_(_st(_st(aPageChange)._toPage())._path());
return self}, function($ctx1) {$ctx1.fill(self,"handlePageChange:",{aPageChange:aPageChange},globals.URLBar)});},
args: ["aPageChange"],
source: "handlePageChange: aPageChange\x0a\x09self path: (aPageChange toPage path).",
messageSends: ["path:", "path", "toPage"],
referencedClasses: []
}),
globals.URLBar);

smalltalk.addMethod(
smalltalk.method({
selector: "path",
protocol: 'navigation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(window)._location())._hash();
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},globals.URLBar)});},
args: [],
source: "path\x0a\x0a\x09^ window location hash\x0a\x09\x09",
messageSends: ["hash", "location"],
referencedClasses: []
}),
globals.URLBar);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
protocol: 'navigation',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._history())._pushState_title_url_(nil,"",aString);
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},globals.URLBar)});},
args: ["aString"],
source: "path: aString\x0a\x0a\x09window history\x0a\x09\x09pushState: nil\x0a\x09\x09title: ''\x0a\x09\x09url: aString .\x0a\x09\x09",
messageSends: ["pushState:title:url:", "history"],
referencedClasses: []
}),
globals.URLBar);

smalltalk.addMethod(
smalltalk.method({
selector: "subscribeToPageChanges",
protocol: 'navigation',
fn: function () {
var self=this;
function $WebsiteAnnouncer(){return globals.WebsiteAnnouncer||(typeof WebsiteAnnouncer=="undefined"?nil:WebsiteAnnouncer)}
function $PageChange(){return globals.PageChange||(typeof PageChange=="undefined"?nil:PageChange)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($WebsiteAnnouncer())._current();
$ctx1.sendIdx["current"]=1;
_st($1)._unsubscribe_(self);
_st(_st($WebsiteAnnouncer())._current())._on_send_to_($PageChange(),"handlePageChange:",self);
return self}, function($ctx1) {$ctx1.fill(self,"subscribeToPageChanges",{},globals.URLBar)});},
args: [],
source: "subscribeToPageChanges\x0a\x09\x0a\x09WebsiteAnnouncer current unsubscribe: self.\x0a\x09\x0a\x09WebsiteAnnouncer current\x0a\x09\x09on: PageChange\x0a\x09\x09send: #handlePageChange:\x0a\x09\x09to: self\x0a\x09\x09",
messageSends: ["unsubscribe:", "current", "on:send:to:"],
referencedClasses: ["WebsiteAnnouncer", "PageChange"]
}),
globals.URLBar);

smalltalk.addMethod(
smalltalk.method({
selector: "updatePath:",
protocol: 'navigation',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._history())._pushState_title_url_(nil,"",aString);
return self}, function($ctx1) {$ctx1.fill(self,"updatePath:",{aString:aString},globals.URLBar)});},
args: ["aString"],
source: "updatePath: aString\x0a\x0a\x09window history\x0a\x09\x09pushState: nil\x0a\x09\x09title: ''\x0a\x09\x09url: aString .\x0a\x09\x09",
messageSends: ["pushState:title:url:", "history"],
referencedClasses: []
}),
globals.URLBar);


globals.URLBar.klass.iVarNames = ['singletonInstance'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'instance creation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@singletonInstance"];
if(($receiver = $1) == nil || $receiver == null){
self["@singletonInstance"]=globals.URLBar.klass.superclass.fn.prototype._new.apply(_st(self), []);
self["@singletonInstance"];
} else {
$1;
};
$2=self["@singletonInstance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.URLBar.klass)});},
args: [],
source: "current\x0a\x09singletonInstance ifNil: [singletonInstance := super new ].\x0a\x09\x0a\x09^ singletonInstance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.URLBar.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},globals.URLBar.klass)});},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
globals.URLBar.klass);


smalltalk.addClass('Website', globals.Widget, ['pages'], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "container",
protocol: 'rendering',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("body"._asJQuery())._find_("#main");
return $1;
}, function($ctx1) {$ctx1.fill(self,"container",{},globals.Website)});},
args: [],
source: "container\x0a\x0a\x09^ 'body' asJQuery find: '#main'",
messageSends: ["find:", "asJQuery"],
referencedClasses: []
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "handleNavigationAnnouncement:",
protocol: 'navigation',
fn: function (aPageChange) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._show_(_st(aPageChange)._toPage());
return self}, function($ctx1) {$ctx1.fill(self,"handleNavigationAnnouncement:",{aPageChange:aPageChange},globals.Website)});},
args: ["aPageChange"],
source: "handleNavigationAnnouncement: aPageChange\x0a\x0a\x09self show: aPageChange toPage",
messageSends: ["show:", "toPage"],
referencedClasses: []
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "handlePageChange:",
protocol: 'navigation',
fn: function (aPageChange) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._show_(_st(aPageChange)._toPage());
return self}, function($ctx1) {$ctx1.fill(self,"handlePageChange:",{aPageChange:aPageChange},globals.Website)});},
args: ["aPageChange"],
source: "handlePageChange: aPageChange\x0a\x0a\x09self show: aPageChange toPage",
messageSends: ["show:", "toPage"],
referencedClasses: []
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "hideAllPages",
protocol: 'navigation',
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
function $URLBar(){return globals.URLBar||(typeof URLBar=="undefined"?nil:URLBar)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
globals.Website.superclass.fn.prototype._initialize.apply(_st(self), []);
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
self._subscribeToPageChanges();
$ctx1.sendIdx["subscribeToPageChanges"]=1;
_st(_st($URLBar())._current())._subscribeToPageChanges();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Website)});},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x0a\x09pages := Array new\x0a\x09\x09add: About new ;\x0a\x09\x09add: ResearchAgenda new ;\x0a\x09\x09add: TryIt new ;\x0a\x09\x09add: InstrumentalInteraction new ;\x0a\x09\x09yourself.\x0a\x09\x0a\x09self subscribeToPageChanges.\x0a\x09\x0a\x09URLBar current subscribeToPageChanges.\x0a\x09\x0a\x09",
messageSends: ["initialize", "add:", "new", "yourself", "subscribeToPageChanges", "current"],
referencedClasses: ["Array", "About", "ResearchAgenda", "TryIt", "InstrumentalInteraction", "URLBar"]
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "pages",
protocol: 'accessing',
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
protocol: 'accessing',
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
var $1,$2,$3,$5,$6,$7,$8,$4;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._class_("page-header");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._h1_("SketchCode");
return _st(_st(html)._small())._with_("Research on supporting Design Thinking in programming tools");
$ctx2.sendIdx["with:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$3=_st(html)._div();
$ctx1.sendIdx["div"]=2;
_st($3)._class_("row");
$ctx1.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(html)._div();
$ctx2.sendIdx["div"]=3;
_st($5)._class_("col-xs-3");
$ctx2.sendIdx["class:"]=3;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st($Navigation())._new())._renderOn_(html);
$ctx3.sendIdx["renderOn:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
$ctx2.sendIdx["with:"]=4;
$6;
$7=_st(html)._div();
_st($7)._class_("col-xs-9");
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@pages"])._do_((function(page){
return smalltalk.withContext(function($ctx4) {
return _st(page)._renderOn_(html);
}, function($ctx4) {$ctx4.fillBlock({page:page},$ctx3,5)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})}));
return $8;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["with:"]=3;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Website)});},
args: ["html"],
source: "renderOn: html\x0a\x0a\x0a\x09html div\x0a\x09\x09class: 'page-header' ;\x0a\x09\x09with: [\x0a\x09\x09\x09html h1: 'SketchCode'.\x0a\x09\x09\x09html small with: 'Research on supporting Design Thinking in programming tools'.\x09\x09\x0a\x09\x09\x09].\x0a\x0a\x0a\x09html div class: 'row'; with: [\x0a\x09\x09\x0a\x09\x09html div class: 'col-xs-3'; with: [\x0a\x09\x09\x09Navigation new renderOn: html.\x0a\x09\x09].\x0a\x09\x09html div class: 'col-xs-9'; with: [\x0a\x09\x09\x09\x0a\x09\x09\x09pages do: [:page |\x0a\x09\x09\x09\x09page renderOn: html \x0a\x09\x09\x09]\x0a\x09\x09].\x0a\x09]",
messageSends: ["class:", "div", "with:", "h1:", "small", "renderOn:", "new", "do:"],
referencedClasses: ["Navigation"]
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
protocol: 'navigation',
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

smalltalk.addMethod(
smalltalk.method({
selector: "showFirstPage",
protocol: 'navigation',
fn: function () {
var self=this;
function $WebsiteAnnouncer(){return globals.WebsiteAnnouncer||(typeof WebsiteAnnouncer=="undefined"?nil:WebsiteAnnouncer)}
function $PageChange(){return globals.PageChange||(typeof PageChange=="undefined"?nil:PageChange)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($WebsiteAnnouncer())._current())._announce_(_st($PageChange())._for_(_st(self["@pages"])._at_((1))));
return self}, function($ctx1) {$ctx1.fill(self,"showFirstPage",{},globals.Website)});},
args: [],
source: "showFirstPage\x09\x0a\x0a\x09WebsiteAnnouncer current announce:\x0a\x09\x09(PageChange for: (pages at: 1))",
messageSends: ["announce:", "current", "for:", "at:"],
referencedClasses: ["WebsiteAnnouncer", "PageChange"]
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "showPageFromURLPath",
protocol: 'navigation',
fn: function () {
var self=this;
var path,page;
function $URLBar(){return globals.URLBar||(typeof URLBar=="undefined"?nil:URLBar)}
function $Website(){return globals.Website||(typeof Website=="undefined"?nil:Website)}
function $WebsiteAnnouncer(){return globals.WebsiteAnnouncer||(typeof WebsiteAnnouncer=="undefined"?nil:WebsiteAnnouncer)}
function $PageChange(){return globals.PageChange||(typeof PageChange=="undefined"?nil:PageChange)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st($URLBar())._current();
$ctx1.sendIdx["current"]=1;
path=_st($1)._path();
$ctx1.sendIdx["path"]=1;
$3=_st($Website())._current();
$ctx1.sendIdx["current"]=2;
$2=_st($3)._pages();
page=_st($2)._detect_ifNone_((function(p){
return smalltalk.withContext(function($ctx2) {
return _st(_st(p)._path()).__eq(path);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@pages"])._at_((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(_st($WebsiteAnnouncer())._current())._announce_(_st($PageChange())._for_(page));
return self}, function($ctx1) {$ctx1.fill(self,"showPageFromURLPath",{path:path,page:page},globals.Website)});},
args: [],
source: "showPageFromURLPath\x0a\x0a\x09| path page |\x0a\x09\x0a\x09path := URLBar current path.\x0a\x0a\x09page := Website current pages\x0a\x09\x09detect: [:p | p path = path ]\x0a\x09\x09ifNone: [ pages at: 1 ].\x0a\x09\x0a\x09WebsiteAnnouncer current announce:\x0a\x09\x09(PageChange for: page)",
messageSends: ["path", "current", "detect:ifNone:", "pages", "=", "at:", "announce:", "for:"],
referencedClasses: ["URLBar", "Website", "WebsiteAnnouncer", "PageChange"]
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "subscribeToPageChanges",
protocol: 'navigation',
fn: function () {
var self=this;
function $WebsiteAnnouncer(){return globals.WebsiteAnnouncer||(typeof WebsiteAnnouncer=="undefined"?nil:WebsiteAnnouncer)}
function $PageChange(){return globals.PageChange||(typeof PageChange=="undefined"?nil:PageChange)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($WebsiteAnnouncer())._current();
$ctx1.sendIdx["current"]=1;
_st($1)._unsubscribe_(self);
_st(_st($WebsiteAnnouncer())._current())._on_send_to_($PageChange(),"handlePageChange:",self);
return self}, function($ctx1) {$ctx1.fill(self,"subscribeToPageChanges",{},globals.Website)});},
args: [],
source: "subscribeToPageChanges\x0a\x09\x0a\x09WebsiteAnnouncer current unsubscribe: self.\x0a\x09\x0a\x09WebsiteAnnouncer current\x0a\x09\x09on: PageChange\x0a\x09\x09send: #handlePageChange:\x0a\x09\x09to: self\x0a\x09\x09",
messageSends: ["unsubscribe:", "current", "on:send:to:"],
referencedClasses: ["WebsiteAnnouncer", "PageChange"]
}),
globals.Website);


globals.Website.klass.iVarNames = ['singletonInstance'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
protocol: 'instance creation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@singletonInstance"];
if(($receiver = $1) == nil || $receiver == null){
self["@singletonInstance"]=globals.Website.klass.superclass.fn.prototype._new.apply(_st(self), []);
self["@singletonInstance"];
} else {
$1;
};
$2=self["@singletonInstance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"current",{},globals.Website.klass)});},
args: [],
source: "current\x0a\x09singletonInstance ifNil: [singletonInstance := super new ].\x0a\x09\x0a\x09^ singletonInstance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
globals.Website.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'private',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},globals.Website.klass)});},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
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
var $1,$2;
$1="#main"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
$2=self._current();
$ctx1.sendIdx["current"]=1;
_st($2)._appendToJQuery_("#main"._asJQuery());
_st(self._current())._showPageFromURLPath();
return self}, function($ctx1) {$ctx1.fill(self,"render",{},globals.Website.klass)});},
args: [],
source: "render\x0a\x09'#main' asJQuery empty.\x0a\x09self current appendToJQuery: '#main' asJQuery.\x0a\x09self current showPageFromURLPath",
messageSends: ["empty", "asJQuery", "appendToJQuery:", "current", "showPageFromURLPath"],
referencedClasses: []
}),
globals.Website.klass);


smalltalk.addClass('WebsiteAnnouncement', globals.Object, [], 'SketchCode-Website');


smalltalk.addClass('PageChange', globals.WebsiteAnnouncement, ['toPage'], 'SketchCode-Website');
smalltalk.addMethod(
smalltalk.method({
selector: "toPage",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@toPage"];
return $1;
},
args: [],
source: "toPage\x0a\x09^ toPage",
messageSends: [],
referencedClasses: []
}),
globals.PageChange);

smalltalk.addMethod(
smalltalk.method({
selector: "toPage:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@toPage"]=anObject;
return self;},
args: ["anObject"],
source: "toPage: anObject\x0a\x09toPage := anObject",
messageSends: [],
referencedClasses: []
}),
globals.PageChange);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'instance creation',
fn: function (aPage) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._toPage_(aPage);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aPage:aPage},globals.PageChange.klass)});},
args: ["aPage"],
source: "for: aPage\x0a\x0a\x09^ self new\x0a\x09\x09toPage: aPage ;\x0a\x09\x09yourself",
messageSends: ["toPage:", "new", "yourself"],
referencedClasses: []
}),
globals.PageChange.klass);


smalltalk.addClass('WebsiteAnnouncer', globals.SystemAnnouncer, [], 'SketchCode-Website');

});
