define("amber-sketchcode/SketchCode-Spikes", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Canvas"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('SketchCode-Spikes');
smalltalk.packages["SketchCode-Spikes"].transport = {"type":"amd","amdNamespace":"amber-sketchcode"};

smalltalk.addClass('ColumnHeaderHandle', globals.Widget, ['theColumn'], 'SketchCode-Spikes');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.ColumnHeaderHandle.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ColumnHeaderHandle)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.ColumnHeaderHandle);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$8,$4,$2;
$1=_st(html)._ul();
_st($1)._class_("dropdown-menu");
$ctx1.sendIdx["class:"]=1;
_st($1)._style_("width: 100%");
$ctx1.sendIdx["style:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._li();
_st($3)._style_("padding-left: 10px; padding-right: 10px");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._button();
$ctx3.sendIdx["button"]=1;
_st($5)._class_("btn btn-default pull-left");
$ctx3.sendIdx["class:"]=2;
$6=_st($5)._with_("<=>");
$ctx3.sendIdx["with:"]=3;
$6;
$7=_st(html)._button();
_st($7)._class_("btn btn-danger pull-right");
_st($7)._with_("(X)");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._removeColumn();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.ColumnHeaderHandle)});},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html ul class: 'dropdown-menu' ; style: 'width: 100%'; with: [\x0a\x09\x09html li style: 'padding-left: 10px; padding-right: 10px'; with:[\x0a\x09\x09\x09html button class:'btn btn-default pull-left'; with: '<=>'.\x0a\x09\x09\x09html button \x0a\x09\x09\x09class:'btn btn-danger pull-right' ; \x0a\x09\x09\x09with: '(X)' ;\x0a\x09\x09\x09onClick: [ self removeColumn ].\x0a\x09\x09].\x09\x0a\x09].",
messageSends: ["class:", "ul", "style:", "with:", "li", "button", "onClick:", "removeColumn"],
referencedClasses: []
}),
globals.ColumnHeaderHandle);

smalltalk.addMethod(
smalltalk.method({
selector: "theColumn",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@theColumn"];
return $1;
},
args: [],
source: "theColumn\x0a\x09^ theColumn",
messageSends: [],
referencedClasses: []
}),
globals.ColumnHeaderHandle);

smalltalk.addMethod(
smalltalk.method({
selector: "theColumn:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@theColumn"]=anObject;
return self;},
args: ["anObject"],
source: "theColumn: anObject\x0a\x09theColumn := anObject",
messageSends: [],
referencedClasses: []
}),
globals.ColumnHeaderHandle);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'instance creation',
fn: function (aColumnName) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._new();
_st($1)._theColumn_(aColumnName);
$2=_st($1)._yourself();
return self}, function($ctx1) {$ctx1.fill(self,"for:",{aColumnName:aColumnName},globals.ColumnHeaderHandle.klass)});},
args: ["aColumnName"],
source: "for: aColumnName\x0a\x0a self new theColumn: aColumnName; yourself.",
messageSends: ["theColumn:", "new", "yourself"],
referencedClasses: []
}),
globals.ColumnHeaderHandle.klass);


smalltalk.addClass('Spike', globals.Widget, [], 'SketchCode-Spikes');
globals.Spike.comment="I am an abstract spike. I define an interface that spike classes use to explore aspects systematically.\x0a\x0aA spike exposes:\x0a\x0a* renderHeadingOn: - The test's heading\x0a* renderProblemOn: - HTML problem definition\x0a* renderTestbedOn: - DOM where the tests are conducted\x0a* renderFindingsOn: - HTML section with reflections & conclusions\x0a\x0a\x0a, and that the HTMLGUISpikes singleton uses to render them.\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "renderFindingsOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderFindingsOn:",{html:html},globals.Spike)});},
args: ["html"],
source: "renderFindingsOn:html\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Spike);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadingOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadingOn:",{html:html},globals.Spike)});},
args: ["html"],
source: "renderHeadingOn:html\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Spike);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._section();
_st($1)._class_("spike");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderHeadingOn_(html);
self._renderProblemOn_(html);
self._renderTestbedOn_(html);
return self._renderFindingsOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Spike)});},
args: ["html"],
source: "renderOn:html\x0a\x0a\x09html section \x0a\x09\x09class: 'spike' ;\x0a\x09\x09with: [\x0a\x09\x09\x09self renderHeadingOn: html.\x0a\x09\x09\x09self renderProblemOn: html.\x0a\x09\x09\x09self renderTestbedOn: html.\x0a\x09\x09\x09self renderFindingsOn: html.\x0a\x0a\x09\x09]",
messageSends: ["class:", "section", "with:", "renderHeadingOn:", "renderProblemOn:", "renderTestbedOn:", "renderFindingsOn:"],
referencedClasses: []
}),
globals.Spike);

smalltalk.addMethod(
smalltalk.method({
selector: "renderProblemOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderProblemOn:",{html:html},globals.Spike)});},
args: ["html"],
source: "renderProblemOn:html\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Spike);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTestbedOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderTestbedOn:",{html:html},globals.Spike)});},
args: ["html"],
source: "renderTestbedOn:html\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
globals.Spike);



