Smalltalk createPackage: 'SketchCode-Spikes'!
Widget subclass: #HTMLGUISpikes
	instanceVariableNames: ''
	package: 'SketchCode-Spikes'!
!HTMLGUISpikes commentStamp!
I am the container of all HTML spikes. I do nothing but aggregating my little spikes into the DOM.!

!HTMLGUISpikes methodsFor: 'rendering'!

renderOn: html

	html div 
		class: 'gui-spikes' ;
		style: '' ;
		with: [
			html h1: 'HTML GUI Spikes'.
			
			TableColumnTransition new renderOn: html.
			
			OutsetWidget new renderOn: html.
		].
! !

!HTMLGUISpikes class methodsFor: 'as yet unclassified'!

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

	HTMLGUISpikes render
! !

TableColumnTransition subclass: #OutsetWidget
	instanceVariableNames: 'table columns'
	package: 'SketchCode-Spikes'!

!OutsetWidget methodsFor: 'as yet unclassified'!

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
					
		] .
			
		
			
			
			
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
				
				
		
			'.
!

renderTableOn: html

	| states events columnHandle|
	
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
						columnHandle := html th 
							class: 'dropup' ;
							onMouseEnter: [ 
								columnHandle asJQuery addClass: 'open faded-out'.
								[ columnHandle asJQuery removeClass:'faded-out' ] fork.
							] ;
							onMouseLeave: [ 
								columnHandle asJQuery addClass: 'faded-out'.
								[ columnHandle asJQuery removeClass:'open' ] valueWithTimeout: 300.
							] ;
							with: [
							html with: stateName.
							
							html ul class: 'dropdown-menu' ; style: 'width: 100%'; with: [
								html li style: 'padding-left: 10px; padding-right: 10px'; with:[
									html button class:'btn btn-default pull-left'; with: '<=>'.
									html button class:'btn btn-danger pull-right'; with: '(X)'.
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
					].
				].
				html tbody with: [
					events do: [ :event |
					
						html tr with: [
							html th with: event.
							
							states withIndexDo: [:state :index| 
							
								|tdInfoClass |
							
								state = 'open'  
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
! !

