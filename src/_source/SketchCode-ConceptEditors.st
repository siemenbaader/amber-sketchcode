Smalltalk createPackage: 'SketchCode-ConceptEditors'!
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
	html div with: [
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
					html td with: 'foo [dropdown]'; td ; td; td; td.
				].
			].
		].
	].
! !

