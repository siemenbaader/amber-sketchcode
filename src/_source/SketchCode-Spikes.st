Smalltalk createPackage: 'SketchCode-Spikes'!
Widget subclass: #ColumnHeaderHandle
	instanceVariableNames: 'theColumn'
	package: 'SketchCode-Spikes'!

!ColumnHeaderHandle methodsFor: 'accessing'!

theColumn
	^ theColumn
!

theColumn: anObject
	theColumn := anObject
! !

!ColumnHeaderHandle methodsFor: 'initialization'!

initialize
	super initialize.
! !

!ColumnHeaderHandle methodsFor: 'rendering'!

renderOn: html

	html ul class: 'dropdown-menu' ; style: 'width: 100%'; with: [
		html li style: 'padding-left: 10px; padding-right: 10px'; with:[
			html button class:'btn btn-default pull-left'; with: '<=>'.
			html button 
			class:'btn btn-danger pull-right' ; 
			with: '(X)' ;
			onClick: [ self removeColumn ].
		].	
	].
! !

!ColumnHeaderHandle class methodsFor: 'instance creation'!

for: aColumnName

 self new theColumn: aColumnName; yourself.
! !

Widget subclass: #Spike
	instanceVariableNames: ''
	package: 'SketchCode-Spikes'!
!Spike commentStamp!
I am an abstract spike. I define an interface that spike classes use to explore aspects systematically.

A spike exposes:

* renderHeadingOn: - The test's heading
* renderProblemOn: - HTML problem definition
* renderTestbedOn: - DOM where the tests are conducted
* renderFindingsOn: - HTML section with reflections & conclusions


, and that the HTMLGUISpikes singleton uses to render them.!

!Spike methodsFor: 'rendering'!

renderFindingsOn:html
	self subclassResponsibility
!

renderHeadingOn:html
	self subclassResponsibility
!

renderOn:html

	html section 
		class: 'spike' ;
		with: [
			self renderHeadingOn: html.
			self renderProblemOn: html.
			self renderTestbedOn: html.
			self renderFindingsOn: html.

		]
!

renderProblemOn:html
	self subclassResponsibility
!

renderTestbedOn:html
	self subclassResponsibility
! !

Spike subclass: #GridTable
	instanceVariableNames: 'rows columns table cells'
	package: 'SketchCode-Spikes'!

!GridTable methodsFor: 'initialization'!

initialize
	super initialize.

	rows := #( #open #close #lock ).
	columns := #( #open #closed #locked ).
	cells := #().
!

removeColumn: aColumn

	
	(self cellsForColumn: aColumn) do: [ :cell |
		cell asJQuery addClass: 'faded-out'.
		[ cell asJQuery addClass: 'zero-width' ] valueWithTimeout: 200.
		[ cell asJQuery remove ] valueWithTimeout: 1000.
	]
! !

!GridTable methodsFor: 'rendering'!

cellsForColumn: aColumn

	^ cells select: [:cell |  (cell asJQuery attr: 'data-state') = aColumn ]
!

highlightColumn: aColumn

	
	(self cellsForColumn: aColumn) do: [ :cell |
		cell asJQuery addClass: 'highlighted'
	]
!

