Smalltalk createPackage: 'SketchCode-ConceptEditors'!
Widget subclass: #NextStateSelector
	instanceVariableNames: 'stateMachine currentState'
	package: 'SketchCode-ConceptEditors'!

!NextStateSelector methodsFor: 'initialization'!

initialize
	super initialize.
!

renderOn: html
!

stateMachine: aStateMachine
	stateMachine := aStateMachine.
	currentState := aStateMachine initialState.
! !

Object subclass: #State
	instanceVariableNames: 'name transitions'
	package: 'SketchCode-ConceptEditors'!
!State commentStamp!
I am a state in a state machine.

I hold a name and a number of outgoing transitions.

I can also be the initial state.!

!State methodsFor: 'accessing'!

addTransition: aTransition
	transitions add: aTransition.
!

doActionsForEvent: aString
	(self transitionForEvent: aString) actions value.
!

name
	^ name
!

name: anObject
	name := anObject
!

targetStateFor: aString
	^ (transitions detect: [:t | t event = aString ]) targetState.
!

transitionForEvent: aString
	^ transitions detect: [:t | t event = aString]
!

transitions
	^ transitions
!

transitions: anObject
	transitions := anObject
! !

!State methodsFor: 'initialization'!

initialize
	super initialize.

	name := nil.
	transitions := Array new.
! !

!State class methodsFor: 'as yet unclassified'!

name: stateNameString
	^ self new name: stateNameString; yourself.
! !

Widget subclass: #StateChart
	instanceVariableNames: ''
	package: 'SketchCode-ConceptEditors'!

!StateChart methodsFor: 'as yet unclassified'!

initialize
	"comment stating purpose of message"

	| temporary variable names |
!

renderOn: html
	"comment stating purpose of message"
	html div 
		style:'border:1px solid black;' ;
		with: [
		html table class: 'table table-condensed table-hover'; with: [
			html thead with: [
				html th with: '&nbsp'.
				html th with: 'inactive'.
				html th with: 'paused'.
				html th with: 'fading-in'.
				html th with: 'shown'.
				html th with: 'fading-out'.
			].
			html tbody with: [
				html tr with: [
					html th with: 'mouseover'.
					html td with: 'foo [dropdown]'.
					html td ; td; td; td. ].
				html tr with: [
					html th with: 'mouseover'.
					html td with: 'foo [ddsfsddown]'.
					html td ; td; td; td.
				].
			].
		].
	].
! !

Object subclass: #StateMachine
	instanceVariableNames: 'states events transitions initialState currentState'
	package: 'SketchCode-ConceptEditors'!
!StateMachine commentStamp!
I am a Finite State Machine. I hold State*s* and Transition*s*.

I can be constructed from source code using a *StateMachineDSLBuilder*, but I am also a model that can be updated from a GUI and even notify my GUI when I am changed.

At run-time, I will respond to events and trigger my transitions appropriately.

    |door|

    door := StateMachine fromDSL
        when: 'closed' ;
            on: 'open' do: [Transcript show: 'opening'; cr] andBe: 'open' ;
            on: 'close' do: [Transcript show: 'already closed.'; cr] andBe: 'closed' ;
            on: 'lock' do: [Transcript show: 'now locked'; cr] andBe: 'locked' ;
            on: 'unlock' do: [Transcript show: 'not locked, just closed'; cr ] andBe: 'closed' ;
    
        when: 'open';
            on: 'open' do: [Transcript show: 'Door is already open.'; cr.] andBe: 'open' ;
            on: 'close' do: [Transcript show: 'closing.'; cr.] andBe: 'closed' ;
            on: 'lock' do: [Transcript show:  'is open. close before locking'; cr] andBe: 'open' ;
            on: 'unlock' do: [Transcript show:  'is open, not locked. '; cr] andBe: 'open' ;
    
		when: 'locked';
			on: 'open' do: [Transcript show: 'Door is locked.'; cr.] andBe: 'locked' ;
			on: 'close' do: [Transcript show: 'Door is locked and closed.'; cr.] andBe: 'locked' ;
			on: 'unlock' do: [Transcript show: 'Door is now unlocked.'; cr.] andBe: 'closed' ;
			on: 'lock' do: [Transcript show: 'already locked'; cr] andBe: 'locked' ;
			
        initialState: 'closed'.
	  
    door handleEvent: 'open'.
    door handleEvent: 'close'.
    door handleEvent: 'close'.
    door handleEvent: 'lock'.
    door handleEvent: 'open'.!

!StateMachine methodsFor: 'initialization'!

addEvent: aString
	events add: aString.
!

addState: aState
	states add: aState
!

addTransition: aTransition

	"Registers a transition in the state FSM and its state/event table.
	The state and event must exist.
	"
	
	transitions add: aTransition.
!

currentState
	
	^ currentState.
!

events
	^ events
!

events: aListOfStrings
	events := aListOfStrings.
!

fromDSL
	^ StateMachineDSL new
!

handleEvent: aString
	currentState doActionsForEvent: aString.
	currentState := self stateNamed: (currentState targetStateFor: aString).
