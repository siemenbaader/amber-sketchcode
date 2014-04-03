define("amber-sketchcode/SketchCode-ConceptEditors", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Canvas", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('SketchCode-ConceptEditors');
smalltalk.packages["SketchCode-ConceptEditors"].transport = {"type":"amd","amdNamespace":"amber-sketchcode"};

smalltalk.addClass('NextStateSelector', globals.Widget, ['stateMachine', 'currentState'], 'SketchCode-ConceptEditors');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.NextStateSelector.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.NextStateSelector)});},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.NextStateSelector);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'initialization',
fn: function (html) {
var self=this;
return self;},
args: ["html"],
source: "renderOn: html",
messageSends: [],
referencedClasses: []
}),
globals.NextStateSelector);

smalltalk.addMethod(
smalltalk.method({
selector: "stateMachine:",
protocol: 'initialization',
fn: function (aStateMachine) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@stateMachine"]=aStateMachine;
self["@currentState"]=_st(aStateMachine)._initialState();
return self}, function($ctx1) {$ctx1.fill(self,"stateMachine:",{aStateMachine:aStateMachine},globals.NextStateSelector)});},
args: ["aStateMachine"],
source: "stateMachine: aStateMachine\x0a\x09stateMachine := aStateMachine.\x0a\x09currentState := aStateMachine initialState.\x0a\x09\x0a\x09",
messageSends: ["initialState"],
referencedClasses: []
}),
globals.NextStateSelector);



smalltalk.addClass('State', globals.Object, ['name', 'transitions'], 'SketchCode-ConceptEditors');
globals.State.comment="I am a state in a state machine.\x0a\x0aI hold a name and a number of outgoing transitions.\x0a\x0aI can also be the initial state.";
smalltalk.addMethod(
smalltalk.method({
selector: "addTransition:",
protocol: 'accessing',
fn: function (aTransition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transitions"])._add_(aTransition);
return self}, function($ctx1) {$ctx1.fill(self,"addTransition:",{aTransition:aTransition},globals.State)});},
args: ["aTransition"],
source: "addTransition: aTransition\x0a\x09transitions add: aTransition.",
messageSends: ["add:"],
referencedClasses: []
}),
globals.State);

smalltalk.addMethod(
smalltalk.method({
selector: "doActionsForEvent:",
protocol: 'accessing',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self._transitionForEvent_(aString))._actions())._value();
return self}, function($ctx1) {$ctx1.fill(self,"doActionsForEvent:",{aString:aString},globals.State)});},
args: ["aString"],
source: "doActionsForEvent: aString\x0a\x09(self transitionForEvent: aString) actions value.",
messageSends: ["value", "actions", "transitionForEvent:"],
referencedClasses: []
}),
globals.State);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
globals.State.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@name"]=nil;
self["@transitions"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.State)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09name := nil.\x0a\x09transitions := Array new.",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
globals.State);

smalltalk.addMethod(
smalltalk.method({
selector: "name",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@name"];
return $1;
},
args: [],
source: "name\x0a\x09^ name",
messageSends: [],
referencedClasses: []
}),
globals.State);

smalltalk.addMethod(
smalltalk.method({
selector: "name:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@name"]=anObject;
return self;},
args: ["anObject"],
source: "name: anObject\x0a\x09name := anObject",
messageSends: [],
referencedClasses: []
}),
globals.State);

smalltalk.addMethod(
smalltalk.method({
selector: "targetStateFor:",
protocol: 'accessing',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@transitions"])._detect_((function(t){
return smalltalk.withContext(function($ctx2) {
return _st(_st(t)._event()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({t:t},$ctx1,1)})})))._targetState();
return $1;
}, function($ctx1) {$ctx1.fill(self,"targetStateFor:",{aString:aString},globals.State)});},
args: ["aString"],
source: "targetStateFor: aString\x0a\x09^ (transitions detect: [:t | t event = aString ]) targetState.",
messageSends: ["targetState", "detect:", "=", "event"],
referencedClasses: []
}),
globals.State);

