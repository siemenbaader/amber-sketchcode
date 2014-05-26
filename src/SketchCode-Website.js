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
function $URLBar(){return globals.URLBar||(typeof URLBar=="undefined"?nil:URLBar)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($WebsiteAnnouncer())._current();
$ctx1.sendIdx["current"]=1;
_st($1)._announce_(_st($PageChange())._for_(self["@page"]));
_st(_st($URLBar())._current())._pathAndAddToHistory_(_st(self["@page"])._path());
return self}, function($ctx1) {$ctx1.fill(self,"navigateToPage",{},globals.NavigationPill)});},
args: [],
source: "navigateToPage\x0a\x0a\x09WebsiteAnnouncer current \x0a\x09\x09announce: (PageChange for: page).\x0a\x09\x09\x0a\x09URLBar current pathAndAddToHistory: page path.",
messageSends: ["announce:", "current", "for:", "pathAndAddToHistory:", "path"],
referencedClasses: ["WebsiteAnnouncer", "PageChange", "URLBar"]
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
source: "subscribeToPageChanges\x0a\x09\x0a\x09WebsiteAnnouncer current unsubscribe: self.\x0a\x09\x0a\x09WebsiteAnnouncer current\x0a\x09\x09on: PageChange\x0a\x09\x09send: #handlePageChange:\x0a\x09\x09to: self.",
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
selector: "path",
protocol: 'properties',
fn: function () {
var self=this;
return "/";
},
args: [],
source: "path\x0a\x09\x22I am the root page, so my path is overriden to /\x22\x0a\x09\x0a\x09^ '/'",
messageSends: [],
referencedClasses: []
}),
globals.About);

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
selector: "introduction",
protocol: 'pageContent',
fn: function () {
var self=this;
return self;},
args: [],
source: "introduction ",
messageSends: [],
referencedClasses: []
}),
globals.InstrumentalInteraction);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'pageContent',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(html)._div())._asJQuery())._html_(self._htmlFrom_("\x0a# Instrumental Interaction in Small Business Workflow Management Systems\x0aIn this essay, I will discuss Instrumental Interaction as an enabler for innovation within [small and medium sized enterprises (SMEs)] [SMEs], namely in making [Workflow Management Systems][Workflow Management Systems] more affordable for smaller companies. I will touch upon workshop themes two (Instrumental Interaction in a practical context) and three (technology to enable Instrumental Interaction). In doing so, I wish to elaborate the link between the conceptual and usability benefits of the Instrumental Interaction paradigm and the innovation and monetary gains that may arise from its adoption in practice.\x0a\x0a## Background\x0aI always wanted to be an inventor. I have always cared deeply about detailed observation, reflection and deep theoretical understanding of the world around us. But I have always needed a clear link to practical application and benefits for the quality of life of concrete people from these efforts. So, after I had completed my MSc at ITU, and before I came back to academia to pursue a PhD, I joined three friends who just had founded Contingent [] ; a startup company centred around quality of life, a 30 hr workweek, invention of mobile and web apps, and programming consultancy to pay the bills. I figured that the small setting of a startup was the most direct way to learn how to transfer my academic skills into practical value.\x0a\x0aAt Contingent, we sold three kinds of services:\x0a\x0a  * Programming billed by hours\x0a  * Realising fellow entrepreneur’s visions for mobile & web apps\x0a  * Workflow Management Systems for small companies (micro SMEs, < 10 employees)\x0a\x0aI always found the latter by far the most interesting. [Workflow management systems] are systems that (semi) automate workflows in a business, ensure that all the steps have been carried out, and alert employees when specific steps need attention. In micro SMEs, the workflows that would be automated are typically procedures that have been collected and refined over the years. There are typically one or two persons who steward these procedures, document them in spreadsheets and train new employees. I found working in this setting very motivating because translating the informal descriptions of procedures into formal programs is a relatively open co-design process, with concrete goals (workflow efficiency and elimination of tedious tasks) and with domain experts (the people maintaining the spreadsheets) and end-users (the people carrying out the work) closely involved.\x0a\x0aThe systems we developed involved email communication and collaboration between several different people, and were built on cloud and web technology by integrating web based services with a custom web application and front end.\x0a\x0a## The Problem\x0aThe primary value for the SMEs in using Workflow Management Systems lies in being able to perform their business workflows more efficiently and with less risk for errors, typically to expand their business or to cut costs. At the same time, taking workflows out of their existing applications – eg. spreadsheets – requires that a new user interface at least provides the same level of relevant functionality in order to be satisfying for the user. Since user interface development is costly, and since the main value for the business lies in workflow automation, not usability, the user interfaces are often implemented to the level of bare minimum. While the business as a whole benefits, and the users are relieved of tedious and repetitive tasks, their daily user experience suffers. Even in this (from a co-design perspective rather dissatisfying) situation, a disproportional amount of development time is spent on re-implementing user interfaces, while the conceptually interesting parts – the definition and automation of the business workflow – are completed relatively quickly. \x0a\x0a  - examples: PhD planner, Github, A-Kasse-system\x0a  - also, only larger SMEs can afford building UIs.\x0a\x0aIn the following, I will present a concrete case of a Workflow Management System and illustrate the problems associated with its construction. I will then introduce the paradigm of Instrumental Interaction, and provide examples of how an implementation based on Instrumental Interaction on the web platform can address these problems. I will conclude by summing up general findings on how Instruments and software design according to Instrumental Interaction can be done in order to make the development of custom software, namely Workflow Management Systems, more affordable to SMEs by removing complexity from the user interface construction and allowing focus on the business workflows.\x0a\x0a## Case: A Competition Management System\x0aOne organisation we built a Workflow Management System for organised competitions for student entrepreneurs. They run by-yearly competitions where student entrepreneurs send in a business plan, which is evaluated by a panel of experts from academia and business. A few teams are selected for a final round, where students pitch their business idea to the jury in a public event. The final winner is awarded a money prize, receives media attention and is assigned a mentor to realise the business. \x0a\x0aThe organisation wanted to automate the process of recruiting expert panelists, handling student submission and the selection of finalists, in order to expand their activities to other events of similar structure.\x0a\x0aThe workflow goes as follows:\x0a\x0a[illustration here. Then explaining text.]\x0a\x0a## References\x0a  [Workflow management systems] : http://en.wikipedia.org/wiki/Workflow_management_system\x0a  [SMEs] : http://en.wikipedia.org/wiki/Small_and_medium_enterprises\x0a\x0astudents design a business, validate it, write a report\x0ajury panel is recruited \x0aprevious panelists are invited, reminded via email, then phone\x0aoption to opt-out & sign up for more\x0aagreement signed & filed\x0amanual nda intervention if sent via email\x0asubmitted reports are given feedback & rated\x0areminders are sent to jury\x0awinner is picked, and a ceremony is held \x0a\x09"));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.InstrumentalInteraction)});},
args: ["html"],
source: "renderContentOn: html\x0a\x09html div asJQuery html: (self htmlFrom:'\x0a# Instrumental Interaction in Small Business Workflow Management Systems\x0aIn this essay, I will discuss Instrumental Interaction as an enabler for innovation within [small and medium sized enterprises (SMEs)] [SMEs], namely in making [Workflow Management Systems][Workflow Management Systems] more affordable for smaller companies. I will touch upon workshop themes two (Instrumental Interaction in a practical context) and three (technology to enable Instrumental Interaction). In doing so, I wish to elaborate the link between the conceptual and usability benefits of the Instrumental Interaction paradigm and the innovation and monetary gains that may arise from its adoption in practice.\x0a\x0a## Background\x0aI always wanted to be an inventor. I have always cared deeply about detailed observation, reflection and deep theoretical understanding of the world around us. But I have always needed a clear link to practical application and benefits for the quality of life of concrete people from these efforts. So, after I had completed my MSc at ITU, and before I came back to academia to pursue a PhD, I joined three friends who just had founded Contingent [] ; a startup company centred around quality of life, a 30 hr workweek, invention of mobile and web apps, and programming consultancy to pay the bills. I figured that the small setting of a startup was the most direct way to learn how to transfer my academic skills into practical value.\x0a\x0aAt Contingent, we sold three kinds of services:\x0a\x0a  * Programming billed by hours\x0a  * Realising fellow entrepreneur’s visions for mobile & web apps\x0a  * Workflow Management Systems for small companies (micro SMEs, < 10 employees)\x0a\x0aI always found the latter by far the most interesting. [Workflow management systems] are systems that (semi) automate workflows in a business, ensure that all the steps have been carried out, and alert employees when specific steps need attention. In micro SMEs, the workflows that would be automated are typically procedures that have been collected and refined over the years. There are typically one or two persons who steward these procedures, document them in spreadsheets and train new employees. I found working in this setting very motivating because translating the informal descriptions of procedures into formal programs is a relatively open co-design process, with concrete goals (workflow efficiency and elimination of tedious tasks) and with domain experts (the people maintaining the spreadsheets) and end-users (the people carrying out the work) closely involved.\x0a\x0aThe systems we developed involved email communication and collaboration between several different people, and were built on cloud and web technology by integrating web based services with a custom web application and front end.\x0a\x0a## The Problem\x0aThe primary value for the SMEs in using Workflow Management Systems lies in being able to perform their business workflows more efficiently and with less risk for errors, typically to expand their business or to cut costs. At the same time, taking workflows out of their existing applications – eg. spreadsheets – requires that a new user interface at least provides the same level of relevant functionality in order to be satisfying for the user. Since user interface development is costly, and since the main value for the business lies in workflow automation, not usability, the user interfaces are often implemented to the level of bare minimum. While the business as a whole benefits, and the users are relieved of tedious and repetitive tasks, their daily user experience suffers. Even in this (from a co-design perspective rather dissatisfying) situation, a disproportional amount of development time is spent on re-implementing user interfaces, while the conceptually interesting parts – the definition and automation of the business workflow – are completed relatively quickly. \x0a\x0a  - examples: PhD planner, Github, A-Kasse-system\x0a  - also, only larger SMEs can afford building UIs.\x0a\x0aIn the following, I will present a concrete case of a Workflow Management System and illustrate the problems associated with its construction. I will then introduce the paradigm of Instrumental Interaction, and provide examples of how an implementation based on Instrumental Interaction on the web platform can address these problems. I will conclude by summing up general findings on how Instruments and software design according to Instrumental Interaction can be done in order to make the development of custom software, namely Workflow Management Systems, more affordable to SMEs by removing complexity from the user interface construction and allowing focus on the business workflows.\x0a\x0a## Case: A Competition Management System\x0aOne organisation we built a Workflow Management System for organised competitions for student entrepreneurs. They run by-yearly competitions where student entrepreneurs send in a business plan, which is evaluated by a panel of experts from academia and business. A few teams are selected for a final round, where students pitch their business idea to the jury in a public event. The final winner is awarded a money prize, receives media attention and is assigned a mentor to realise the business. \x0a\x0aThe organisation wanted to automate the process of recruiting expert panelists, handling student submission and the selection of finalists, in order to expand their activities to other events of similar structure.\x0a\x0aThe workflow goes as follows:\x0a\x0a[illustration here. Then explaining text.]\x0a\x0a## References\x0a  [Workflow management systems] : http://en.wikipedia.org/wiki/Workflow_management_system\x0a  [SMEs] : http://en.wikipedia.org/wiki/Small_and_medium_enterprises\x0a\x0astudents design a business, validate it, write a report\x0ajury panel is recruited \x0aprevious panelists are invited, reminded via email, then phone\x0aoption to opt-out & sign up for more\x0aagreement signed & filed\x0amanual nda intervention if sent via email\x0asubmitted reports are given feedback & rated\x0areminders are sent to jury\x0awinner is picked, and a ceremony is held \x0a\x09' )",
messageSends: ["html:", "asJQuery", "div", "htmlFrom:"],
referencedClasses: []
}),
globals.InstrumentalInteraction);