smalltalk.addClass('GridTable', globals.Spike, ['rows', 'columns', 'table', 'cells'], 'SketchCode-Spikes');
smalltalk.addMethod(
smalltalk.method({
selector: "cellsForColumn:",
protocol: 'rendering',
fn: function (aColumn) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@cells"])._select_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(cell)._asJQuery())._attr_("data-state")).__eq(aColumn);
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellsForColumn:",{aColumn:aColumn},globals.GridTable)});},
args: ["aColumn"],
source: "cellsForColumn: aColumn\x0a\x0a\x09^ cells select: [:cell |  (cell asJQuery attr: 'data-state') = aColumn ]",
messageSends: ["select:", "=", "attr:", "asJQuery"],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColumn:",
protocol: 'rendering',
fn: function (aColumn) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._cellsForColumn_(aColumn))._do_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cell)._asJQuery())._addClass_("highlighted");
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"highlightColumn:",{aColumn:aColumn},globals.GridTable)});},
args: ["aColumn"],
source: "highlightColumn: aColumn\x0a\x0a\x09\x0a\x09(self cellsForColumn: aColumn) do: [ :cell |\x0a\x09\x09cell asJQuery addClass: 'highlighted'\x0a\x09]",
messageSends: ["do:", "cellsForColumn:", "addClass:", "asJQuery"],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.GridTable.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@rows"]=["open", "close", "lock"];
self["@columns"]=["open", "closed", "locked"];
self["@cells"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.GridTable)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09rows := #( #open #close #lock ).\x0a\x09columns := #( #open #closed #locked ).\x0a\x09cells := #().",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "removeColumn:",
protocol: 'initialization',
fn: function (aColumn) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self._cellsForColumn_(aColumn))._do_((function(cell){
return smalltalk.withContext(function($ctx2) {
$1=_st(cell)._asJQuery();
$ctx2.sendIdx["asJQuery"]=1;
_st($1)._addClass_("faded-out");
$ctx2.sendIdx["addClass:"]=1;
_st((function(){
return smalltalk.withContext(function($ctx3) {
$2=_st(cell)._asJQuery();
$ctx3.sendIdx["asJQuery"]=2;
return _st($2)._addClass_("zero-width");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}))._valueWithTimeout_((200));
$ctx2.sendIdx["valueWithTimeout:"]=1;
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(cell)._asJQuery())._remove();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}))._valueWithTimeout_((1000));
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeColumn:",{aColumn:aColumn},globals.GridTable)});},
args: ["aColumn"],
source: "removeColumn: aColumn\x0a\x0a\x09\x0a\x09(self cellsForColumn: aColumn) do: [ :cell |\x0a\x09\x09cell asJQuery addClass: 'faded-out'.\x0a\x09\x09[ cell asJQuery addClass: 'zero-width' ] valueWithTimeout: 200.\x0a\x09\x09[ cell asJQuery remove ] valueWithTimeout: 1000.\x0a\x09]",
messageSends: ["do:", "cellsForColumn:", "addClass:", "asJQuery", "valueWithTimeout:", "remove"],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderCellForState:event:On:",
protocol: 'rendering',
fn: function (aState, anEvent, html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=self["@cells"];
$3=_st(html)._div();
_st($3)._class_("span3");
_st($3)._at_put_("data-state",aState);
$ctx1.sendIdx["at:put:"]=1;
_st($3)._at_put_("data-event",anEvent);
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._textarea())._with_("| tmp | \x0aTranscript show: 'foo'");
$ctx2.sendIdx["with:"]=2;
return _st(_st(html)._select())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._option())._with_("closed");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
$2=$4;
_st($1)._add_($2);
return self}, function($ctx1) {$ctx1.fill(self,"renderCellForState:event:On:",{aState:aState,anEvent:anEvent,html:html},globals.GridTable)});},
args: ["aState", "anEvent", "html"],
source: "renderCellForState: aState event: anEvent On: html\x0a\x0a\x09cells add: (html div \x0a\x09\x09class: 'span3' ;\x0a\x09\x09at: 'data-state' put: aState ;\x0a\x09\x09at: 'data-event' put: anEvent ;\x0a\x09\x09with: [\x0a\x09\x09\x09html textarea with: '| tmp | \x0aTranscript show: ''foo'''.\x0a\x09\x09\x09html select with: [html option with: 'closed']\x0a\x09\x09]\x0a\x09)",
messageSends: ["add:", "class:", "div", "at:put:", "with:", "textarea", "select", "option"],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderColumnHandleFor:on:",
protocol: 'rendering',
fn: function (aColumnName, html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$8,$4,$2;
$1=_st(html)._ul();
_st($1)._class_("dropdown-menu");
$ctx1.sendIdx["class:"]=1;
_st($1)._style_("width: 100%");
$ctx1.sendIdx["style:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._li();
_st($3)._style_("padding-left: 10px; padding-right: 10px");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._button();
$ctx3.sendIdx["button"]=1;
_st($5)._class_("btn btn-default pull-left");
$ctx3.sendIdx["class:"]=2;
$6=_st($5)._with_("<=>");
$ctx3.sendIdx["with:"]=3;
$6;
$7=_st(html)._button();
_st($7)._class_("btn btn-danger pull-right");
_st($7)._with_("(X)");
$8=_st($7)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return self._removeColumn_(aColumnName);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
return $8;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderColumnHandleFor:on:",{aColumnName:aColumnName,html:html},globals.GridTable)});},
args: ["aColumnName", "html"],
source: "renderColumnHandleFor: aColumnName on: html\x0a\x0a\x09html ul class: 'dropdown-menu' ; style: 'width: 100%'; with: [\x0a\x09\x09html li style: 'padding-left: 10px; padding-right: 10px'; with:[\x0a\x09\x09\x09html button class:'btn btn-default pull-left'; with: '<=>'.\x0a\x09\x09\x09html button \x0a\x09\x09\x09class:'btn btn-danger pull-right' ; \x0a\x09\x09\x09with: '(X)' ;\x0a\x09\x09\x09onClick: [ self removeColumn: aColumnName ].\x0a\x09\x09].\x09\x0a\x09].",
messageSends: ["class:", "ul", "style:", "with:", "li", "button", "onClick:", "removeColumn:"],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderFindingsOn:",
protocol: 'spike interface',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
_st(html)._h5_("Conclusions:");
$2=_st("Using Bootstrap works well; the styles can be CSS animated well. We first set the class to faded-out, ".__comma("which CSS animates it to disappear, and then use JS timeouts trigger transformations of width and finally ")).__comma("to remove the DOMelement.");
$ctx1.sendIdx[","]=1;
$1=_st(html)._p_($2);
return self}, function($ctx1) {$ctx1.fill(self,"renderFindingsOn:",{html:html},globals.GridTable)});},
args: ["html"],
source: "renderFindingsOn: html\x0a\x0a\x09html \x0a\x09\x09h5: 'Conclusions:' ;\x0a\x09\x09\x0a\x09\x09p: 'Using Bootstrap works well; the styles can be CSS animated well. We first set the class to faded-out, ' ,\x0a\x09\x09   'which CSS animates it to disappear, and then use JS timeouts trigger transformations of width and finally ' ,\x0a\x09\x09   'to remove the DOMelement.'.\x0a\x09\x09",
messageSends: ["h5:", "p:", ","],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderHeadingOn:",
protocol: 'spike interface',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._h2_("Rendering a Table from Bootstrap Grid Elements");
return self}, function($ctx1) {$ctx1.fill(self,"renderHeadingOn:",{html:html},globals.GridTable)});},
args: ["html"],
source: "renderHeadingOn: html\x0a\x09html h2: 'Rendering a Table from Bootstrap Grid Elements'",
messageSends: ["h2:"],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderProblemOn:",
protocol: 'spike interface',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._p_("\x0a\x09\x09\x09HTML tables are difficult to work with because they adapt to \x0a\x09\x09\x09their content automatically, and try to distribute it evenly across\x0a\x09\x09\x09the width of the display. Here I will explore how bootstrap grid\x0a\x09\x09\x09elements behave for CSS animation on adding content, reordering\x0a\x09\x09\x09and removing table elements.\x0a\x09\x09");
return self}, function($ctx1) {$ctx1.fill(self,"renderProblemOn:",{html:html},globals.GridTable)});},
args: ["html"],
source: "renderProblemOn: html\x0a\x09html \x0a\x09\x09p: '\x0a\x09\x09\x09HTML tables are difficult to work with because they adapt to \x0a\x09\x09\x09their content automatically, and try to distribute it evenly across\x0a\x09\x09\x09the width of the display. Here I will explore how bootstrap grid\x0a\x09\x09\x09elements behave for CSS animation on adding content, reordering\x0a\x09\x09\x09and removing table elements.\x0a\x09\x09'",
messageSends: ["p:"],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTestbedOn:",
protocol: 'spike interface',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$8,$9,$4,$10,$12,$13,$11,$2;
$1=_st(html)._div();
$ctx1.sendIdx["div"]=1;
_st($1)._style_("border: 1px solid gray;\x0a\x09\x09\x09\x09border-radius: 5px;\x0a\x09\x09\x09\x09box-shadow: 10px 10px 5px #888888;\x09\x09\x09\x09\x0a\x09\x09\x09   ");
_st($1)._class_("concept-editor state-machine grid-table-spike");
$ctx1.sendIdx["class:"]=1;
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderstylesOn_(html);
$3=_st(html)._div();
$ctx2.sendIdx["div"]=2;
_st($3)._class_("row");
$ctx2.sendIdx["class:"]=2;
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._div();
$ctx3.sendIdx["div"]=3;
_st($5)._class_("span2");
$ctx3.sendIdx["class:"]=3;
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(html)._h5_("Events \x5c States");
$ctx4.sendIdx["h5:"]=1;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
$6;
return _st(self["@columns"])._do_((function(state){
var cellHeader;
return smalltalk.withContext(function($ctx4) {
$7=_st(html)._div();
$ctx4.sendIdx["div"]=4;
_st($7)._class_("span3 dropup");
$ctx4.sendIdx["class:"]=4;
_st($7)._at_put_("data-state",state);
_st($7)._with_((function(){
return smalltalk.withContext(function($ctx5) {
self._renderColumnHandleFor_on_(state,html);
return _st(html)._h5_(_st(state)._capitalized());
$ctx5.sendIdx["h5:"]=2;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)})}));
$ctx4.sendIdx["with:"]=4;
_st($7)._onMouseEnter_((function(){
return smalltalk.withContext(function($ctx5) {
$8=_st(cellHeader)._asJQuery();
$ctx5.sendIdx["asJQuery"]=1;
_st($8)._addClass_("open");
return self._highlightColumn_(state);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)})}));
$9=_st($7)._onMouseLeave_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(cellHeader)._asJQuery())._removeClass_("open");
return self._unhighlightColumn_(state);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,7)})}));
cellHeader=$9;
cellHeader;
return _st(self["@cells"])._add_(cellHeader);
}, function($ctx4) {$ctx4.fillBlock({state:state,cellHeader:cellHeader},$ctx3,4)})}));
$ctx3.sendIdx["do:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
$4;
return _st(self["@rows"])._do_((function(event){
return smalltalk.withContext(function($ctx3) {
$10=_st(html)._div();
$ctx3.sendIdx["div"]=5;
_st($10)._class_("row");
$ctx3.sendIdx["class:"]=5;
$11=_st($10)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$12=_st(html)._div();
_st($12)._class_("span2");
$13=_st($12)._with_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(html)._h5_(event);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,10)})}));
$13;
return _st(self["@columns"])._do_((function(state){
return smalltalk.withContext(function($ctx5) {
return self._renderCellForState_event_On_(state,event,html);
}, function($ctx5) {$ctx5.fillBlock({state:state},$ctx4,11)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,9)})}));
$ctx3.sendIdx["with:"]=5;
return $11;
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx2,8)})}));
$ctx2.sendIdx["do:"]=2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderTestbedOn:",{html:html},globals.GridTable)});},
args: ["html"],
source: "renderTestbedOn: html\x0a\x0a\x09html div \x0a\x09\x09style: 'border: 1px solid gray;\x0a\x09\x09\x09\x09border-radius: 5px;\x0a\x09\x09\x09\x09box-shadow: 10px 10px 5px #888888;\x09\x09\x09\x09\x0a\x09\x09\x09   ' ;\x0a\x09\x09class: 'concept-editor state-machine grid-table-spike'; \x0a\x09\x09with: [\x0a\x09\x09\x09self renderstylesOn: html .\x0a\x09\x09\x09\x0a\x09\x09\x09html div class: 'row'; with: [\x0a\x09\x09\x09\x09html div class: 'span2'; with: [html h5: 'Events \x5c States' ].\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09columns do: [ :state |\x09\x0a\x09\x09\x09\x09\x09| cellHeader| \x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09cellHeader :=\x0a\x09\x09\x09\x09\x09\x09(html div \x0a\x09\x09\x09\x09\x09\x09\x09class: 'span3 dropup' ;\x0a\x09\x09\x09\x09\x09\x09\x09at: 'data-state' put: state ;\x0a\x09\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09self renderColumnHandleFor: state on: html.\x0a\x09\x09\x09\x09\x09\x09\x09\x09html h5: state capitalized \x0a\x09\x09\x09\x09\x09\x09\x09] ;\x0a\x09\x09\x09\x09\x09\x09\x09onMouseEnter: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09cellHeader asJQuery addClass: 'open'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09self highlightColumn: state \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09] ;\x0a\x09\x09\x09\x09\x09\x09\x09onMouseLeave: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09cellHeader asJQuery removeClass: 'open'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09self unhighlightColumn: state \x0a\x09\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09).\x0a\x09\x09\x09\x09\x09cells add: cellHeader.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x0a\x09\x09\x09].\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09rows do: [ :event |\x0a\x09\x09\x09\x09html div class: 'row'; with: [\x0a\x0a\x09\x09\x09\x09\x09html div class: 'span2'; with: [html h5: event].\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09columns do: [ :state |\x0a\x09\x09\x09\x09\x09\x09self renderCellForState: state event: event On: html\x0a\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09]\x0a\x09\x0a\x09\x09]\x0a\x09",
messageSends: ["style:", "div", "class:", "with:", "renderstylesOn:", "h5:", "do:", "at:put:", "renderColumnHandleFor:on:", "capitalized", "onMouseEnter:", "addClass:", "asJQuery", "highlightColumn:", "onMouseLeave:", "removeClass:", "unhighlightColumn:", "add:", "renderCellForState:event:On:"],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderstylesOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._style())._with_("\x0a\x0a\x09\x09div {transition: opacity 0.2s, width 0.3s, margin 0.3s, background-color 0.3s; }\x0a\x09\x09.faded-out {\x0a\x09\x09\x09opacity: 0;\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09div.highlighted { background-color: #c4e3f3; }\x0a\x09\x09\x0a\x09\x09.zero-width { \x0a\x09\x09\x09width: 0px;\x0a\x09\x09\x09margin: 0;\x0a\x09\x09}\x0a\x09\x0a\x09\x09\x0a\x09");
return self}, function($ctx1) {$ctx1.fill(self,"renderstylesOn:",{html:html},globals.GridTable)});},
args: ["html"],
source: "renderstylesOn: html\x0a\x0ahtml style with: '\x0a\x0a\x09\x09div {transition: opacity 0.2s, width 0.3s, margin 0.3s, background-color 0.3s; }\x0a\x09\x09.faded-out {\x0a\x09\x09\x09opacity: 0;\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09div.highlighted { background-color: #c4e3f3; }\x0a\x09\x09\x0a\x09\x09.zero-width { \x0a\x09\x09\x09width: 0px;\x0a\x09\x09\x09margin: 0;\x0a\x09\x09}\x0a\x09\x0a\x09\x09\x0a\x09'",
messageSends: ["with:", "style"],
referencedClasses: []
}),
globals.GridTable);