smalltalk.addMethod(
smalltalk.method({
selector: "transitionForEvent:",
protocol: 'accessing',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@transitions"])._detect_((function(t){
return smalltalk.withContext(function($ctx2) {
return _st(_st(t)._event()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({t:t},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"transitionForEvent:",{aString:aString},globals.State)});},
args: ["aString"],
source: "transitionForEvent: aString\x0a\x09^ transitions detect: [:t | t event = aString]",
messageSends: ["detect:", "=", "event"],
referencedClasses: []
}),
globals.State);

smalltalk.addMethod(
smalltalk.method({
selector: "transitions",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@transitions"];
return $1;
},
args: [],
source: "transitions\x0a\x09^ transitions",
messageSends: [],
referencedClasses: []
}),
globals.State);

smalltalk.addMethod(
smalltalk.method({
selector: "transitions:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@transitions"]=anObject;
return self;},
args: ["anObject"],
source: "transitions: anObject\x0a\x09transitions := anObject",
messageSends: [],
referencedClasses: []
}),
globals.State);


smalltalk.addMethod(
smalltalk.method({
selector: "name:",
protocol: 'as yet unclassified',
fn: function (stateNameString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._name_(stateNameString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"name:",{stateNameString:stateNameString},globals.State.klass)});},
args: ["stateNameString"],
source: "name: stateNameString\x0a\x09^ self new name: stateNameString; yourself.",
messageSends: ["name:", "new", "yourself"],
referencedClasses: []
}),
globals.State.klass);


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
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$4,$2;
$1=_st(html)._div();
_st($1)._style_("border:1px solid black;");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._table();
_st($3)._class_("table table-condensed table-hover");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._thead())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$5=_st(html)._th();
$ctx4.sendIdx["th"]=1;
_st($5)._with_("&nbsp");
$ctx4.sendIdx["with:"]=4;
$6=_st(html)._th();
$ctx4.sendIdx["th"]=2;
_st($6)._with_("inactive");
$ctx4.sendIdx["with:"]=5;
$7=_st(html)._th();
$ctx4.sendIdx["th"]=3;
_st($7)._with_("paused");
$ctx4.sendIdx["with:"]=6;
$8=_st(html)._th();
$ctx4.sendIdx["th"]=4;
_st($8)._with_("fading-in");
$ctx4.sendIdx["with:"]=7;
$9=_st(html)._th();
$ctx4.sendIdx["th"]=5;
_st($9)._with_("shown");
$ctx4.sendIdx["with:"]=8;
$10=_st(html)._th();
$ctx4.sendIdx["th"]=6;
return _st($10)._with_("fading-out");
$ctx4.sendIdx["with:"]=9;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$11=_st(html)._tr();
$ctx4.sendIdx["tr"]=1;
_st($11)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$12=_st(html)._th();
$ctx5.sendIdx["th"]=7;
_st($12)._with_("mouseover");
$ctx5.sendIdx["with:"]=12;
$13=_st(html)._td();
$ctx5.sendIdx["td"]=1;
_st($13)._with_("foo [dropdown]");
$ctx5.sendIdx["with:"]=13;
_st(html)._td();
$ctx5.sendIdx["td"]=2;
_st(html)._td();
$ctx5.sendIdx["td"]=3;
_st(html)._td();
$ctx5.sendIdx["td"]=4;
$14=_st(html)._td();
$ctx5.sendIdx["td"]=5;
return $14;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)})}));
$ctx4.sendIdx["with:"]=11;
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._th())._with_("mouseover");
$ctx5.sendIdx["with:"]=15;
$15=_st(html)._td();
$ctx5.sendIdx["td"]=6;
_st($15)._with_("foo [ddsfsddown]");
_st(html)._td();
$ctx5.sendIdx["td"]=7;
_st(html)._td();
$ctx5.sendIdx["td"]=8;
_st(html)._td();
$ctx5.sendIdx["td"]=9;
$16=_st(html)._td();
return $16;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)})}));
$ctx4.sendIdx["with:"]=14;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["with:"]=10;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.StateChart)});},
args: ["html"],
source: "renderOn: html\x0a\x09\x22comment stating purpose of message\x22\x0a\x09html div \x0a\x09\x09style:'border:1px solid black;' ;\x0a\x09\x09with: [\x0a\x09\x09html table class: 'table table-condensed table-hover'; with: [\x0a\x09\x09\x09html thead with: [\x0a\x09\x09\x09\x09html th with: '&nbsp'.\x0a\x09\x09\x09\x09html th with: 'inactive'.\x0a\x09\x09\x09\x09html th with: 'paused'.\x0a\x09\x09\x09\x09html th with: 'fading-in'.\x0a\x09\x09\x09\x09html th with: 'shown'.\x0a\x09\x09\x09\x09html th with: 'fading-out'.\x0a\x09\x09\x09].\x0a\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09html th with: 'mouseover'.\x0a\x09\x09\x09\x09\x09html td with: 'foo [dropdown]'.\x0a\x09\x09\x09\x09\x09html td ; td; td; td. ].\x0a\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09html th with: 'mouseover'.\x0a\x09\x09\x09\x09\x09html td with: 'foo [ddsfsddown]'.\x0a\x09\x09\x09\x09\x09html td ; td; td; td.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].",
messageSends: ["style:", "div", "with:", "class:", "table", "thead", "th", "tbody", "tr", "td"],
referencedClasses: []
}),
globals.StateChart);



