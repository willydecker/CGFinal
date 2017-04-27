# CGFinal
you'll need all the files in this folder to run the program

run mySpriteFinal.html in Firefox

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`

problems:
*these mice all have to come from one source so they have an index.
	
*without an index, I have no way to click on one and call THAT one

*as of now, the game just deletes the mice in linear order because 
	the easelJS creates an index of every obj in the container, but
	there isnt a way to actually call off of that index becuase its not
	ours

*I tried to solve this by making a class, but I failed. 
	(see mySpriteFinalClass)

*I also tried to solve this by making a loop make the mice into an
	array and that almost works except for the handleTick gets all 
	screwed up. I would have the same problem in the class project if
	I could get it that far.
	(see mySpriteFinalLOOP)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Once I find a way to actaully call the mouse I clicked on, all there is to
do is to add the animation of a crushed mouse to the handleClick function.
