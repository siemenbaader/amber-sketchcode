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
	instanceVariableNames: 'states transitions initialState currentState stateTable events'
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
	transitions := Array new.
	stateTable := HashedCollection new.
	
	super initialize.
!

stateNamed: aString

	^ states detect: [:state | state name = aString ].
!

states: aListOfStrings
	states := aListOfStrings.
	
	states do: [ :aString | stateTable at: aString put: (HashedCollection new) ].
!

when: state on: event do: actions andEnter: aState

	| transition |
	transition := Transition new
		actions: actions; 
		targetState: aState; 
		yourself.
	
	( stateTable at: state )
		at: event put: transition.
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

    StateMachine fromDSL
        when: 'closed' ;
            on: 'open' do: [window alert: 'opening'] andBe: 'open' ;
            on: 'lock' do: [window alert: 'locked door.'] andBe: 'locked' ;
            on: 'unlock' do: [window alert: 'already unlocked'] andBe: 'closed'  ; 
            on: 'close' do: [window alert: 'already closed'. andBe: 'closed' ;

        when: 'locked';
            on: 'open' do: [window alert: 'Door is locked, sorry'] andBe: 'locked' ;

        initialState: 'closed'.!

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
			event: anEventNameString 
			actions: anActionBlockClosure 
			targetState: aStateNameString).
!

when: aStateString
	"Creates a new state and sets the assigning context for transitions to it"

	assigningState := State name: aStateString.
	stateMachine addState: assigningState.
! !

Widget subclass: #StateMachineEditor
	instanceVariableNames: ''
	package: 'SketchCode-ConceptEditors'!

Widget subclass: #StateTable
	instanceVariableNames: ''
	package: 'SketchCode-ConceptEditors'!

!StateTable methodsFor: 'initialization'!

initialize
	super initialize.
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

Object subclass: #Transition
	instanceVariableNames: 'event actions targetState'
	package: 'SketchCode-ConceptEditors'!
!Transition commentStamp!
I am a Transition.

I am contained in a State and I hold an event name that triggers me, a block of actions to perform and the name of the resulting state.!

!Transition methodsFor: 'accessing'!

actions
	^ actions
!

actions: anObject
	actions := anObject
!

event
	^ event
!

event: aString
	event := aString
!

processEvent: aString

	[ aString = event ] ifTrue: [
		
	]
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
	targetState := nil
! !

!Transition class methodsFor: 'as yet unclassified'!

event: anEventNameString actions: aBlockClosure targetState: aStateNameString

	^ self new 
		event: anEventNameString ;
		actions: aBlockClosure ;
		targetState: aStateNameString ;
		yourself.
! !