!

initialState: aStateNameString

	initialState := self stateNamed: aStateNameString.
	currentState := initialState.
!

initialize


	states := Array new.
	events := Array new.
	transitions := Array new.
	stateTable := HashedCollection new.
	
	super initialize.
!

stateNamed: aString

	^ states detect: [:state | state name = aString ].
!

states
	^ states
!

states: aListOfStrings
	states := aListOfStrings.
	
	states do: [ :aString | stateTable at: aString put: (HashedCollection new) ].
!

transitionForState: aState event: aString
	^ aState transitionForEvent: aString
! !

StateMachine class instanceVariableNames: 'dummy'!

!StateMachine class methodsFor: 'as yet unclassified'!

fromDSL
	^ StateMachineDSLBuilder new
! !

Object subclass: #StateMachineDSLBuilder
	instanceVariableNames: 'stateMachine assigningState'
	package: 'SketchCode-ConceptEditors'!
!StateMachineDSLBuilder commentStamp!
I am a DSL to build StateMachines from neat source code.

Use me like this:

|door|

    door := StateMachine fromDSL
        when: #closed ;
            on: #open do: [Transcript show: 'opening'; cr] andBe: #open ;
            on: #close do: [Transcript show: 'already closed'; cr] andBe: #closed ;
            on: #lock do: [Transcript show: 'now locked'; cr] andBe: #locked ;
            on: #unlock do: [Transcript show: 'not locked, just closed'; cr ] andBe: #closed ;
    
        when: #open;
            on: #open do: [Transcript show: 'Door is already open.'; cr.] andBe: #open ;
            on: #close do: [Transcript show: 'closing.'; cr.] andBe: #closed ;
            on: #lock do: [Transcript show:  'is open. close before locking'; cr] andBe: #open ;
            on: #unlock do: [Transcript show:  'is open, not locked. '; cr] andBe: #open ;
    
        when: #locked;
            on: #open do: [Transcript show: 'Door is locked.'; cr.] andBe: #locked ;
            on: #close do: [Transcript show: 'Door is locked and closed'; cr.] andBe: #locked ;
            on: #unlock do: [Transcript show: 'Door is now unlocked.'; cr.] andBe: #closed ;
            on: #lock do: [Transcript show: 'already locked'; cr] andBe: #locked ;
			
        initialState: #closed.!

!StateMachineDSLBuilder methodsFor: 'initialization'!

initialState: aString
	"The final call to the FSM DSL. Returns the FSM object"

	stateMachine initialState: aString.
	^ stateMachine.
!

initialize
	assigningState := nil.
	stateMachine := StateMachine new.
!

on: anEventNameString do: anActionBlockClosure andBe: aStateNameString

	"Create a new state and set the assigning context for transitions to it"

	assigningState addTransition:
		(Transition 
			stateMachine: stateMachine
			event: anEventNameString 
			actions: anActionBlockClosure 
			targetState: aStateNameString).

	(stateMachine events includes: anEventNameString) ifFalse: [
		stateMachine addEvent: anEventNameString
	].
!

when: aStateString
	"Creates a new state and sets the assigning context for transitions to it"

	assigningState := State name: aStateString.
	stateMachine addState: assigningState.
! !

Widget subclass: #StateMachineEditor
	instanceVariableNames: 'stateMachine stateTable'
	package: 'SketchCode-ConceptEditors'!
!StateMachineEditor commentStamp!
I am a widget to edit State Machines. I hold both a StateChart and a StateTable view.

I observe a StateMachine model object, update its properties, and my views are updated whenever the model changes.

# How to use


    |door|

    door := StateMachine fromDSL
        when: #closed ;
            on: #open do: [Transcript show: 'opening'; cr] andBe: #open ;
            on: #close do: [Transcript show: 'already closed'; cr] andBe: #closed ;
            on: #lock do: [Transcript show: 'now locked'; cr] andBe: #locked ;
            on: #unlock do: [Transcript show: 'not locked, just closed'; cr ] andBe: #closed ;
    
        when: #open;
            on: #open do: [Transcript show: 'Door is already open.'; cr.] andBe: #open ;
            on: #close do: [Transcript show: 'closing.'; cr.] andBe: #closed ;
            on: #lock do: [Transcript show:  'is open. close before locking'; cr] andBe: #open ;
            on: #unlock do: [Transcript show:  'is open, not locked. '; cr] andBe: #open ;
    
        when: #locked;
            on: #open do: [Transcript show: 'Door is locked.'; cr.] andBe: #locked ;
            on: #close do: [Transcript show: 'Door is locked and closed'; cr.] andBe: #locked ;
            on: #unlock do: [Transcript show: 'Door is now unlocked.'; cr.] andBe: #closed ;
            on: #lock do: [Transcript show: 'already locked'; cr] andBe: #locked ;
			
        initialState: #closed.

    

    '#main' asJQuery empty.
    (StateMachineEditor for: door) appendToJQuery: ('#main' asJQuery)!