smalltalk.addClass('StateMachine', globals.Object, ['states', 'transitions', 'initialState', 'currentState', 'stateTable', 'events'], 'SketchCode-ConceptEditors');
globals.StateMachine.comment="I am a Finite State Machine. I hold State*s* and Transition*s*.\x0a\x0aI can be constructed from source code using a *StateMachineDSLBuilder*, but I am also a model that can be updated from a GUI and even notify my GUI when I am changed.\x0a\x0aAt run-time, I will respond to events and trigger my transitions appropriately.\x0a\x0a    |door|\x0a\x0a    door := StateMachine fromDSL\x0a        when: 'closed' ;\x0a            on: 'open' do: [Transcript show: 'opening'; cr] andBe: 'open' ;\x0a            on: 'close' do: [Transcript show: 'already closed.'; cr] andBe: 'closed' ;\x0a            on: 'lock' do: [Transcript show: 'now locked'; cr] andBe: 'locked' ;\x0a            on: 'unlock' do: [Transcript show: 'not locked, just closed'; cr ] andBe: 'closed' ;\x0a    \x0a        when: 'open';\x0a            on: 'open' do: [Transcript show: 'Door is already open.'; cr.] andBe: 'open' ;\x0a            on: 'close' do: [Transcript show: 'closing.'; cr.] andBe: 'closed' ;\x0a            on: 'lock' do: [Transcript show:  'is open. close before locking'; cr] andBe: 'open' ;\x0a            on: 'unlock' do: [Transcript show:  'is open, not locked. '; cr] andBe: 'open' ;\x0a    \x0a\x09\x09when: 'locked';\x0a\x09\x09\x09on: 'open' do: [Transcript show: 'Door is locked.'; cr.] andBe: 'locked' ;\x0a\x09\x09\x09on: 'close' do: [Transcript show: 'Door is locked and closed.'; cr.] andBe: 'locked' ;\x0a\x09\x09\x09on: 'unlock' do: [Transcript show: 'Door is now unlocked.'; cr.] andBe: 'closed' ;\x0a\x09\x09\x09on: 'lock' do: [Transcript show: 'already locked'; cr] andBe: 'locked' ;\x0a\x09\x09\x09\x0a        initialState: 'closed'.\x0a\x09  \x0a    door handleEvent: 'open'.\x0a    door handleEvent: 'close'.\x0a    door handleEvent: 'close'.\x0a    door handleEvent: 'lock'.\x0a    door handleEvent: 'open'.";
smalltalk.addMethod(
smalltalk.method({
selector: "addState:",
protocol: 'initialization',
fn: function (aState) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@states"])._add_(aState);
return self}, function($ctx1) {$ctx1.fill(self,"addState:",{aState:aState},globals.StateMachine)});},
args: ["aState"],
source: "addState: aState\x0a\x09\x0a\x09states add: aState\x0a\x09",
messageSends: ["add:"],
referencedClasses: []
}),
globals.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "addTransition:",
protocol: 'initialization',
fn: function (aTransition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@transitions"])._add_(aTransition);
return self}, function($ctx1) {$ctx1.fill(self,"addTransition:",{aTransition:aTransition},globals.StateMachine)});},
args: ["aTransition"],
source: "addTransition: aTransition\x0a\x0a\x09\x22Registers a transition in the state FSM and its state/event table.\x0a\x09The state and event must exist.\x0a\x09\x22\x0a\x09\x0a\x09transitions add: aTransition.\x0a\x09",
messageSends: ["add:"],
referencedClasses: []
}),
globals.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "currentState",
protocol: 'initialization',
fn: function () {
var self=this;
var $1;
$1=self["@currentState"];
return $1;
},
args: [],
source: "currentState\x0a\x09\x0a\x09^ currentState.",
messageSends: [],
referencedClasses: []
}),
globals.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "events:",
protocol: 'initialization',
fn: function (aListOfStrings) {
var self=this;
self["@events"]=aListOfStrings;
return self;},
args: ["aListOfStrings"],
source: "events: aListOfStrings\x0a\x09events := aListOfStrings.\x0a\x09",
messageSends: [],
referencedClasses: []
}),
globals.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "fromDSL",
protocol: 'initialization',
fn: function () {
var self=this;
function $StateMachineDSL(){return globals.StateMachineDSL||(typeof StateMachineDSL=="undefined"?nil:StateMachineDSL)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($StateMachineDSL())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromDSL",{},globals.StateMachine)});},
args: [],
source: "fromDSL\x0a\x09^ StateMachineDSL new",
messageSends: ["new"],
referencedClasses: ["StateMachineDSL"]
}),
globals.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "handleEvent:",
protocol: 'initialization',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@currentState"])._doActionsForEvent_(aString);
self["@currentState"]=self._stateNamed_(_st(self["@currentState"])._targetStateFor_(aString));
return self}, function($ctx1) {$ctx1.fill(self,"handleEvent:",{aString:aString},globals.StateMachine)});},
args: ["aString"],
source: "handleEvent: aString\x0a\x09currentState doActionsForEvent: aString.\x0a\x09currentState := self stateNamed: (currentState targetStateFor: aString).",
messageSends: ["doActionsForEvent:", "stateNamed:", "targetStateFor:"],
referencedClasses: []
}),
globals.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "initialState:",
protocol: 'initialization',
fn: function (aStateNameString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialState"]=self._stateNamed_(aStateNameString);
self["@currentState"]=self["@initialState"];
return self}, function($ctx1) {$ctx1.fill(self,"initialState:",{aStateNameString:aStateNameString},globals.StateMachine)});},
args: ["aStateNameString"],
source: "initialState: aStateNameString\x0a\x0a\x09initialState := self stateNamed: aStateNameString.\x0a\x09currentState := initialState.",
messageSends: ["stateNamed:"],
referencedClasses: []
}),
globals.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
function $Array(){return globals.Array||(typeof Array=="undefined"?nil:Array)}
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@states"]=_st($Array())._new();
$ctx1.sendIdx["new"]=1;
self["@transitions"]=_st($Array())._new();
$ctx1.sendIdx["new"]=2;
self["@stateTable"]=_st($HashedCollection())._new();
globals.StateMachine.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.StateMachine)});},
args: [],
source: "initialize\x0a\x0a\x0a\x09states := Array new.\x0a\x09transitions := Array new.\x0a\x09stateTable := HashedCollection new.\x0a\x09\x0a\x09super initialize.",
messageSends: ["new", "initialize"],
referencedClasses: ["Array", "HashedCollection"]
}),
globals.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "stateNamed:",
protocol: 'initialization',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@states"])._detect_((function(state){
return smalltalk.withContext(function($ctx2) {
return _st(_st(state)._name()).__eq(aString);
}, function($ctx2) {$ctx2.fillBlock({state:state},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"stateNamed:",{aString:aString},globals.StateMachine)});},
args: ["aString"],
source: "stateNamed: aString\x0a\x0a\x09^ states detect: [:state | state name = aString ].\x0a\x09",
messageSends: ["detect:", "=", "name"],
referencedClasses: []
}),
globals.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "states:",
protocol: 'initialization',
fn: function (aListOfStrings) {
var self=this;
function $HashedCollection(){return globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@states"]=aListOfStrings;
_st(self["@states"])._do_((function(aString){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stateTable"])._at_put_(aString,_st($HashedCollection())._new());
}, function($ctx2) {$ctx2.fillBlock({aString:aString},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"states:",{aListOfStrings:aListOfStrings},globals.StateMachine)});},
args: ["aListOfStrings"],
source: "states: aListOfStrings\x0a\x09states := aListOfStrings.\x0a\x09\x0a\x09states do: [ :aString | stateTable at: aString put: (HashedCollection new) ].",
messageSends: ["do:", "at:put:", "new"],
referencedClasses: ["HashedCollection"]
}),
globals.StateMachine);

