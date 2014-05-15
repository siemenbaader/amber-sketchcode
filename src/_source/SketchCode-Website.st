Smalltalk createPackage: 'SketchCode-Website'!
Widget subclass: #Navigation
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!Navigation methodsFor: 'rendering'!

renderOn: html

	html nav with: [
		html ul class: 'nav nav-pills nav-stacked span4'; with: [
			Website current pages do: [:page |
				(NavigationPill for: page) renderOn: html
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

Widget subclass: #NavigationPill
	instanceVariableNames: 'page'
	package: 'SketchCode-Website'!

!NavigationPill methodsFor: 'accessing'!

page
	^ page
!

page: anObject
	page := anObject
! !

!NavigationPill methodsFor: 'rendering'!

renderOn: html

	html li: (html a 
		href: '#'; 
		with: page title;
		onClick: [ Website current show: page ]
	).
! !

!NavigationPill class methodsFor: 'instance creation'!

for: aPage
	^ self new 
		page: aPage;
		yourself
! !

Widget subclass: #Page
	instanceVariableNames: 'pageDomElement'
	package: 'SketchCode-Website'!

!Page methodsFor: 'navigation'!

hide
	pageDomElement asJQuery hide.
!

show
	pageDomElement asJQuery show.
! !

!Page methodsFor: 'pageContent'!

renderContentOn: html
	self subclassResponsibility
! !

!Page methodsFor: 'properties'!

title 
	<
	return self
		._class()
		._name()
		.replace( /([a-z])([A-Z])/g, "$1 $2" );
	>
! !

!Page methodsFor: 'rendering'!

htmlFrom: aMarkdownString

	|converter|

	converter := ((require value: 'showdown') at: 'converter') new.
	^ converter makeHtml: aMarkdownString
!

renderOn: html
	pageDomElement := html div 
		class: 'page' ;
		with: [
		self renderContentOn: html
	].
! !

Page subclass: #About
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!About methodsFor: 'pageContent'!

renderContentOn: html

	html 
		h1: 'Welcome!!' ;

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

!InstrumentalInteraction methodsFor: 'pageContent'!

renderContentOn: html

	html with: 'A blog post and hopefylly live examples 
	  on the use of instrumental interaction for the 
	  workshop to come here'.
! !

Page subclass: #ResearchAgenda
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!ResearchAgenda methodsFor: 'pageContent'!

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

!TryIt methodsFor: 'pageContent'!

renderContentOn: html

	html with: 'try it..'
! !

Widget subclass: #Website
	instanceVariableNames: 'pages'
	package: 'SketchCode-Website'!

!Website methodsFor: 'accessing'!

pages

	^ pages
!

pages: anObject

	pages := anObject
! !

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

!Website methodsFor: 'navigation'!

hideAllPages
	pages do: [:page | page hide]
!

show: aPage

	self hideAllPages.
	aPage show
!

showFirstPage

	self show: (pages at: 1).
! !

!Website methodsFor: 'rendering'!

container

	^ 'body' asJQuery find: '#main'
!

renderOn: html


	html div
		class: 'page-header' ;
		with: [
			html h1: 'SketchCode'.
			html small with: 'Research on supporting Design Thinking in programming tools'.		
			].


	html div class: 'row'; with: [
		
		html div class: 'col-xs-3'; with: [
			Navigation new renderOn: html.
		].
		html div class: 'col-xs-9'; with: [
			
			pages do: [:page |
				page renderOn: html 
			]
		].
	]
! !

Website class instanceVariableNames: 'singletonInstance'!

!Website class methodsFor: 'instance creation'!

current
	singletonInstance ifNil: [singletonInstance := super new ].
	
	^ singletonInstance
! !

!Website class methodsFor: 'private'!

new
	self shouldNotImplement
! !

!Website class methodsFor: 'rendering'!

render
	'#main' asJQuery empty.
	self current appendToJQuery: '#main' asJQuery.
	self current showFirstPage.
! !