renderCellForState: aState event: anEvent On: html

	cells add: (html div 
		class: 'span3' ;
		at: 'data-state' put: aState ;
		at: 'data-event' put: anEvent ;
		with: [
			html textarea with: '| tmp | 
Transcript show: ''foo'''.
			html select with: [html option with: 'closed']
		]
	)
!

renderColumnHandleFor: aColumnName on: html

	html ul class: 'dropdown-menu' ; style: 'width: 100%'; with: [
		html li style: 'padding-left: 10px; padding-right: 10px'; with:[
			html button class:'btn btn-default pull-left'; with: '<=>'.
			html button 
			class:'btn btn-danger pull-right' ; 
			with: '(X)' ;
			onClick: [ self removeColumn: aColumnName ].
		].	
	].
!

renderstylesOn: html

html style with: '

		div {transition: opacity 0.2s, width 0.3s, margin 0.3s, background-color 0.3s; }
		.faded-out {
			opacity: 0;
		}
		
		div.highlighted { background-color: #c4e3f3; }
		
		.zero-width { 
			width: 0px;
			margin: 0;
		}
	
		
	'
!

unhighlightColumn: aColumn

	
	(self cellsForColumn: aColumn) do: [ :cell |
		cell asJQuery removeClass: 'highlighted'
	]
! !

!GridTable methodsFor: 'spike interface'!

renderFindingsOn: html

	html p: 'Conclusions:'
!

renderHeadingOn: html
	html h2: 'Rendering a Table from Bootstrap Grid Elements'
!

renderProblemOn: html
	html 
		p: '
			HTML tables are difficult to work with because they adapt to 
			their content automatically, and try to distribute it evenly across
			the width of the display. Here I will explore how bootstrap grid
			elements behave for CSS animation on adding content, reordering
			and removing table elements.
		'
!

renderTestbedOn: html

	html div 
		style: 'border: 1px solid gray;
				border-radius: 5px;
				box-shadow: 10px 10px 5px #888888;				
			   ' ;
		class: 'concept-editor state-machine grid-table-spike'; 
		with: [
			self renderstylesOn: html .
			
			html div class: 'row'; with: [
				html div class: 'span2'; with: [html h5: 'Events \ States' ].
			
			
					
				columns do: [ :state |	
					| cellHeader| 
					
					cellHeader :=
						(html div 
							class: 'span3 dropup' ;
							at: 'data-state' put: state ;
							with: [
								self renderColumnHandleFor: state on: html.
								html h5: state capitalized 
							] ;
							onMouseEnter: [ 
								cellHeader asJQuery addClass: 'open'.
								self highlightColumn: state 
								
							] ;
							onMouseLeave: [ 
								cellHeader asJQuery removeClass: 'open'.
								self unhighlightColumn: state 
							]
						).
					cells add: cellHeader.
				].
				
			].
			
			
			rows do: [ :event |
				html div class: 'row'; with: [

					html div class: 'span2'; with: [html h5: event].
				
					columns do: [ :state |
						self renderCellForState: state event: event On: html
					]
				]
			]
	
		]
! !

Widget subclass: #SpikesCollection
	instanceVariableNames: ''
	package: 'SketchCode-Spikes'!
!SpikesCollection commentStamp!
I am the container of all HTML spikes. I do nothing but aggregating my little spikes into the DOM.!

!SpikesCollection methodsFor: 'rendering'!

renderOn: html

	html div 
		class: 'gui-spikes' ;
		style: '' ;
		with: [
			html h1: 'HTML GUI Spikes'.
			
			TableColumnTransition new renderOn: html.
			
			OutsetWidget new renderOn: html.
			
			Spike allSubclassesDo: [:spike |
				spike new renderOn: html
			]
		].
! !

!SpikesCollection class methodsFor: 'as yet unclassified'!

render
	'#main' asJQuery empty.
	self new appendToJQuery: '#main' asJQuery.
! !

Widget subclass: #TableColumnTransition
	instanceVariableNames: 'table columns'
	package: 'SketchCode-Spikes'!

!TableColumnTransition methodsFor: 'initialization'!

initialize
	super initialize.

	columns := Array new.
	table := nil
! !

!TableColumnTransition methodsFor: 'rendering'!

expandInsertedColumns
	<
		$('.just-inserted').removeClass('just-inserted');
	>
!

insertColumn
	(columns at: 1) do: [ :tdBrush |
		tdBrush asJQuery after: '
		<td>
			<div class="just-inserted table-cell-wrapper">
				<textarea></textarea>
				<select>
					<option>open</select>
					<option>closed</option>
				</select>
			</div>
		</td>'
	].
	
	"
	We need to defer this to a timeout because the DOM will not render before this JS callback has returned.
	And we want the columns to be known with their insered size before we transist to the expanded size.
	"
	[ self expandInsertedColumns ] valueWithTimeout: 0.
!

renderButtonsOn: html

	html button 
		class: 'btn btn-primary' ;
		with: 'Insert Column' ;
		onClick: [ self insertColumn ] .
	
	html button 
		class: 'btn btn-danger pull-right' ;
		with: 'Reset' ;
		onClick: [ self reset ].
!

renderOn: html 
	
	self renderProblemDescriptionOn: html.	
	
	html div 
		style: 'border: 1px solid gray;
				border-radius: 5px;
				box-shadow: 10px 10px 5px #888888;				
			   ' ;
		class: 'concept-editor state-machine'; 
		with: [
			
			self renderStylesOn: html.

			self renderTableOn: html.
			
		
		].


	html br.
	
	self renderButtonsOn: html.
!

renderProblemDescriptionOn: html

	html 
		h2: 'Transitions when using tables' ;
		p: 'Is it feasible to use a HTML table for transitions in inserting columns & rows?'.
		html ul: [
			html li: 'Can we animate to the cell''s inherited with?'.
			html li: 'Can we first slide, then insert?'
		].

		html br.
!

renderStylesOn: html

	html style: '
				div.table-cell-wrapper {
					transition: scale 5s, opacity 5s;

					border:1px solid black;
				}
				
				div.just-inserted { 
					transform: scaleX(0);
					border: 1px solid red;
					opacity: 0;
				}
				
				
				.table-header {position:relative; }
				
				div.column-separator {
					width: 10px;
					background-color: lightblue;
					position:absolute;
					left:0px;
					top: 0px;
					height: 488px;
					opacity: 0.1;
					transition: opacity 0.2s;
				}
				
				.column-separator:hover {opacity: 1;}
			'.
!

renderTableOn: html

	| states events |
	
	states := #(closed open locked).
	events := #(open close lock unlock).
	
	columns := Array new 
		add: Array new ;
		add: Array new ;
		add: Array new ;
		add: Array new ;
		yourself.
	
	table := html table class: 'table table-striped table-condensed table-hover'; with: [
				html thead with: [
					html th with: 'Events \ States'.
					
					states do: [ :stateName |
						html th class: 'table-header'; with: [
							
							html with: stateName.
							html div class: 'column-separator'.
						].
					].
					
					"final separator "
					html th class: 'table-header'; with: [
						html div class: 'column-separator'.
					].
				].
				html tbody with: [
					events do: [ :event |
					
						html tr with: [
							html th with: event.
							
							states withIndexDo: [:state :index|
								(columns at: index) add: (
									html td with: [
										html textarea with: '|foo| 
Transcript show: 1'.
										html select with: [
										html option with: 'open'.
										html option with: 'closed'].
									]
								)
							].
						].
					].
				].
			].
!

reset

	SpikesCollection render
! !

TableColumnTransition subclass: #OutsetWidget
	instanceVariableNames: 'table columns'
	package: 'SketchCode-Spikes'!

!OutsetWidget methodsFor: 'as yet unclassified'!

removeColumn
	

	self rightColCells do: [:td | td asJQuery addClass: 'fading-out'].
	[self rightColCells do: [:td | td asJQuery remove]] valueWithTimeout: 400.
!

renderProblemDescriptionOn: html

	html 
		br ;
		h1: 'Placing a widget around a DOM element' ;
		p: 'We often want to hover a view element and have widget appear around or next to it
			to provide context sensitive controls. Most DOM elements have sizes and postions that are
			hard to determine programmatically, and that might even change as the browser window is resized.
			
			Here we will try to see if we can place a widget inside a table cell (and table column header)
			that will follow the size of its view element.
		' ;
		p: 'Finding Notes: It seems that using code and calculating px coordinates, in combination with 
		    catching window reflow events, may be simplest & most robust. It may be jeryk though - maybe good 
			enough for prototypes, maybe not.' ;
			
		h5: 'Approaches tried:' ;
			
		ul: [
			html 
				li: 'Twitter bootstrap dropdown menus' ;
				li: 'CSS media queries cannot access other elements; only the window.' ;
				li: 'Using a combo of position: relative in the container & position: absolute in the widget
				     inherits properties like "text-align: center" to the widget ' ;
				li: 'Also, some elements (like the table column) are not first-class DOM elements, so querying 
					geometry requires ST/JS code anyway'. 
					
		] ;
		p: 'Looking through Apple pages and jQuery UI, draggables do not seem to leave the original element
				visible, and pop the other elements into place as the sorting progresses. This will be hard to do
				with tables because tables adjust to the width of all content, and stretch to full page width. 
				
				Shrinking columns also is difficult because td elements do not react to width styling 
				(although content can be styled nicely).' ;
		p: '
				
				notes
				- meaningful transitions should show the user where the UIchanged.
				- A grid view may be better for sortable tables.
				- Bootstrap dropdown/dropup seems to work very fine for our needs for contex specific UI / 
				  instruments.
		'.
			
		
			
			
			
		html br.
!

renderStylesOn: html


"anchor'; with: [
								html div class: 'outset-widget'; with: [
									html button class:'btn btn-
"

	html style: '
			.anchor { position: relative ;}
			.outset-widget { 
				/* Text alignment bled into this child element, not good for widgets */
				text-align: left;
				border: 2px solid lightblue;
				border-radius: 5px;
				position: absolute;
				width: 286px;
				height: 60px;
				top: -60px; 
				left:-6px;
				
				}
			
			
			
			td.info { background-color: #c4e3f3 !!important; }
			td, th {text-align:center !!important;}	
			
			.dropup .dropdown-menu { 
				transition: opacity 0.3s;  
			}
			
			.dropup.open.faded-out .dropdown-menu{
				opacity: 0;
			}

			.dropup.open .dropdown-menu{
				opacity: 1;
			}
			
			td, th {transition: background-color 0.3s, opacity 0.3s, width 0.3s;  }

			td * {transition: background-color 0.3s, opacity 0.3s, width 0.3s;  }
			th * {transition: background-color 0.3s, opacity 0.3s, width 0.3s;  }

			th.handled, td.handled {
				background-color: rgb(232, 239, 247) !!important;
			}
						
			.fading-out {
				opacity: 0;
			}
					
			'.
!

renderTableOn: html

	| states events columnHandle |
	
	states := #(closed open locked).
	events := #(open close lock unlock).
	
	columns := Array new 
		add: Array new ;
		add: Array new ;
		add: Array new ;
		add: Array new ;
		add: Array new ;
		yourself.
	
	
	table := html table class: 'table table table-striped table-hover table-condensed'; with: [
				html thead with: [
					html th with: 'Events \ States'.
					
					states withIndexDo: [ :stateName :index |
						columnHandle := html th 
							class: 'dropup' ;
							onMouseEnter: [ 
								columnHandle asJQuery addClass: 'open faded-out'.
								[ columnHandle asJQuery removeClass:'faded-out' ] fork.
								self rightColCells do: [:td | td asJQuery addClass: 'handled'].
								table asJQuery removeClass:'table-striped table-hover'.
									
							] ;
							onMouseLeave: [ 
								columnHandle asJQuery addClass: 'faded-out'.
								[ columnHandle asJQuery removeClass:'open' ] valueWithTimeout: 300.
								table asJQuery addClass:'table-striped table-hover'.
								self rightColCells do: [:td | td asJQuery removeClass: 'handled'].
							] ;
							with: [
							html with: stateName.
							
							html ul class: 'dropdown-menu' ; style: 'width: 100%'; with: [
								html li style: 'padding-left: 10px; padding-right: 10px'; with:[
									html button class:'btn btn-default pull-left'; with: '<=>'.
									html button 
										class:'btn btn-danger pull-right' ; 
										with: '(X)' ;
										onClick: [ self removeColumn ].
								].	
							].
							
							" Home grown anchor thingy"
							
							"html div class: 'anchor'; with: [
								html div class: 'outset-widget'; with: [
									html button class:'btn btn-default'; with: '<=>'.
									html button class:'btn btn-danger pull-right'; with: '(X)'.
									
								]."
								" thus should not push the widget!!" 
								
								
								"html with: stateName."
							"]."
							
							
							
							
						].
						(columns at: index) add: columnHandle.
					].
				].
				html tbody with: [
					events do: [ :event |
					
						html tr with: [
							html th with: event.
							
							states withIndexDo: [:state :index| 
							
								|tdInfoClass |
							
						
								state = 'open - disabled this if clause '  
									ifTrue: [ tdInfoClass := 'info' ]
									ifFalse: [tdInfoClass := '' ].
							
								(columns at: index) add: (
									html td class: tdInfoClass ; with: [ 
											
										
										html textarea with: '|foo| 
Transcript show: 1'.
										html select with: [
										html option with: 'open'.
										html option with: 'closed'].
									]
								)
							].
						].
					].
				].
			].
!

rightColCells

	"just the cells in the right most column"
	^ Array new 
		add: ((columns at:3) at: 1) ;
		add: ((columns at:3) at: 2) ;
		add: ((columns at:3) at: 3) ;
		add: ((columns at:3) at: 4) ;
		add: ((columns at:3) at: 5) ;
		yourself
! !