smalltalk.addMethod(
smalltalk.method({
selector: "unhighlightColumn:",
protocol: 'rendering',
fn: function (aColumn) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._cellsForColumn_(aColumn))._do_((function(cell){
return smalltalk.withContext(function($ctx2) {
return _st(_st(cell)._asJQuery())._removeClass_("highlighted");
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unhighlightColumn:",{aColumn:aColumn},globals.GridTable)});},
args: ["aColumn"],
source: "unhighlightColumn: aColumn\x0a\x0a\x09\x0a\x09(self cellsForColumn: aColumn) do: [ :cell |\x0a\x09\x09cell asJQuery removeClass: 'highlighted'\x0a\x09]",
messageSends: ["do:", "cellsForColumn:", "removeClass:", "asJQuery"],
referencedClasses: []
}),
globals.GridTable);



smalltalk.addClass('SpikesCollection', globals.Widget, [], 'SketchCode-Spikes');
globals.SpikesCollection.comment="I am the container of all HTML spikes. I do nothing but aggregating my little spikes into the DOM.\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
function $TableColumnTransition(){return globals.TableColumnTransition||(typeof TableColumnTransition=="undefined"?nil:TableColumnTransition)}
function $OutsetWidget(){return globals.OutsetWidget||(typeof OutsetWidget=="undefined"?nil:OutsetWidget)}
function $Spike(){return globals.Spike||(typeof Spike=="undefined"?nil:Spike)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
$1=_st(html)._div();
_st($1)._class_("gui-spikes");
_st($1)._style_("");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._h1_("HTML GUI Spikes");
$3=_st($TableColumnTransition())._new();
$ctx2.sendIdx["new"]=1;
_st($3)._renderOn_(html);
$ctx2.sendIdx["renderOn:"]=1;
$4=_st($OutsetWidget())._new();
$ctx2.sendIdx["new"]=2;
_st($4)._renderOn_(html);
$ctx2.sendIdx["renderOn:"]=2;
return _st($Spike())._allSubclassesDo_((function(spike){
return smalltalk.withContext(function($ctx3) {
return _st(_st(spike)._new())._renderOn_(html);
}, function($ctx3) {$ctx3.fillBlock({spike:spike},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.SpikesCollection)});},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html div \x0a\x09\x09class: 'gui-spikes' ;\x0a\x09\x09style: '' ;\x0a\x09\x09with: [\x0a\x09\x09\x09html h1: 'HTML GUI Spikes'.\x0a\x09\x09\x09\x0a\x09\x09\x09TableColumnTransition new renderOn: html.\x0a\x09\x09\x09\x0a\x09\x09\x09OutsetWidget new renderOn: html.\x0a\x09\x09\x09\x0a\x09\x09\x09Spike allSubclassesDo: [:spike |\x0a\x09\x09\x09\x09spike new renderOn: html\x0a\x09\x09\x09]\x0a\x09\x09].",
messageSends: ["class:", "div", "style:", "with:", "h1:", "renderOn:", "new", "allSubclassesDo:"],
referencedClasses: ["TableColumnTransition", "OutsetWidget", "Spike"]
}),
globals.SpikesCollection);


smalltalk.addMethod(
smalltalk.method({
selector: "render",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="#main"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
_st(self._new())._appendToJQuery_("#main"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},globals.SpikesCollection.klass)});},
args: [],
source: "render\x0a\x09'#main' asJQuery empty.\x0a\x09self new appendToJQuery: '#main' asJQuery.",
messageSends: ["empty", "asJQuery", "appendToJQuery:", "new"],
referencedClasses: []
}),
globals.SpikesCollection.klass);


