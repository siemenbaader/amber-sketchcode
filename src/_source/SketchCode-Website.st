Smalltalk createPackage: 'SketchCode-Website'!
Widget subclass: #Navigation
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!Navigation methodsFor: 'as yet unclassified'!

renderOn: html

	html nav with: [
		html ul class: 'nav nav-pills nav-stacked span4'; with: [
			Website current pages do: [:page |
				html li: (html a href: '#'; with: page class name; onClick: [ Website current show: page ]).
			].
		].
	].
! !

Navigation class instanceVariableNames: 'singletonInstance'!

!Navigation class methodsFor: 'as yet unclassified'!

current

	singletonInstance ifNil: [ singletonInstance := self new ].

	^ singletonInstance
! !

Widget subclass: #Page
	instanceVariableNames: 'pageDomElement'
	package: 'SketchCode-Website'!

!Page methodsFor: 'navigation'!

element
	^ element
!

hide
	pageDomElement asJQuery hide.
!

hideAll

	self class subclasses do: [:page | page hide].
!

show
	pageDomElement asJQuery show.
! !

!Page methodsFor: 'properties'!

name
	^ self subclassResponsibility
! !

!Page methodsFor: 'rendering'!

htmlFrom: aMarkdownString

	|converter|

	converter := ((require value: 'showdown') at: 'converter') new.
	^ converter makeHtml: aMarkdownString
!

renderContentOn: html
	self subclassResponsibility
!

renderOn: html
	pageDomElement := html div 
		class: 'page' ;
		with: [
		self renderContentOn: html
	].
! !

!Page class methodsFor: 'as yet unclassified'!

all

	^ self subclasses
! !

Page subclass: #About
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!About methodsFor: 'as yet unclassified'!

renderContentOn: html

	html 
		h1: 'Welcome to SketchCode!!' ;

		p:  'SketchCode is an interactive general purpose programming environment that sees coding as a creative process. 
		    It tries to rethink programming tools from the perspective of Design Thinking.' ;

		p: 'It is developed by Siemen Baader in the CMA[2] research group at Aarhus University, and part of the 
		   ''Creativity in Blended Interaction Spaces''[3] project, that aims at facilitating creative
		     collaboration between high school students.' ;

		p: 'This website is a running SketchCode environment. To learn more, or to try SketchCode live in your browser, 
		    use the menu to the left.' ;
			
		p: 'Happy Hacking!!' ;
		
		p: '-- Siemen'.
! !

Page subclass: #InstrumentalInteraction
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!InstrumentalInteraction methodsFor: 'as yet unclassified'!

renderContentOn: html

	html with: 'A blog post and hopefylly live examples 
	  on the use of instrumental interaction for the 
	  workshop to come here'.
! !

Page subclass: #ResearchAgenda
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!ResearchAgenda methodsFor: 'as yet unclassified'!

content

	^ '#Hello form markdown'
!

renderContentOn: html

	html div asJQuery append: 
		(self htmlFrom: self content)
! !

Page subclass: #ResearchHistory
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

Page subclass: #TryIt
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!TryIt methodsFor: 'as yet unclassified'!

renderContentOn: html

	html with: 'try it..'
! !

Widget subclass: #Website
	instanceVariableNames: 'pages'
	package: 'SketchCode-Website'!

!Website methodsFor: 'initialization'!

initialize
	pages := Array new
		add: About new ;
		add: ResearchAgenda new ;
		add: TryIt new ;
		add: InstrumentalInteraction new ;
		yourself.
		
	super initialize.
! !

!Website methodsFor: 'rendering'!

container

	^ 'body' asJQuery find: '.container'
!

hideAllPages
	pages do: [:page | page hide]
!

pages

	^ pages
!

pages: anObject

	pages := anObject
!

renderOn: html

	html div class: 'row'; with: [
		
		html div class: 'col-xs-2'; with: [
			Navigation new renderOn: html.
		].
		html div class: 'col-xs-10'; with: [
			
			pages do: [:page |
				page renderOn: html 
			]
		].
	]
!

show: aPage

	self hideAllPages.
	aPage show
! !

Website class instanceVariableNames: 'singletonInstance'!

!Website class methodsFor: 'private'!

new
	super new
! !

!Website class methodsFor: 'rendering'!

current
	singletonInstance ifNil: [singletonInstance := self new ].
	
	^ singletonInstance
!

render
	'#main' asJQuery empty.
	self current appendToJQuery: '#main' asJQuery.
! !