!StateMachineEditor methodsFor: 'accessing'!

stateMachine
	^ stateMachine
!

stateMachine: anObject
	stateMachine := anObject
!

stateTable
	^ stateTable
!

stateTable: anObject
	stateTable := anObject
! !

!StateMachineEditor methodsFor: 'initialization'!

initialize
	super initialize.

	stateMachine := StateMachine new.
	stateTable := StateTable for: stateMachine.
! !

!StateMachineEditor methodsFor: 'rendering'!

renderOn: html
	html div 
		style: 'border: 1px solid gray;
				border-radius: 5px;
				box-shadow: 10px 10px 5px #888888;				
			   ' ;
		class: 'concept-editor state-machine'; with: [

		html ul class: 'nav nav-tabs'; with: [
			html li 
				with: [ html a href: '#'; with: 'StateChart' ].
			html li
				class: 'active';
				with: [ html a href: '#'; with: 'StateTable' ].
			html li
				with: [ html a href: '#'; with: 'DSL' ].

		].
		
		
		stateTable renderOn: html.
		
	]
! !

!StateMachineEditor class methodsFor: 'as yet unclassified'!

for: aStateMachine
	^ self new 
		stateMachine: aStateMachine ;
		stateTable: (StateTable for: aStateMachine).
! !

Widget subclass: #StateTable
	instanceVariableNames: 'stateMachine'
	package: 'SketchCode-ConceptEditors'!

!StateTable methodsFor: 'accessing'!

stateMachine
	^ stateMachine
!

stateMachine: aStateMachine
	stateMachine := aStateMachine
!

transitionForState: aState event: aString
! !

!StateTable methodsFor: 'initialization'!

initialize
	super initialize.
! !

!StateTable methodsFor: 'rendering'!

renderOn: html
	self renderTableOn: html.
	html div: [
		html span class: 'glyphicon glyphicon-plus-sign'
	]
!

renderTableOn: html

	html table class: 'table table-striped table-condensed table-hover'; with: [
		html thead with: [
			html th with: 'States\Events'.
			
			stateMachine states do: [ :state |
				html th with: state name.
			].
		].
		html tbody with: [
			stateMachine events do: [ :event |
			
				html tr with: [
					html th with: event.
					
					stateMachine states do: [:state |
						html td with: 
							(TransitionCell for: 
								(stateMachine transitionForState: state event: event)).
					].
				].
			].
		].
	].
! !

!StateTable class methodsFor: 'as yet unclassified'!

for: aStateMachine
	^ self new stateMachine: aStateMachine.
! !

Object subclass: #Transition
	instanceVariableNames: 'stateMachine event actions targetState actionsSource'
	package: 'SketchCode-ConceptEditors'!
!Transition commentStamp!
I am a Transition.

I am contained in a State and I hold an event name that triggers me, a block of actions to perform and the name of the resulting state.!

!Transition methodsFor: 'accessing'!

actions
	^ actions
!

actions: aString
	actions := aString
!

actionsSource
	^ actionsSource
!

actionsSource: aString
	actionsSource := aString
!

event
	^ event
!

event: aSymbol
	event := aSymbol
!

possibleTargetStates
	^ stateMachine states
!

processEvent: aString

	[ aString = event ] ifTrue: [
		
	]
!

stateMachine
	^ stateMachine
!

stateMachine: anObject
	stateMachine := anObject
!

targetState
	^ targetState
!

targetState: anObject
	targetState := anObject
! !

!Transition methodsFor: 'initialization'!

initialize
	super initialize.

	actions := nil.
	actionsSource := '"put code here.."'.
	targetState := nil
! !

!Transition class methodsFor: 'as yet unclassified'!

stateMachine: aStateMachine event: anEventNameString actions: aBlockClosure targetState: aStateNameString

	^ self new 
		stateMachine: aStateMachine ;
		event: anEventNameString ;
		actions: aBlockClosure ;
		targetState: aStateNameString ;
		yourself.
! !

Widget subclass: #TransitionCell
	instanceVariableNames: 'transition stateMachine'
	package: 'SketchCode-ConceptEditors'!
!TransitionCell commentStamp!
I am an editor for a `Transition` inside a cell in `TransitionTable`.!

!TransitionCell methodsFor: 'accessing'!

stateMachine
	^ stateMachine
!

stateMachine: anObject
	stateMachine := anObject
!

transition
	^ transition
!

transition: anObject
	transition := anObject
! !

!TransitionCell methodsFor: 'event handling'!

actionsSourceChanged
	window alert: 'Code changed'
! !

!TransitionCell methodsFor: 'rendering'!

renderOn: html
	html div with: 
		(html textarea
			with: transition actionsSource ;
			onChange: [self actionsSourceChanged]
			
		).
	html select with: [
		transition possibleTargetStates do:[ :state |
			html option
				value: state name ;
				with: state name.
			]
		]
! !

!TransitionCell class methodsFor: 'as yet unclassified'!

for: aTransition
	"comment stating purpose of message"

	^self new 
		transition: aTransition ;
		yourself
! !