smalltalk.addMethod(
smalltalk.method({
selector: "renderIntroductionOn:",
protocol: 'pageContent',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st(html)._div())._asJQuery())._html_(self._htmlFrom_("\x0a# \x0a\x0aAbstract\x0aThis \x0a\x0a\x0a\x0aIntroduction\x0a\x0a\x0a\x0a\x0a\x0aBackground\x0a\x0a\x0aProblem\x0a\x0a\x0aInstrumental interaction, and how it might help\x0a\x0aA practitioner perspective. At contingent, we built three kinds of apps:\x0a\x0a* plain programming hours (YouSee)\x0a* hbuilding systems to entrepreneur’s vision (Babysigning, iBikeCph, Organizer)\x0a* Workfow systems and office automation (VentureCup)\x0a\x0aI found the latter by far the most interesting, because it was a design task with dialogue with real users & domain expertise. In this essay, I will describe how Instrumental Interaction could have helped us, and how I will use it in the future to address similar problems.\x0a\x0a-- custom views, workflows & reminders\x0a\x0a\x09"));
return self}, function($ctx1) {$ctx1.fill(self,"renderIntroductionOn:",{html:html},globals.InstrumentalInteraction)});},
args: ["html"],
source: "renderIntroductionOn: html\x0a\x0a\x09html div asJQuery html: (self htmlFrom:\x0a\x0a\x09'\x0a# \x0a\x0aAbstract\x0aThis \x0a\x0a\x0a\x0aIntroduction\x0a\x0a\x0a\x0a\x0a\x0aBackground\x0a\x0a\x0aProblem\x0a\x0a\x0aInstrumental interaction, and how it might help\x0a\x0aA practitioner perspective. At contingent, we built three kinds of apps:\x0a\x0a* plain programming hours (YouSee)\x0a* hbuilding systems to entrepreneur’s vision (Babysigning, iBikeCph, Organizer)\x0a* Workfow systems and office automation (VentureCup)\x0a\x0aI found the latter by far the most interesting, because it was a design task with dialogue with real users & domain expertise. In this essay, I will describe how Instrumental Interaction could have helped us, and how I will use it in the future to address similar problems.\x0a\x0a-- custom views, workflows & reminders\x0a\x0a\x09'\x0a\x09)",
messageSends: ["html:", "asJQuery", "div", "htmlFrom:"],
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
return "#Hello from markdown";
},
args: [],
source: "content\x0a\x0a\x09^ '#Hello from markdown'",
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
selector: "content",
protocol: 'pageContent',
fn: function () {
var self=this;
return "\x09\x0a# A live environment\x0a\x09\x0aThis website is implemented in SketchCode. It is built \x0aon top of Amber Smalltalk, a port of Pharo Smalltalk that\x0aruns in the browser.\x0a\x0aIf you click the button, the IDE will open i a pop up\x0awindow. Make sure to allow pop-ups for this domain.\x0a\x09\x09\x0a";
},
args: [],
source: "content\x0a\x09^\x0a'\x09\x0a# A live environment\x0a\x09\x0aThis website is implemented in SketchCode. It is built \x0aon top of Amber Smalltalk, a port of Pharo Smalltalk that\x0aruns in the browser.\x0a\x0aIf you click the button, the IDE will open i a pop up\x0awindow. Make sure to allow pop-ups for this domain.\x0a\x09\x09\x0a'",
messageSends: [],
referencedClasses: []
}),
globals.TryIt);