smalltalk.addMethod(
smalltalk.method({
selector: "when:on:do:andEnter:",
protocol: 'initialization',
fn: function (state, event, actions, aState) {
var self=this;
var transition;
function $Transition(){return globals.Transition||(typeof Transition=="undefined"?nil:Transition)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Transition())._new();
_st($1)._actions_(actions);
_st($1)._targetState_(aState);
$2=_st($1)._yourself();
transition=$2;
_st(_st(self["@stateTable"])._at_(state))._at_put_(event,transition);
return self}, function($ctx1) {$ctx1.fill(self,"when:on:do:andEnter:",{state:state,event:event,actions:actions,aState:aState,transition:transition},globals.StateMachine)});},
args: ["state", "event", "actions", "aState"],
source: "when: state on: event do: actions andEnter: aState\x0a\x0a\x09| transition |\x0a\x09transition := Transition new\x0a\x09\x09actions: actions; \x0a\x09\x09targetState: aState; \x0a\x09\x09yourself.\x0a\x09\x0a\x09( stateTable at: state )\x0a\x09\x09at: event put: transition.",
messageSends: ["actions:", "new", "targetState:", "yourself", "at:put:", "at:"],
referencedClasses: ["Transition"]
}),
globals.StateMachine);


globals.StateMachine.klass.iVarNames = ['dummy'];
smalltalk.addMethod(
smalltalk.method({
selector: "fromDSL",
protocol: 'as yet unclassified',
fn: function () {
var self=this;
function $StateMachineDSLBuilder(){return globals.StateMachineDSLBuilder||(typeof StateMachineDSLBuilder=="undefined"?nil:StateMachineDSLBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($StateMachineDSLBuilder())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromDSL",{},globals.StateMachine.klass)});},
args: [],
source: "fromDSL\x0a\x09^ StateMachineDSLBuilder new",
messageSends: ["new"],
referencedClasses: ["StateMachineDSLBuilder"]
}),
globals.StateMachine.klass);


smalltalk.addClass('StateMachineDSLBuilder', globals.Object, ['stateMachine', 'assigningState'], 'SketchCode-ConceptEditors');
globals.StateMachineDSLBuilder.comment="I am a DSL to build StateMachines from neat source code.\x0a\x0aUse me like this:\x0a\x0a    StateMachine fromDSL\x0a        when: 'closed' ;\x0a            on: 'open' do: [window alert: 'opening'] andBe: 'open' ;\x0a            on: 'lock' do: [window alert: 'locked door.'] andBe: 'locked' ;\x0a            on: 'unlock' do: [window alert: 'already unlocked'] andBe: 'closed'  ; \x0a            on: 'close' do: [window alert: 'already closed'. andBe: 'closed' ;\x0a\x0a        when: 'locked';\x0a            on: 'open' do: [window alert: 'Door is locked, sorry'] andBe: 'locked' ;\x0a\x0a        initialState: 'closed'.\x0a\x09";
smalltalk.addMethod(
smalltalk.method({
selector: "initialState:",
protocol: 'initialization',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@stateMachine"])._initialState_(aString);
$1=self["@stateMachine"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialState:",{aString:aString},globals.StateMachineDSLBuilder)});},
args: ["aString"],
source: "initialState: aString\x0a\x09\x22The final call to the FSM DSL. Returns the FSM object\x22\x0a\x0a\x09stateMachine initialState: aString.\x0a\x09^ stateMachine.",
messageSends: ["initialState:"],
referencedClasses: []
}),
globals.StateMachineDSLBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
function $StateMachine(){return globals.StateMachine||(typeof StateMachine=="undefined"?nil:StateMachine)}
return smalltalk.withContext(function($ctx1) { 
self["@assigningState"]=nil;
self["@stateMachine"]=_st($StateMachine())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.StateMachineDSLBuilder)});},
args: [],
source: "initialize\x0a\x09assigningState := nil.\x0a\x09stateMachine := StateMachine new.",
messageSends: ["new"],
referencedClasses: ["StateMachine"]
}),
globals.StateMachineDSLBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:andBe:",
protocol: 'initialization',
fn: function (anEventNameString, anActionBlockClosure, aStateNameString) {
var self=this;
function $Transition(){return globals.Transition||(typeof Transition=="undefined"?nil:Transition)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@assigningState"])._addTransition_(_st($Transition())._event_actions_targetState_(anEventNameString,anActionBlockClosure,aStateNameString));
return self}, function($ctx1) {$ctx1.fill(self,"on:do:andBe:",{anEventNameString:anEventNameString,anActionBlockClosure:anActionBlockClosure,aStateNameString:aStateNameString},globals.StateMachineDSLBuilder)});},
args: ["anEventNameString", "anActionBlockClosure", "aStateNameString"],
source: "on: anEventNameString do: anActionBlockClosure andBe: aStateNameString\x0a\x0a\x09\x22Create a new state and set the assigning context for transitions to it\x22\x0a\x0a\x09assigningState addTransition:\x0a\x09\x09(Transition \x0a\x09\x09\x09event: anEventNameString \x0a\x09\x09\x09actions: anActionBlockClosure \x0a\x09\x09\x09targetState: aStateNameString).",
messageSends: ["addTransition:", "event:actions:targetState:"],
referencedClasses: ["Transition"]
}),
globals.StateMachineDSLBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "when:",
protocol: 'initialization',
fn: function (aStateString) {
var self=this;
function $State(){return globals.State||(typeof State=="undefined"?nil:State)}
return smalltalk.withContext(function($ctx1) { 
self["@assigningState"]=_st($State())._name_(aStateString);
_st(self["@stateMachine"])._addState_(self["@assigningState"]);
return self}, function($ctx1) {$ctx1.fill(self,"when:",{aStateString:aStateString},globals.StateMachineDSLBuilder)});},
args: ["aStateString"],
source: "when: aStateString\x0a\x09\x22Creates a new state and sets the assigning context for transitions to it\x22\x0a\x0a\x09assigningState := State name: aStateString.\x0a\x09stateMachine addState: assigningState.\x0a\x09\x09",
messageSends: ["name:", "addState:"],
referencedClasses: ["State"]
}),
globals.StateMachineDSLBuilder);