smalltalk.addClass('TableColumnTransition', globals.Widget, ['table', 'columns'], 'SketchCode-Spikes');
smalltalk.addMethod(
smalltalk.method({
selector: "expandInsertedColumns",
protocol: 'rendering',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 

		$('.just-inserted').removeClass('just-inserted');
	;
return self}, function($ctx1) {$ctx1.fill(self,"expandInsertedColumns",{},globals.TableColumnTransition)});},
args: [],
source: "expandInsertedColumns\x0a\x09<\x0a\x09\x09$('.just-inserted').removeClass('just-inserted');\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
globals.TableColumnTransition);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
globals.TableColumnTransition.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@columns"]=_st($Array())._new();
self["@table"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.TableColumnTransition)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09columns := Array new.\x0a\x09table := nil",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
globals.TableColumnTransition);

smalltalk.addMethod(
smalltalk.method({
selector: "insertColumn",
protocol: 'rendering',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@columns"])._at_((1)))._do_((function(tdBrush){
return smalltalk.withContext(function($ctx2) {
return _st(_st(tdBrush)._asJQuery())._after_("\x0a\x09\x09<td>\x0a\x09\x09\x09<div class=\x22just-inserted table-cell-wrapper\x22>\x0a\x09\x09\x09\x09<textarea></textarea>\x0a\x09\x09\x09\x09<select>\x0a\x09\x09\x09\x09\x09<option>open</select>\x0a\x09\x09\x09\x09\x09<option>closed</option>\x0a\x09\x09\x09\x09</select>\x0a\x09\x09\x09</div>\x0a\x09\x09</td>");
}, function($ctx2) {$ctx2.fillBlock({tdBrush:tdBrush},$ctx1,1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._expandInsertedColumns();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._valueWithTimeout_((0));
return self}, function($ctx1) {$ctx1.fill(self,"insertColumn",{},globals.TableColumnTransition)});},
args: [],
source: "insertColumn\x0a\x09(columns at: 1) do: [ :tdBrush |\x0a\x09\x09tdBrush asJQuery after: '\x0a\x09\x09<td>\x0a\x09\x09\x09<div class=\x22just-inserted table-cell-wrapper\x22>\x0a\x09\x09\x09\x09<textarea></textarea>\x0a\x09\x09\x09\x09<select>\x0a\x09\x09\x09\x09\x09<option>open</select>\x0a\x09\x09\x09\x09\x09<option>closed</option>\x0a\x09\x09\x09\x09</select>\x0a\x09\x09\x09</div>\x0a\x09\x09</td>'\x0a\x09].\x0a\x09\x0a\x09\x22\x0a\x09We need to defer this to a timeout because the DOM will not render before this JS callback has returned.\x0a\x09And we want the columns to be known with their insered size before we transist to the expanded size.\x0a\x09\x22\x0a\x09[ self expandInsertedColumns ] valueWithTimeout: 0.",
messageSends: ["do:", "at:", "after:", "asJQuery", "valueWithTimeout:", "expandInsertedColumns"],
referencedClasses: []
}),
globals.TableColumnTransition);

smalltalk.addMethod(
smalltalk.method({
selector: "renderButtonsOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._button();
$ctx1.sendIdx["button"]=1;
_st($1)._class_("btn btn-primary");
$ctx1.sendIdx["class:"]=1;
_st($1)._with_("Insert Column");
$ctx1.sendIdx["with:"]=1;
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._insertColumn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["onClick:"]=1;
$3=_st(html)._button();
_st($3)._class_("btn btn-danger pull-right");
_st($3)._with_("Reset");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return self._reset();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderButtonsOn:",{html:html},globals.TableColumnTransition)});},
args: ["html"],
source: "renderButtonsOn: html\x0a\x0a\x09html button \x0a\x09\x09class: 'btn btn-primary' ;\x0a\x09\x09with: 'Insert Column' ;\x0a\x09\x09onClick: [ self insertColumn ] .\x0a\x09\x0a\x09html button \x0a\x09\x09class: 'btn btn-danger pull-right' ;\x0a\x09\x09with: 'Reset' ;\x0a\x09\x09onClick: [ self reset ].\x0a\x09",
messageSends: ["class:", "button", "with:", "onClick:", "insertColumn", "reset"],
referencedClasses: []
}),
globals.TableColumnTransition);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self._renderProblemDescriptionOn_(html);
$1=_st(html)._div();
_st($1)._style_("border: 1px solid gray;\x0a\x09\x09\x09\x09border-radius: 5px;\x0a\x09\x09\x09\x09box-shadow: 10px 10px 5px #888888;\x09\x09\x09\x09\x0a\x09\x09\x09   ");
_st($1)._class_("concept-editor state-machine");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
self._renderStylesOn_(html);
return self._renderTableOn_(html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(html)._br();
self._renderButtonsOn_(html);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.TableColumnTransition)});},
args: ["html"],
source: "renderOn: html \x0a\x09\x0a\x09self renderProblemDescriptionOn: html.\x09\x0a\x09\x0a\x09html div \x0a\x09\x09style: 'border: 1px solid gray;\x0a\x09\x09\x09\x09border-radius: 5px;\x0a\x09\x09\x09\x09box-shadow: 10px 10px 5px #888888;\x09\x09\x09\x09\x0a\x09\x09\x09   ' ;\x0a\x09\x09class: 'concept-editor state-machine'; \x0a\x09\x09with: [\x0a\x09\x09\x09\x0a\x09\x09\x09self renderStylesOn: html.\x0a\x0a\x09\x09\x09self renderTableOn: html.\x0a\x09\x09\x09\x0a\x09\x09\x0a\x09\x09].\x0a\x0a\x0a\x09html br.\x0a\x09\x0a\x09self renderButtonsOn: html.",
messageSends: ["renderProblemDescriptionOn:", "style:", "div", "class:", "with:", "renderStylesOn:", "renderTableOn:", "br", "renderButtonsOn:"],
referencedClasses: []
}),
globals.TableColumnTransition);