smalltalk.addMethod(
smalltalk.method({
selector: "renderContentOn:",
protocol: 'pageContent',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(_st(html)._div())._asJQuery())._append_(self._htmlFrom_(self._content()));
$1=_st(html)._button();
_st($1)._class_("btn btn-primary center-block");
_st($1)._with_("Open the IDE");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(require)._value_("amber/helpers"))._popupHelios();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderContentOn:",{html:html},globals.TryIt)});},
args: ["html"],
source: "renderContentOn: html\x0a\x0a\x09html div asJQuery append: \x0a\x09\x09(self htmlFrom: self content).\x0a\x09\x09\x0a\x09html button \x0a\x09\x09class: 'btn btn-primary center-block' ;\x0a\x09\x09with: 'Open the IDE' ;\x0a\x09\x09onClick: [(require value: 'amber/helpers') popupHelios]",
messageSends: ["append:", "asJQuery", "div", "htmlFrom:", "content", "class:", "button", "with:", "onClick:", "popupHelios", "value:"],
referencedClasses: []
}),
globals.TryIt);



smalltalk.addClass('URLBar', globals.Object, ['pages'], 'SketchCode-Website');
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
_st(_st(window)._history())._replaceState_title_url_(nil,"",aString);
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aString:aString},globals.URLBar)});},
args: ["aString"],
source: "path: aString\x0a\x0a\x09window history\x0a\x09\x09replaceState: nil\x0a\x09\x09title: ''\x0a\x09\x09url: aString .\x0a\x09\x09",
messageSends: ["replaceState:title:url:", "history"],
referencedClasses: []
}),
globals.URLBar);