smalltalk.addClass('StateMachineEditor', globals.Widget, [], 'SketchCode-ConceptEditors');


smalltalk.addClass('StateTable', globals.Widget, [], 'SketchCode-ConceptEditors');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.StateTable.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.StateTable)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.StateTable);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'initialization',
fn: function (html) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$4,$2;
$1=_st(html)._div();
_st($1)._style_("border:1px solid black;");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._table();
_st($3)._class_("table table-condensed table-hover");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._thead())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$5=_st(html)._th();
$ctx4.sendIdx["th"]=1;
_st($5)._with_("&nbsp");
$ctx4.sendIdx["with:"]=4;
$6=_st(html)._th();
$ctx4.sendIdx["th"]=2;
_st($6)._with_("inactive");
$ctx4.sendIdx["with:"]=5;
$7=_st(html)._th();
$ctx4.sendIdx["th"]=3;
_st($7)._with_("paused");
$ctx4.sendIdx["with:"]=6;
$8=_st(html)._th();
$ctx4.sendIdx["th"]=4;
_st($8)._with_("fading-in");
$ctx4.sendIdx["with:"]=7;
$9=_st(html)._th();
$ctx4.sendIdx["th"]=5;
_st($9)._with_("shown");
$ctx4.sendIdx["with:"]=8;
$10=_st(html)._th();
$ctx4.sendIdx["th"]=6;
return _st($10)._with_("fading-out");
$ctx4.sendIdx["with:"]=9;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=3;
return _st(_st(html)._tbody())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$11=_st(html)._tr();
$ctx4.sendIdx["tr"]=1;
_st($11)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$12=_st(html)._th();
$ctx5.sendIdx["th"]=7;
_st($12)._with_("mouseover");
$ctx5.sendIdx["with:"]=12;
$13=_st(html)._td();
$ctx5.sendIdx["td"]=1;
_st($13)._with_("foo [dropdown]");
$ctx5.sendIdx["with:"]=13;
_st(html)._td();
$ctx5.sendIdx["td"]=2;
_st(html)._td();
$ctx5.sendIdx["td"]=3;
_st(html)._td();
$ctx5.sendIdx["td"]=4;
$14=_st(html)._td();
$ctx5.sendIdx["td"]=5;
return $14;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)})}));
$ctx4.sendIdx["with:"]=11;
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._th())._with_("mouseover");
$ctx5.sendIdx["with:"]=15;
$15=_st(html)._td();
$ctx5.sendIdx["td"]=6;
_st($15)._with_("foo [ddsfsddown]");
_st(html)._td();
$ctx5.sendIdx["td"]=7;
_st(html)._td();
$ctx5.sendIdx["td"]=8;
_st(html)._td();
$ctx5.sendIdx["td"]=9;
$16=_st(html)._td();
return $16;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)})}));
$ctx4.sendIdx["with:"]=14;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
$ctx3.sendIdx["with:"]=10;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.StateTable)});},
args: ["html"],
source: "renderOn: html\x0a\x09\x22comment stating purpose of message\x22\x0a\x09html div \x0a\x09\x09style:'border:1px solid black;' ;\x0a\x09\x09with: [\x0a\x09\x09html table class: 'table table-condensed table-hover'; with: [\x0a\x09\x09\x09html thead with: [\x0a\x09\x09\x09\x09html th with: '&nbsp'.\x0a\x09\x09\x09\x09html th with: 'inactive'.\x0a\x09\x09\x09\x09html th with: 'paused'.\x0a\x09\x09\x09\x09html th with: 'fading-in'.\x0a\x09\x09\x09\x09html th with: 'shown'.\x0a\x09\x09\x09\x09html th with: 'fading-out'.\x0a\x09\x09\x09].\x0a\x09\x09\x09html tbody with: [\x0a\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09html th with: 'mouseover'.\x0a\x09\x09\x09\x09\x09html td with: 'foo [dropdown]'.\x0a\x09\x09\x09\x09\x09html td ; td; td; td. ].\x0a\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09\x09html th with: 'mouseover'.\x0a\x09\x09\x09\x09\x09html td with: 'foo [ddsfsddown]'.\x0a\x09\x09\x09\x09\x09html td ; td; td; td.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09].",
messageSends: ["style:", "div", "with:", "class:", "table", "thead", "th", "tbody", "tr", "td"],
referencedClasses: []
}),
globals.StateTable);



