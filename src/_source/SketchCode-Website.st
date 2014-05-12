Smalltalk createPackage: 'SketchCode-Website'!
Widget subclass: #About
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!About methodsFor: 'as yet unclassified'!

renderOn: html

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

Widget subclass: #Website
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!Website methodsFor: 'as yet unclassified'!

renderOn: html
	
	About new renderOn: html.
! !

!Website class methodsFor: 'rendering'!

render
	'#main' asJQuery empty.
	self new appendToJQuery: '#main' asJQuery.
! !