smalltalk.addMethod(
smalltalk.method({
selector: "pathAndAddToHistory:",
protocol: 'navigation',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(window)._history())._pushState_title_url_(nil,"",aString);
return self}, function($ctx1) {$ctx1.fill(self,"pathAndAddToHistory:",{aString:aString},globals.URLBar)});},
args: ["aString"],
source: "pathAndAddToHistory: aString\x0a\x0a\x09window history\x0a\x09\x09pushState: nil\x0a\x09\x09title: ''\x0a\x09\x09url: aString .\x0a\x09\x09",
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Website)});},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x0a\x09pages := Array new\x0a\x09\x09add: About new ;\x0a\x09\x09add: ResearchAgenda new ;\x0a\x09\x09add: TryIt new ;\x0a\x09\x09add: InstrumentalInteraction new ;\x0a\x09\x09yourself.\x0a\x09\x0a\x09self subscribeToPageChanges.\x0a\x09\x0a\x09",
messageSends: ["initialize", "add:", "new", "yourself", "subscribeToPageChanges"],
referencedClasses: ["Array", "About", "ResearchAgenda", "TryIt", "InstrumentalInteraction"]
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "pageForPath:",
protocol: 'navigation',
fn: function (aString) {
var self=this;
function $Website(){return globals.Website||(typeof Website=="undefined"?nil:Website)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st($Website())._current())._pages())._detect_ifNone_((function(p){
return smalltalk.withContext(function($ctx2) {
return _st(_st(p)._path()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1,1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@pages"])._at_((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"pageForPath:",{aString:aString},globals.Website)});},
args: ["aString"],
source: "pageForPath: aString\x0a\x0a\x09^ Website current pages\x0a\x09\x09detect: [:p | p path = aString ]\x0a\x09\x09ifNone: [ pages at: 1 ].",
messageSends: ["detect:ifNone:", "pages", "current", "=", "path", "at:"],
referencedClasses: ["Website"]
}),
globals.Website);

smalltalk.addMethod(
smalltalk.method({
selector: "pageForURL",
protocol: 'navigation',
fn: function () {
var self=this;
function $URLBar(){return globals.URLBar||(typeof URLBar=="undefined"?nil:URLBar)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._pageForPath_(_st(_st($URLBar())._current())._path());
return $1;
}, function($ctx1) {$ctx1.fill(self,"pageForURL",{},globals.Website)});},
args: [],
source: "pageForURL\x0a\x0a\x09^ self pageForPath: (URLBar current path)",
messageSends: ["pageForPath:", "path", "current"],
referencedClasses: ["URLBar"]
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
var page;
function $URLBar(){return globals.URLBar||(typeof URLBar=="undefined"?nil:URLBar)}
function $WebsiteAnnouncer(){return globals.WebsiteAnnouncer||(typeof WebsiteAnnouncer=="undefined"?nil:WebsiteAnnouncer)}
function $PageChange(){return globals.PageChange||(typeof PageChange=="undefined"?nil:PageChange)}
return smalltalk.withContext(function($ctx1) { 
var $1;
page=self._pageForURL();
$ctx1.sendIdx["pageForURL"]=1;
$1=_st($URLBar())._current();
$ctx1.sendIdx["current"]=1;
_st($1)._path_(_st(page)._path());
_st(_st($WebsiteAnnouncer())._current())._announce_(_st($PageChange())._for_(self._pageForURL()));
return self}, function($ctx1) {$ctx1.fill(self,"showPageFromURLPath",{page:page},globals.Website)});},
args: [],
source: "showPageFromURLPath\x0a\x0a\x09| page |\x0a\x09\x0a\x09page := self pageForURL.\x0a\x09URLBar current path: page path.\x0a\x09WebsiteAnnouncer current announce:\x0a\x09\x09(PageChange for: self pageForURL).\x0a\x09",
messageSends: ["pageForURL", "path:", "current", "path", "announce:", "for:"],
referencedClasses: ["URLBar", "WebsiteAnnouncer", "PageChange"]
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
var $1,$2;
$1=_st($WebsiteAnnouncer())._current();
$ctx1.sendIdx["current"]=1;
_st($1)._unsubscribe_(self);
$2=_st($WebsiteAnnouncer())._current();
$ctx1.sendIdx["current"]=2;
_st($2)._on_send_to_($PageChange(),"handlePageChange:",self);
_st(window)._addEventListener_do_("popstate",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st($WebsiteAnnouncer())._current())._announce_(_st($PageChange())._for_(self._pageForURL()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"subscribeToPageChanges",{},globals.Website)});},
args: [],
source: "subscribeToPageChanges\x0a\x09\x0a\x09WebsiteAnnouncer current unsubscribe: self.\x0a\x09\x0a\x09WebsiteAnnouncer current\x0a\x09\x09on: PageChange\x0a\x09\x09send: #handlePageChange:\x0a\x09\x09to: self.\x0a\x09\x09\x0a\x09window \x0a\x09\x09addEventListener: 'popstate'\x0a\x09\x09do: [\x0a\x09\x09\x09WebsiteAnnouncer current announce:\x0a\x09\x09\x09\x09(PageChange for: self pageForURL)\x0a\x09\x09]\x0a\x09\x09\x0a\x09\x09",
messageSends: ["unsubscribe:", "current", "on:send:to:", "addEventListener:do:", "announce:", "for:", "pageForURL"],
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