smalltalk.addClass('Transition', globals.Object, ['event', 'actions', 'targetState'], 'SketchCode-ConceptEditors');
globals.Transition.comment="I am a Transition.\x0a\x0aI am contained in a State and I hold an event name that triggers me, a block of actions to perform and the name of the resulting state.";
smalltalk.addMethod(
smalltalk.method({
selector: "actions",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@actions"];
return $1;
},
args: [],
source: "actions\x0a\x09^ actions",
messageSends: [],
referencedClasses: []
}),
globals.Transition);

smalltalk.addMethod(
smalltalk.method({
selector: "actions:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@actions"]=anObject;
return self;},
args: ["anObject"],
source: "actions: anObject\x0a\x09actions := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Transition);

smalltalk.addMethod(
smalltalk.method({
selector: "event",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@event"];
return $1;
},
args: [],
source: "event\x0a\x09^ event",
messageSends: [],
referencedClasses: []
}),
globals.Transition);

smalltalk.addMethod(
smalltalk.method({
selector: "event:",
protocol: 'accessing',
fn: function (aString) {
var self=this;
self["@event"]=aString;
return self;},
args: ["aString"],
source: "event: aString\x0a\x09event := aString",
messageSends: [],
referencedClasses: []
}),
globals.Transition);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
globals.Transition.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@actions"]=nil;
self["@targetState"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.Transition)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09actions := nil.\x0a\x09targetState := nil",
messageSends: ["initialize"],
referencedClasses: []
}),
globals.Transition);

