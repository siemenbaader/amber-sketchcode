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

!Navigation class methodsFor: 'instance creation'!

current

	singletonInstance ifNil: [ singletonInstance := self new ].

	^ singletonInstance
! !

Widget subclass: #NavigationPill
	instanceVariableNames: 'page listItemDomElement'
	package: 'SketchCode-Website'!

!NavigationPill methodsFor: 'accessing'!

page
	^ page
!

page: anObject
	page := anObject
! !

!NavigationPill methodsFor: 'initialization'!

initialize
	super initialize.

	listItemDomElement := nil.
	page := nil.
	
	self subscribeToPageChanges
! !

!NavigationPill methodsFor: 'navigation'!

handlePageChange: aPageChange

	aPageChange toPage = page
		ifTrue:  [ self setActive ]
		ifFalse: [ self setInactive ]
!

navigateToPage

	WebsiteAnnouncer current 
		announce: (PageChange for: page).
		
	URLBar current pathAndAddToHistory: page path.
!

subscribeToPageChanges
	
	WebsiteAnnouncer current unsubscribe: self.
	
	WebsiteAnnouncer current
		on: PageChange
		send: #handlePageChange:
		to: self.
! !

!NavigationPill methodsFor: 'rendering'!

renderOn: html

	listItemDomElement := html li: (html a 
		href: page path ; 
		with: page title ;
		onClick: [ :e |  self navigateToPage. false ]
	).
!

setActive

	listItemDomElement asJQuery addClass: 'active'
!

setInactive

	listItemDomElement asJQuery removeClass: 'active'
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

path
	^ '#' , self class name
!

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

!About methodsFor: 'properties'!

path
	"I am the root page, so my path is overriden to /"
	
	^ '/'
! !

Page subclass: #InstrumentalInteraction
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!InstrumentalInteraction methodsFor: 'pageContent'!

introduction
!