smalltalk.addMethod(
smalltalk.method({
selector: "renderProblemDescriptionOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(html)._h2_("Transitions when using tables");
$1=_st(html)._p_("Is it feasible to use a HTML table for transitions in inserting columns & rows?");
_st(html)._ul_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._li_("Can we animate to the cell's inherited with?");
$ctx2.sendIdx["li:"]=1;
return _st(html)._li_("Can we first slide, then insert?");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(html)._br();
return self}, function($ctx1) {$ctx1.fill(self,"renderProblemDescriptionOn:",{html:html},globals.TableColumnTransition)});},
args: ["html"],
source: "renderProblemDescriptionOn: html\x0a\x0a\x09html \x0a\x09\x09h2: 'Transitions when using tables' ;\x0a\x09\x09p: 'Is it feasible to use a HTML table for transitions in inserting columns & rows?'.\x0a\x09\x09html ul: [\x0a\x09\x09\x09html li: 'Can we animate to the cell''s inherited with?'.\x0a\x09\x09\x09html li: 'Can we first slide, then insert?'\x0a\x09\x09].\x0a\x0a\x09\x09html br.",
messageSends: ["h2:", "p:", "ul:", "li:", "br"],
referencedClasses: []
}),
globals.TableColumnTransition);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStylesOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._style_("\x0a\x09\x09\x09\x09div.table-cell-wrapper {\x0a\x09\x09\x09\x09\x09transition: scale 5s, opacity 5s;\x0a\x0a\x09\x09\x09\x09\x09border:1px solid black;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09div.just-inserted { \x0a\x09\x09\x09\x09\x09transform: scaleX(0);\x0a\x09\x09\x09\x09\x09border: 1px solid red;\x0a\x09\x09\x09\x09\x09opacity: 0;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.table-header {position:relative; }\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09div.column-separator {\x0a\x09\x09\x09\x09\x09width: 10px;\x0a\x09\x09\x09\x09\x09background-color: lightblue;\x0a\x09\x09\x09\x09\x09position:absolute;\x0a\x09\x09\x09\x09\x09left:0px;\x0a\x09\x09\x09\x09\x09top: 0px;\x0a\x09\x09\x09\x09\x09height: 488px;\x0a\x09\x09\x09\x09\x09opacity: 0.1;\x0a\x09\x09\x09\x09\x09transition: opacity 0.2s;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.column-separator:hover {opacity: 1;}\x0a\x09\x09\x09");
return self}, function($ctx1) {$ctx1.fill(self,"renderStylesOn:",{html:html},globals.TableColumnTransition)});},
args: ["html"],
source: "renderStylesOn: html\x0a\x0a\x09html style: '\x0a\x09\x09\x09\x09div.table-cell-wrapper {\x0a\x09\x09\x09\x09\x09transition: scale 5s, opacity 5s;\x0a\x0a\x09\x09\x09\x09\x09border:1px solid black;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09div.just-inserted { \x0a\x09\x09\x09\x09\x09transform: scaleX(0);\x0a\x09\x09\x09\x09\x09border: 1px solid red;\x0a\x09\x09\x09\x09\x09opacity: 0;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.table-header {position:relative; }\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09div.column-separator {\x0a\x09\x09\x09\x09\x09width: 10px;\x0a\x09\x09\x09\x09\x09background-color: lightblue;\x0a\x09\x09\x09\x09\x09position:absolute;\x0a\x09\x09\x09\x09\x09left:0px;\x0a\x09\x09\x09\x09\x09top: 0px;\x0a\x09\x09\x09\x09\x09height: 488px;\x0a\x09\x09\x09\x09\x09opacity: 0.1;\x0a\x09\x09\x09\x09\x09transition: opacity 0.2s;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09.column-separator:hover {opacity: 1;}\x0a\x09\x09\x09'.",
messageSends: ["style:"],
referencedClasses: []
}),
globals.TableColumnTransition);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTableOn:",
protocol: 'rendering',
fn: function (html) {
var self=this;
var states,events;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$11,$12,$14,$13,$15,$16,$17,$19,$18,$10;
states=["closed", "open", "locked"];
events=["open", "close", "lock", "unlock"];
$1=_st($Array())._new();
$ctx1.sendIdx["new"]=1;
$2=$1;
$3=_st($Array())._new();
$ctx1.sendIdx["new"]=2;
_st($2)._add_($3);
$ctx1.sendIdx["add:"]=1;
$4=$1;
$5=_st($Array())._new();
$ctx1.sendIdx["new"]=3;
_st($4)._add_($5);
$ctx1.sendIdx["add:"]=2;
$6=$1;
$7=_st($Array())._new();
$ctx1.sendIdx["new"]=4;
_st($6)._add_($7);
$ctx1.sendIdx["add:"]=3;
_st($1)._add_(_st($Array())._new());
$ctx1.sendIdx["add:"]=4;
$8=_st($1)._yourself();
self["@columns"]=$8;
$9=_st(html)._table();
_st($9)._class_("table table-striped table-condensed table-hover");
$ctx1.sendIdx["class:"]=1;
$10=_st($9)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._thead())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$11=_st(html)._th();
$ctx3.sendIdx["th"]=1;
_st($11)._with_("Events \x5c States");
$ctx3.sendIdx["with:"]=3;
_st(states)._do_((function(stateName){
return smalltalk.withContext(function($ctx4) {
$12=_st(html)._th();
$ctx4.sendIdx["th"]=2;
_st($12)._class_("table-header");
$ctx4.sendIdx["class:"]=2;
$13=_st($12)._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(html)._with_(stateName);
$ctx5.sendIdx["with:"]=5;
$14=_st(html)._div();
$ctx5.sendIdx["div"]=1;
return _st($14)._class_("column-separator");
$ctx5.sendIdx["class:"]=3;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
$ctx4.sendIdx["with:"]=4;
return $13;
}, function($ctx4) {$ctx4.fillBlock({stateName:stateName},$ctx3,3)})}));
$ctx3.sendIdx["do:"]=1;
$15=_st(html)._th();
$ctx3.sendIdx["th"]=3;
_st($15)._class_("table-header");
$ctx3.sendIdx["class:"]=4;
$16=_st($15)._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._div())._class_("column-separator");
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)})}));
$ctx3.sendIdx["with:"]=6;
return $16;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(events)._do_((function(event){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._th())._with_(event);
$ctx5.sendIdx["with:"]=9;
return _st(states)._withIndexDo_((function(state,index){
return smalltalk.withContext(function($ctx6) {
$17=_st(self["@columns"])._at_(index);
$18=_st(_st(html)._td())._with_((function(){
return smalltalk.withContext(function($ctx7) {
_st(_st(html)._textarea())._with_("|foo| \x0aTranscript show: 1");
$ctx7.sendIdx["with:"]=11;
return _st(_st(html)._select())._with_((function(){
return smalltalk.withContext(function($ctx8) {
$19=_st(html)._option();
$ctx8.sendIdx["option"]=1;
_st($19)._with_("open");
$ctx8.sendIdx["with:"]=13;
return _st(_st(html)._option())._with_("closed");
}, function($ctx8) {$ctx8.fillBlock({},$ctx7,11)})}));
$ctx7.sendIdx["with:"]=12;
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,10)})}));
$ctx6.sendIdx["with:"]=10;
return _st($17)._add_($18);
}, function($ctx6) {$ctx6.fillBlock({state:state,index:index},$ctx5,9)})}));
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,8)})}));
$ctx4.sendIdx["with:"]=8;
}, function($ctx4) {$ctx4.fillBlock({event:event},$ctx3,7)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,6)})}));
$ctx2.sendIdx["with:"]=7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@table"]=$10;
return self}, function($ctx1) {$ctx1.fill(self,"renderTableOn:",{html:html,states:states,events:events},globals.TableColumnTransition)});},
args: ["html"],
source: "renderTableOn: html\x0a\x0a\x09| states events |\x0a\x09\x0a\x09states := #(closed open locked).\x0a\x09events := #(open close lock unlock).\x0a\x09\x0a\x09columns := Array new \x0a\x09\x09add: Array new ;\x0a\x09\x09add: Array new ;\x0a\x09\x09add: Array new ;\x0a\x09\x09add: Array new ;\x0a\x09\x09yourself.\x0a\x09\x0a\x09table := html table class: 'table table-striped table-condensed table-hover'; with: [\x0a\x09\x09\x09\x09html thead with: [\x0a\x09\x09\x09\x09\x09html th with: 'Events \x5c States'.\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09states do: [ :stateName |\x0a\x09\x09\x09\x09\x09\x09html th class: 'table-header'; with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09html with: stateName.\x0a\x09\x09\x09\x09\x09\x09\x09html div class: 'column-separator'.\x0a\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x22final separator \x22\x0a\x09\x09\x09\x09\x09html th class: 'table-header'; with: [\x0a\x09\x09\x09\x09\x09\x09html div class: 'column-separator'.\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09\x09events do: [ :event |\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09\x09\x09html th with: event.\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09states withIndexDo: [:state :index|\x0a\x09\x09\x09\x09\x09\x09\x09\x09(columns at: index) add: (\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html td with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html textarea with: '|foo| \x0aTranscript show: 1'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html select with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html option with: 'open'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html option with: 'closed'].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09\x09\x09)\x0a\x09\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09].",
messageSends: ["add:", "new", "yourself", "class:", "table", "with:", "thead", "th", "do:", "div", "tbody", "tr", "withIndexDo:", "at:", "td", "textarea", "select", "option"],
referencedClasses: ["Array"]
}),
globals.TableColumnTransition);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
protocol: 'rendering',
fn: function () {
var self=this;
function $SpikesCollection(){return globals.SpikesCollection||(typeof SpikesCollection=="undefined"?nil:SpikesCollection)}
return smalltalk.withContext(function($ctx1) { 
_st($SpikesCollection())._render();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},globals.TableColumnTransition)});},
args: [],
source: "reset\x0a\x0a\x09SpikesCollection render",
messageSends: ["render"],
referencedClasses: ["SpikesCollection"]
}),
globals.TableColumnTransition);