smalltalk.addMethod(
smalltalk.method({
selector: "processEvent:",
protocol: 'accessing',
fn: function (aString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aString).__eq(self["@event"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})});
if(smalltalk.assert($1)){
};
return self}, function($ctx1) {$ctx1.fill(self,"processEvent:",{aString:aString},globals.Transition)});},
args: ["aString"],
source: "processEvent: aString\x0a\x0a\x09[ aString = event ] ifTrue: [\x0a\x09\x09\x0a\x09]\x0a\x09\x09",
messageSends: ["ifTrue:", "="],
referencedClasses: []
}),
globals.Transition);

smalltalk.addMethod(
smalltalk.method({
selector: "targetState",
protocol: 'accessing',
fn: function () {
var self=this;
var $1;
$1=self["@targetState"];
return $1;
},
args: [],
source: "targetState\x0a\x09^ targetState",
messageSends: [],
referencedClasses: []
}),
globals.Transition);

smalltalk.addMethod(
smalltalk.method({
selector: "targetState:",
protocol: 'accessing',
fn: function (anObject) {
var self=this;
self["@targetState"]=anObject;
return self;},
args: ["anObject"],
source: "targetState: anObject\x0a\x09targetState := anObject",
messageSends: [],
referencedClasses: []
}),
globals.Transition);


smalltalk.addMethod(
smalltalk.method({
selector: "event:actions:targetState:",
protocol: 'as yet unclassified',
fn: function (anEventNameString, aBlockClosure, aStateNameString) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._event_(anEventNameString);
_st($2)._actions_(aBlockClosure);
_st($2)._targetState_(aStateNameString);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"event:actions:targetState:",{anEventNameString:anEventNameString,aBlockClosure:aBlockClosure,aStateNameString:aStateNameString},globals.Transition.klass)});},
args: ["anEventNameString", "aBlockClosure", "aStateNameString"],
source: "event: anEventNameString actions: aBlockClosure targetState: aStateNameString\x0a\x0a\x09^ self new \x0a\x09\x09event: anEventNameString ;\x0a\x09\x09actions: aBlockClosure ;\x0a\x09\x09targetState: aStateNameString ;\x0a\x09\x09yourself.",
messageSends: ["event:", "new", "actions:", "targetState:", "yourself"],
referencedClasses: []
}),
globals.Transition.klass);

});