renderContentOn: html
	html div asJQuery html: (self htmlFrom:'
# Instrumental Interaction in Small Business Workflow Management Systems
In this essay, I will discuss Instrumental Interaction as an enabler for innovation within [small and medium sized enterprises (SMEs)] [SMEs], namely in making [Workflow Management Systems][Workflow Management Systems] more affordable for smaller companies. I will touch upon workshop themes two (Instrumental Interaction in a practical context) and three (technology to enable Instrumental Interaction). In doing so, I wish to elaborate the link between the conceptual and usability benefits of the Instrumental Interaction paradigm and the innovation and monetary gains that may arise from its adoption in practice.

## Background
I always wanted to be an inventor. I have always cared deeply about detailed observation, reflection and deep theoretical understanding of the world around us. But I have always needed a clear link to practical application and benefits for the quality of life of concrete people from these efforts. So, after I had completed my MSc at ITU, and before I came back to academia to pursue a PhD, I joined three friends who just had founded Contingent [] ; a startup company centred around quality of life, a 30 hr workweek, invention of mobile and web apps, and programming consultancy to pay the bills. I figured that the small setting of a startup was the most direct way to learn how to transfer my academic skills into practical value.

At Contingent, we sold three kinds of services:

  * Programming billed by hours
  * Realising fellow entrepreneur’s visions for mobile & web apps
  * Workflow Management Systems for small companies (micro SMEs, < 10 employees)

I always found the latter by far the most interesting. [Workflow management systems] are systems that (semi) automate workflows in a business, ensure that all the steps have been carried out, and alert employees when specific steps need attention. In micro SMEs, the workflows that would be automated are typically procedures that have been collected and refined over the years. There are typically one or two persons who steward these procedures, document them in spreadsheets and train new employees. I found working in this setting very motivating because translating the informal descriptions of procedures into formal programs is a relatively open co-design process, with concrete goals (workflow efficiency and elimination of tedious tasks) and with domain experts (the people maintaining the spreadsheets) and end-users (the people carrying out the work) closely involved.

The systems we developed involved email communication and collaboration between several different people, and were built on cloud and web technology by integrating web based services with a custom web application and front end.

## The Problem
The primary value for the SMEs in using Workflow Management Systems lies in being able to perform their business workflows more efficiently and with less risk for errors, typically to expand their business or to cut costs. At the same time, taking workflows out of their existing applications – eg. spreadsheets – requires that a new user interface at least provides the same level of relevant functionality in order to be satisfying for the user. Since user interface development is costly, and since the main value for the business lies in workflow automation, not usability, the user interfaces are often implemented to the level of bare minimum. While the business as a whole benefits, and the users are relieved of tedious and repetitive tasks, their daily user experience suffers. Even in this (from a co-design perspective rather dissatisfying) situation, a disproportional amount of development time is spent on re-implementing user interfaces, while the conceptually interesting parts – the definition and automation of the business workflow – are completed relatively quickly. 

  - examples: PhD planner, Github, A-Kasse-system
  - also, only larger SMEs can afford building UIs.

In the following, I will present a concrete case of a Workflow Management System and illustrate the problems associated with its construction. I will then introduce the paradigm of Instrumental Interaction, and provide examples of how an implementation based on Instrumental Interaction on the web platform can address these problems. I will conclude by summing up general findings on how Instruments and software design according to Instrumental Interaction can be done in order to make the development of custom software, namely Workflow Management Systems, more affordable to SMEs by removing complexity from the user interface construction and allowing focus on the business workflows.

## Case: A Competition Management System
One organisation we built a Workflow Management System for organised competitions for student entrepreneurs. They run by-yearly competitions where student entrepreneurs send in a business plan, which is evaluated by a panel of experts from academia and business. A few teams are selected for a final round, where students pitch their business idea to the jury in a public event. The final winner is awarded a money prize, receives media attention and is assigned a mentor to realise the business. 

The organisation wanted to automate the process of recruiting expert panelists, handling student submission and the selection of finalists, in order to expand their activities to other events of similar structure.

The workflow goes as follows:

[illustration here. Then explaining text.]

## References
  [Workflow management systems] : http://en.wikipedia.org/wiki/Workflow_management_system
  [SMEs] : http://en.wikipedia.org/wiki/Small_and_medium_enterprises

students design a business, validate it, write a report
jury panel is recruited 
previous panelists are invited, reminded via email, then phone
option to opt-out & sign up for more
agreement signed & filed
manual nda intervention if sent via email
submitted reports are given feedback & rated
reminders are sent to jury
winner is picked, and a ceremony is held 
	' )
!

renderIntroductionOn: html

	html div asJQuery html: (self htmlFrom:

	'
# 

Abstract
This 



Introduction





Background


Problem


Instrumental interaction, and how it might help

A practitioner perspective. At contingent, we built three kinds of apps:

* plain programming hours (YouSee)
* hbuilding systems to entrepreneur’s vision (Babysigning, iBikeCph, Organizer)
* Workfow systems and office automation (VentureCup)

I found the latter by far the most interesting, because it was a design task with dialogue with real users & domain expertise. In this essay, I will describe how Instrumental Interaction could have helped us, and how I will use it in the future to address similar problems.

-- custom views, workflows & reminders

	'
	)
! !

Page subclass: #ResearchAgenda
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

!ResearchAgenda methodsFor: 'pageContent'!

content

	^ '#Hello from markdown'
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

content
	^
'	
# A live environment
	
This website is implemented in SketchCode. It is built 
on top of Amber Smalltalk, a port of Pharo Smalltalk that
runs in the browser.

If you click the button, the IDE will open i a pop up
window. Make sure to allow pop-ups for this domain.
		
'
!

renderContentOn: html

	html div asJQuery append: 
		(self htmlFrom: self content).
		
	html button 
		class: 'btn btn-primary center-block' ;
		with: 'Open the IDE' ;
		onClick: [(require value: 'amber/helpers') popupHelios]
! !

Object subclass: #URLBar
	instanceVariableNames: 'pages'
	package: 'SketchCode-Website'!

!URLBar methodsFor: 'navigation'!

path

	^ window location hash
!

path: aString

	window history
		replaceState: nil
		title: ''
		url: aString .
!

pathAndAddToHistory: aString

	window history
		pushState: nil
		title: ''
		url: aString .
! !

URLBar class instanceVariableNames: 'singletonInstance'!

!URLBar class methodsFor: 'instance creation'!

current
	singletonInstance ifNil: [singletonInstance := super new ].
	
	^ singletonInstance
!

new
	self shouldNotImplement
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
	
	super initialize.

	pages := Array new
		add: About new ;
		add: ResearchAgenda new ;
		add: TryIt new ;
		add: InstrumentalInteraction new ;
		yourself.
	
	self subscribeToPageChanges.
! !

!Website methodsFor: 'navigation'!

handlePageChange: aPageChange

	self show: aPageChange toPage
!

hideAllPages
	pages do: [:page | page hide]
!

pageForPath: aString

	^ Website current pages
		detect: [:p | p path = aString ]
		ifNone: [ pages at: 1 ].
!

pageForURL

	^ self pageForPath: (URLBar current path)
!

show: aPage

	self hideAllPages.
	aPage show
!

showFirstPage	

	WebsiteAnnouncer current announce:
		(PageChange for: (pages at: 1))
!

showPageFromURLPath

	| page |
	
	page := self pageForURL.
	URLBar current path: page path.
	WebsiteAnnouncer current announce:
		(PageChange for: self pageForURL).
!

subscribeToPageChanges
	
	WebsiteAnnouncer current unsubscribe: self.
	
	WebsiteAnnouncer current
		on: PageChange
		send: #handlePageChange:
		to: self.
		
	window 
		addEventListener: 'popstate'
		do: [
			WebsiteAnnouncer current announce:
				(PageChange for: self pageForURL)
		]
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
	self current showPageFromURLPath
! !

Object subclass: #WebsiteAnnouncement
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

WebsiteAnnouncement subclass: #PageChange
	instanceVariableNames: 'toPage'
	package: 'SketchCode-Website'!

!PageChange methodsFor: 'accessing'!

toPage
	^ toPage
!

toPage: anObject
	toPage := anObject
! !

!PageChange class methodsFor: 'instance creation'!

for: aPage

	^ self new
		toPage: aPage ;
		yourself
! !

SystemAnnouncer subclass: #WebsiteAnnouncer
	instanceVariableNames: ''
	package: 'SketchCode-Website'!