smalltalk.addClass('OutsetWidget', globals.TableColumnTransition, ['table', 'columns'], 'SketchCode-Spikes');
smalltalk.addMethod(
smalltalk.method({
selector: "removeColumn",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._rightColCells();
$ctx1.sendIdx["rightColCells"]=1;
_st($1)._do_((function(td){
return smalltalk.withContext(function($ctx2) {
$2=_st(td)._asJQuery();
$ctx2.sendIdx["asJQuery"]=1;
return _st($2)._addClass_("fading-out");
}, function($ctx2) {$ctx2.fillBlock({td:td},$ctx1,1)})}));
$ctx1.sendIdx["do:"]=1;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._rightColCells())._do_((function(td){
return smalltalk.withContext(function($ctx3) {
return _st(_st(td)._asJQuery())._remove();
}, function($ctx3) {$ctx3.fillBlock({td:td},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._valueWithTimeout_((400));
return self}, function($ctx1) {$ctx1.fill(self,"removeColumn",{},globals.OutsetWidget)});},
args: [],
source: "removeColumn\x0a\x09\x0a\x0a\x09self rightColCells do: [:td | td asJQuery addClass: 'fading-out'].\x0a\x09[self rightColCells do: [:td | td asJQuery remove]] valueWithTimeout: 400.",
messageSends: ["do:", "rightColCells", "addClass:", "asJQuery", "valueWithTimeout:", "remove"],
referencedClasses: []
}),
globals.OutsetWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderProblemDescriptionOn:",
protocol: 'as yet unclassified',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(html)._br();
$ctx1.sendIdx["br"]=1;
_st(html)._h1_("Placing a widget around a DOM element");
_st(html)._p_("We often want to hover a view element and have widget appear around or next to it\x0a\x09\x09\x09to provide context sensitive controls. Most DOM elements have sizes and postions that are\x0a\x09\x09\x09hard to determine programmatically, and that might even change as the browser window is resized.\x0a\x09\x09\x09\x0a\x09\x09\x09Here we will try to see if we can place a widget inside a table cell (and table column header)\x0a\x09\x09\x09that will follow the size of its view element.\x0a\x09\x09");
$ctx1.sendIdx["p:"]=1;
_st(html)._p_("Finding Notes: It seems that using code and calculating px coordinates, in combination with \x0a\x09\x09    catching window reflow events, may be simplest & most robust. It may be jeryk though - maybe good \x0a\x09\x09\x09enough for prototypes, maybe not.");
$ctx1.sendIdx["p:"]=2;
_st(html)._h5_("Approaches tried:");
_st(html)._ul_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._li_("Twitter bootstrap dropdown menus");
$ctx2.sendIdx["li:"]=1;
_st(html)._li_("CSS media queries cannot access other elements; only the window.");
$ctx2.sendIdx["li:"]=2;
_st(html)._li_("Using a combo of position: relative in the container & position: absolute in the widget\x0a\x09\x09\x09\x09     inherits properties like \x22text-align: center\x22 to the widget ");
$ctx2.sendIdx["li:"]=3;
$1=_st(html)._li_("Also, some elements (like the table column) are not first-class DOM elements, so querying \x0a\x09\x09\x09\x09\x09geometry requires ST/JS code anyway");
return $1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(html)._p_("Looking through Apple pages and jQuery UI, draggables do not seem to leave the original element\x0a\x09\x09\x09\x09visible, and pop the other elements into place as the sorting progresses. This will be hard to do\x0a\x09\x09\x09\x09with tables because tables adjust to the width of all content, and stretch to full page width. \x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09Shrinking columns also is difficult because td elements do not react to width styling \x0a\x09\x09\x09\x09(although content can be styled nicely).");
$ctx1.sendIdx["p:"]=3;
$2=_st(html)._p_("\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09notes\x0a\x09\x09\x09\x09- meaningful transitions should show the user where the UIchanged.\x0a\x09\x09\x09\x09- A grid view may be better for sortable tables.\x0a\x09\x09\x09\x09- Bootstrap dropdown/dropup seems to work very fine for our needs for contex specific UI / \x0a\x09\x09\x09\x09  instruments.\x0a\x09\x09");
_st(html)._br();
return self}, function($ctx1) {$ctx1.fill(self,"renderProblemDescriptionOn:",{html:html},globals.OutsetWidget)});},
args: ["html"],
source: "renderProblemDescriptionOn: html\x0a\x0a\x09html \x0a\x09\x09br ;\x0a\x09\x09h1: 'Placing a widget around a DOM element' ;\x0a\x09\x09p: 'We often want to hover a view element and have widget appear around or next to it\x0a\x09\x09\x09to provide context sensitive controls. Most DOM elements have sizes and postions that are\x0a\x09\x09\x09hard to determine programmatically, and that might even change as the browser window is resized.\x0a\x09\x09\x09\x0a\x09\x09\x09Here we will try to see if we can place a widget inside a table cell (and table column header)\x0a\x09\x09\x09that will follow the size of its view element.\x0a\x09\x09' ;\x0a\x09\x09p: 'Finding Notes: It seems that using code and calculating px coordinates, in combination with \x0a\x09\x09    catching window reflow events, may be simplest & most robust. It may be jeryk though - maybe good \x0a\x09\x09\x09enough for prototypes, maybe not.' ;\x0a\x09\x09\x09\x0a\x09\x09h5: 'Approaches tried:' ;\x0a\x09\x09\x09\x0a\x09\x09ul: [\x0a\x09\x09\x09html \x0a\x09\x09\x09\x09li: 'Twitter bootstrap dropdown menus' ;\x0a\x09\x09\x09\x09li: 'CSS media queries cannot access other elements; only the window.' ;\x0a\x09\x09\x09\x09li: 'Using a combo of position: relative in the container & position: absolute in the widget\x0a\x09\x09\x09\x09     inherits properties like \x22text-align: center\x22 to the widget ' ;\x0a\x09\x09\x09\x09li: 'Also, some elements (like the table column) are not first-class DOM elements, so querying \x0a\x09\x09\x09\x09\x09geometry requires ST/JS code anyway'. \x0a\x09\x09\x09\x09\x09\x0a\x09\x09] ;\x0a\x09\x09p: 'Looking through Apple pages and jQuery UI, draggables do not seem to leave the original element\x0a\x09\x09\x09\x09visible, and pop the other elements into place as the sorting progresses. This will be hard to do\x0a\x09\x09\x09\x09with tables because tables adjust to the width of all content, and stretch to full page width. \x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09Shrinking columns also is difficult because td elements do not react to width styling \x0a\x09\x09\x09\x09(although content can be styled nicely).' ;\x0a\x09\x09p: '\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09notes\x0a\x09\x09\x09\x09- meaningful transitions should show the user where the UIchanged.\x0a\x09\x09\x09\x09- A grid view may be better for sortable tables.\x0a\x09\x09\x09\x09- Bootstrap dropdown/dropup seems to work very fine for our needs for contex specific UI / \x0a\x09\x09\x09\x09  instruments.\x0a\x09\x09'.\x0a\x09\x09\x09\x0a\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09html br.",
messageSends: ["br", "h1:", "p:", "h5:", "ul:", "li:"],
referencedClasses: []
}),
globals.OutsetWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStylesOn:",
protocol: 'as yet unclassified',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(html)._style_("\x0a\x09\x09\x09.anchor { position: relative ;}\x0a\x09\x09\x09.outset-widget { \x0a\x09\x09\x09\x09/* Text alignment bled into this child element, not good for widgets */\x0a\x09\x09\x09\x09text-align: left;\x0a\x09\x09\x09\x09border: 2px solid lightblue;\x0a\x09\x09\x09\x09border-radius: 5px;\x0a\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09width: 286px;\x0a\x09\x09\x09\x09height: 60px;\x0a\x09\x09\x09\x09top: -60px; \x0a\x09\x09\x09\x09left:-6px;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09td.info { background-color: #c4e3f3 !important; }\x0a\x09\x09\x09td, th {text-align:center !important;}\x09\x0a\x09\x09\x09\x0a\x09\x09\x09.dropup .dropdown-menu { \x0a\x09\x09\x09\x09transition: opacity 0.3s;  \x0a\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09.dropup.open.faded-out .dropdown-menu{\x0a\x09\x09\x09\x09opacity: 0;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09.dropup.open .dropdown-menu{\x0a\x09\x09\x09\x09opacity: 1;\x0a\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09td, th {transition: background-color 0.3s, opacity 0.3s, width 0.3s;  }\x0a\x0a\x09\x09\x09td * {transition: background-color 0.3s, opacity 0.3s, width 0.3s;  }\x0a\x09\x09\x09th * {transition: background-color 0.3s, opacity 0.3s, width 0.3s;  }\x0a\x0a\x09\x09\x09th.handled, td.handled {\x0a\x09\x09\x09\x09background-color: rgb(232, 239, 247) !important;\x0a\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09.fading-out {\x0a\x09\x09\x09\x09opacity: 0;\x0a\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09");
return self}, function($ctx1) {$ctx1.fill(self,"renderStylesOn:",{html:html},globals.OutsetWidget)});},
args: ["html"],
source: "renderStylesOn: html\x0a\x0a\x0a\x22anchor'; with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09html div class: 'outset-widget'; with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html button class:'btn btn-\x0a\x22\x0a\x0a\x09html style: '\x0a\x09\x09\x09.anchor { position: relative ;}\x0a\x09\x09\x09.outset-widget { \x0a\x09\x09\x09\x09/* Text alignment bled into this child element, not good for widgets */\x0a\x09\x09\x09\x09text-align: left;\x0a\x09\x09\x09\x09border: 2px solid lightblue;\x0a\x09\x09\x09\x09border-radius: 5px;\x0a\x09\x09\x09\x09position: absolute;\x0a\x09\x09\x09\x09width: 286px;\x0a\x09\x09\x09\x09height: 60px;\x0a\x09\x09\x09\x09top: -60px; \x0a\x09\x09\x09\x09left:-6px;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09\x0a\x09\x09\x09td.info { background-color: #c4e3f3 !important; }\x0a\x09\x09\x09td, th {text-align:center !important;}\x09\x0a\x09\x09\x09\x0a\x09\x09\x09.dropup .dropdown-menu { \x0a\x09\x09\x09\x09transition: opacity 0.3s;  \x0a\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09.dropup.open.faded-out .dropdown-menu{\x0a\x09\x09\x09\x09opacity: 0;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09.dropup.open .dropdown-menu{\x0a\x09\x09\x09\x09opacity: 1;\x0a\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09td, th {transition: background-color 0.3s, opacity 0.3s, width 0.3s;  }\x0a\x0a\x09\x09\x09td * {transition: background-color 0.3s, opacity 0.3s, width 0.3s;  }\x0a\x09\x09\x09th * {transition: background-color 0.3s, opacity 0.3s, width 0.3s;  }\x0a\x0a\x09\x09\x09th.handled, td.handled {\x0a\x09\x09\x09\x09background-color: rgb(232, 239, 247) !important;\x0a\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09.fading-out {\x0a\x09\x09\x09\x09opacity: 0;\x0a\x09\x09\x09}\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09'.",
messageSends: ["style:"],
referencedClasses: []
}),
globals.OutsetWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "renderTableOn:",
protocol: 'as yet unclassified',
fn: function (html) {
var self=this;
var states,events,columnHandle;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$24,$26,$28,$29,$30,$31,$27,$25,$23,$32,$33,$34,$36,$38,$37,$35,$12;
states=["closed", "open", "locked"];
events=["open", "close", "lock", "unlock"];
$1=_st($Array())._new();
$ctx1.sendIdx["new"]=1;
$2=$1;
$3=_st($Array())._new();
$ctx1.sendIdx["new"]=2;
_st($2)._add_($3);
$ctx1.sendIdx["add:"]=1;
$4=$1;
$5=_st($Array())._new();
$ctx1.sendIdx["new"]=3;
_st($4)._add_($5);
$ctx1.sendIdx["add:"]=2;
$6=$1;
$7=_st($Array())._new();
$ctx1.sendIdx["new"]=4;
_st($6)._add_($7);
$ctx1.sendIdx["add:"]=3;
$8=$1;
$9=_st($Array())._new();
$ctx1.sendIdx["new"]=5;
_st($8)._add_($9);
$ctx1.sendIdx["add:"]=4;
_st($1)._add_(_st($Array())._new());
$ctx1.sendIdx["add:"]=5;
$10=_st($1)._yourself();
self["@columns"]=$10;
$11=_st(html)._table();
_st($11)._class_("table table table-striped table-hover table-condensed");
$ctx1.sendIdx["class:"]=1;
$12=_st($11)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._thead())._with_((function(){
return smalltalk.withContext(function($ctx3) {
$13=_st(html)._th();
$ctx3.sendIdx["th"]=1;
_st($13)._with_("Events \x5c States");
$ctx3.sendIdx["with:"]=3;
return _st(states)._withIndexDo_((function(stateName,index){
return smalltalk.withContext(function($ctx4) {
$14=_st(html)._th();
$ctx4.sendIdx["th"]=2;
_st($14)._class_("dropup");
$ctx4.sendIdx["class:"]=2;
_st($14)._onMouseEnter_((function(){
return smalltalk.withContext(function($ctx5) {
$15=_st(columnHandle)._asJQuery();
$ctx5.sendIdx["asJQuery"]=1;
_st($15)._addClass_("open faded-out");
$ctx5.sendIdx["addClass:"]=1;
_st((function(){
return smalltalk.withContext(function($ctx6) {
$16=_st(columnHandle)._asJQuery();
$ctx6.sendIdx["asJQuery"]=2;
return _st($16)._removeClass_("faded-out");
$ctx6.sendIdx["removeClass:"]=1;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,5)})}))._fork();
$17=self._rightColCells();
$ctx5.sendIdx["rightColCells"]=1;
_st($17)._do_((function(td){
return smalltalk.withContext(function($ctx6) {
$18=_st(td)._asJQuery();
$ctx6.sendIdx["asJQuery"]=3;
return _st($18)._addClass_("handled");
$ctx6.sendIdx["addClass:"]=2;
}, function($ctx6) {$ctx6.fillBlock({td:td},$ctx5,6)})}));
$ctx5.sendIdx["do:"]=1;
$19=_st(self["@table"])._asJQuery();
$ctx5.sendIdx["asJQuery"]=4;
return _st($19)._removeClass_("table-striped table-hover");
$ctx5.sendIdx["removeClass:"]=2;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
_st($14)._onMouseLeave_((function(){
return smalltalk.withContext(function($ctx5) {
$20=_st(columnHandle)._asJQuery();
$ctx5.sendIdx["asJQuery"]=5;
_st($20)._addClass_("faded-out");
$ctx5.sendIdx["addClass:"]=3;
_st((function(){
return smalltalk.withContext(function($ctx6) {
$21=_st(columnHandle)._asJQuery();
$ctx6.sendIdx["asJQuery"]=6;
return _st($21)._removeClass_("open");
$ctx6.sendIdx["removeClass:"]=3;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,8)})}))._valueWithTimeout_((300));
$22=_st(self["@table"])._asJQuery();
$ctx5.sendIdx["asJQuery"]=7;
_st($22)._addClass_("table-striped table-hover");
return _st(self._rightColCells())._do_((function(td){
return smalltalk.withContext(function($ctx6) {
return _st(_st(td)._asJQuery())._removeClass_("handled");
}, function($ctx6) {$ctx6.fillBlock({td:td},$ctx5,9)})}));
$ctx5.sendIdx["do:"]=2;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,7)})}));
$23=_st($14)._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(html)._with_(stateName);
$ctx5.sendIdx["with:"]=5;
$24=_st(html)._ul();
_st($24)._class_("dropdown-menu");
$ctx5.sendIdx["class:"]=3;
_st($24)._style_("width: 100%");
$ctx5.sendIdx["style:"]=1;
$25=_st($24)._with_((function(){
return smalltalk.withContext(function($ctx6) {
$26=_st(html)._li();
_st($26)._style_("padding-left: 10px; padding-right: 10px");
$27=_st($26)._with_((function(){
return smalltalk.withContext(function($ctx7) {
$28=_st(html)._button();
$ctx7.sendIdx["button"]=1;
_st($28)._class_("btn btn-default pull-left");
$ctx7.sendIdx["class:"]=4;
$29=_st($28)._with_("<=>");
$ctx7.sendIdx["with:"]=8;
$29;
$30=_st(html)._button();
_st($30)._class_("btn btn-danger pull-right");
$ctx7.sendIdx["class:"]=5;
_st($30)._with_("(X)");
$ctx7.sendIdx["with:"]=9;
$31=_st($30)._onClick_((function(){
return smalltalk.withContext(function($ctx8) {
return self._removeColumn();
}, function($ctx8) {$ctx8.fillBlock({},$ctx7,13)})}));
return $31;
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,12)})}));
$ctx6.sendIdx["with:"]=7;
return $27;
}, function($ctx6) {$ctx6.fillBlock({},$ctx5,11)})}));
$ctx5.sendIdx["with:"]=6;
return $25;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,10)})}));
$ctx4.sendIdx["with:"]=4;
columnHandle=$23;
columnHandle;
$32=_st(self["@columns"])._at_(index);
$ctx4.sendIdx["at:"]=1;
return _st($32)._add_(columnHandle);
$ctx4.sendIdx["add:"]=6;
}, function($ctx4) {$ctx4.fillBlock({stateName:stateName,index:index},$ctx3,3)})}));
$ctx3.sendIdx["withIndexDo:"]=1;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(events)._do_((function(event){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._th())._with_(event);
$ctx5.sendIdx["with:"]=12;
return _st(states)._withIndexDo_((function(state,index){
var tdInfoClass;
return smalltalk.withContext(function($ctx6) {
$33=_st(state).__eq("open - disabled this if clause ");
if(smalltalk.assert($33)){
tdInfoClass="info";
tdInfoClass;
} else {
tdInfoClass="";
tdInfoClass;
};
$34=_st(self["@columns"])._at_(index);
$36=_st(html)._td();
_st($36)._class_(tdInfoClass);
$37=_st($36)._with_((function(){
return smalltalk.withContext(function($ctx7) {
_st(_st(html)._textarea())._with_("|foo| \x0aTranscript show: 1");
$ctx7.sendIdx["with:"]=14;
return _st(_st(html)._select())._with_((function(){
return smalltalk.withContext(function($ctx8) {
$38=_st(html)._option();
$ctx8.sendIdx["option"]=1;
_st($38)._with_("open");
$ctx8.sendIdx["with:"]=16;
return _st(_st(html)._option())._with_("closed");
}, function($ctx8) {$ctx8.fillBlock({},$ctx7,21)})}));
$ctx7.sendIdx["with:"]=15;
}, function($ctx7) {$ctx7.fillBlock({},$ctx6,20)})}));
$ctx6.sendIdx["with:"]=13;
$35=$37;
return _st($34)._add_($35);
}, function($ctx6) {$ctx6.fillBlock({state:state,index:index,tdInfoClass:tdInfoClass},$ctx5,17)})}));
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,16)})}));
$ctx4.sendIdx["with:"]=11;
}, function($ctx4) {$ctx4.fillBlock({event:event},$ctx3,15)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,14)})}));
$ctx2.sendIdx["with:"]=10;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
self["@table"]=$12;
return self}, function($ctx1) {$ctx1.fill(self,"renderTableOn:",{html:html,states:states,events:events,columnHandle:columnHandle},globals.OutsetWidget)});},
args: ["html"],
source: "renderTableOn: html\x0a\x0a\x09| states events columnHandle |\x0a\x09\x0a\x09states := #(closed open locked).\x0a\x09events := #(open close lock unlock).\x0a\x09\x0a\x09columns := Array new \x0a\x09\x09add: Array new ;\x0a\x09\x09add: Array new ;\x0a\x09\x09add: Array new ;\x0a\x09\x09add: Array new ;\x0a\x09\x09add: Array new ;\x0a\x09\x09yourself.\x0a\x09\x0a\x09\x0a\x09table := html table class: 'table table table-striped table-hover table-condensed'; with: [\x0a\x09\x09\x09\x09html thead with: [\x0a\x09\x09\x09\x09\x09html th with: 'Events \x5c States'.\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09states withIndexDo: [ :stateName :index |\x0a\x09\x09\x09\x09\x09\x09columnHandle := html th \x0a\x09\x09\x09\x09\x09\x09\x09class: 'dropup' ;\x0a\x09\x09\x09\x09\x09\x09\x09onMouseEnter: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09columnHandle asJQuery addClass: 'open faded-out'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09[ columnHandle asJQuery removeClass:'faded-out' ] fork.\x0a\x09\x09\x09\x09\x09\x09\x09\x09self rightColCells do: [:td | td asJQuery addClass: 'handled'].\x0a\x09\x09\x09\x09\x09\x09\x09\x09table asJQuery removeClass:'table-striped table-hover'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09] ;\x0a\x09\x09\x09\x09\x09\x09\x09onMouseLeave: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09columnHandle asJQuery addClass: 'faded-out'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09[ columnHandle asJQuery removeClass:'open' ] valueWithTimeout: 300.\x0a\x09\x09\x09\x09\x09\x09\x09\x09table asJQuery addClass:'table-striped table-hover'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09self rightColCells do: [:td | td asJQuery removeClass: 'handled'].\x0a\x09\x09\x09\x09\x09\x09\x09] ;\x0a\x09\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09html with: stateName.\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09html ul class: 'dropdown-menu' ; style: 'width: 100%'; with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09html li style: 'padding-left: 10px; padding-right: 10px'; with:[\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html button class:'btn btn-default pull-left'; with: '<=>'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html button \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09class:'btn btn-danger pull-right' ; \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09with: '(X)' ;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09onClick: [ self removeColumn ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09].\x09\x0a\x09\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x22 Home grown anchor thingy\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x22html div class: 'anchor'; with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09html div class: 'outset-widget'; with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html button class:'btn btn-default'; with: '<=>'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html button class:'btn btn-danger pull-right'; with: '(X)'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09].\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x22 thus should not push the widget!\x22 \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x22html with: stateName.\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x22].\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09\x09(columns at: index) add: columnHandle.\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09\x09events do: [ :event |\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09\x09\x09html th with: event.\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09states withIndexDo: [:state :index| \x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09|tdInfoClass |\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09state = 'open - disabled this if clause '  \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ tdInfoClass := 'info' ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [tdInfoClass := '' ].\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09(columns at: index) add: (\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09html td class: tdInfoClass ; with: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html textarea with: '|foo| \x0aTranscript show: 1'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html select with: [\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html option with: 'open'.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09html option with: 'closed'].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09\x09\x09)\x0a\x09\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x09].\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09].\x0a\x09\x09\x09\x0a\x09\x09\x09\x09",
messageSends: ["add:", "new", "yourself", "class:", "table", "with:", "thead", "th", "withIndexDo:", "onMouseEnter:", "addClass:", "asJQuery", "fork", "removeClass:", "do:", "rightColCells", "onMouseLeave:", "valueWithTimeout:", "ul", "style:", "li", "button", "onClick:", "removeColumn", "at:", "tbody", "tr", "ifTrue:ifFalse:", "=", "td", "textarea", "select", "option"],
referencedClasses: ["Array"]
}),
globals.OutsetWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "rightColCells",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$4,$6,$8,$7,$9,$11,$10,$12,$14,$13,$15,$16,$17,$1;
$2=_st($Array())._new();
$3=$2;
$5=_st(self["@columns"])._at_((3));
$ctx1.sendIdx["at:"]=2;
$4=_st($5)._at_((1));
$ctx1.sendIdx["at:"]=1;
_st($3)._add_($4);
$ctx1.sendIdx["add:"]=1;
$6=$2;
$8=_st(self["@columns"])._at_((3));
$ctx1.sendIdx["at:"]=4;
$7=_st($8)._at_((2));
$ctx1.sendIdx["at:"]=3;
_st($6)._add_($7);
$ctx1.sendIdx["add:"]=2;
$9=$2;
$11=_st(self["@columns"])._at_((3));
$ctx1.sendIdx["at:"]=6;
$10=_st($11)._at_((3));
$ctx1.sendIdx["at:"]=5;
_st($9)._add_($10);
$ctx1.sendIdx["add:"]=3;
$12=$2;
$14=_st(self["@columns"])._at_((3));
$ctx1.sendIdx["at:"]=8;
$13=_st($14)._at_((4));
$ctx1.sendIdx["at:"]=7;
_st($12)._add_($13);
$ctx1.sendIdx["add:"]=4;
$15=$2;
$16=_st(_st(self["@columns"])._at_((3)))._at_((5));
$ctx1.sendIdx["at:"]=9;
_st($15)._add_($16);
$17=_st($2)._yourself();
$1=$17;
return $1;
}, function($ctx1) {$ctx1.fill(self,"rightColCells",{},globals.OutsetWidget)});},
args: [],
source: "rightColCells\x0a\x0a\x09\x22just the cells in the right most column\x22\x0a\x09^ Array new \x0a\x09\x09add: ((columns at:3) at: 1) ;\x0a\x09\x09add: ((columns at:3) at: 2) ;\x0a\x09\x09add: ((columns at:3) at: 3) ;\x0a\x09\x09add: ((columns at:3) at: 4) ;\x0a\x09\x09add: ((columns at:3) at: 5) ;\x0a\x09\x09yourself",
messageSends: ["add:", "new", "at:", "yourself"],
referencedClasses: ["Array"]
}),
globals.OutsetWidget);


});
