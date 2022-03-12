## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
![framework picture](/assets/frameworks.jpg)"Frame picture. General idea of what I'm doing"
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
Elements needed: Button, Two IMGs, Divs for the guess tally

1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
Button for the Guess
IMG for the picture of normal 'cup' and 'correct cup'
Divs to 'keep score'

1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
Start with grabbing all of the class ids set up. button-left button-center button-right. left-container, center container, right-container. correct div and total div. The incorrect will just be total minus the wins.
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
Button click, random placement of the ball. Reveal of correct selection. 
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)






| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo|        2 |
| See three cups, with a button beneath each of them.                               |        2 |

| Events . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On clicking a cup button, the total number of guesses increment                         |        2 |
| On clicking the correct cup button, the total number of correct guesses increment                       |        2 |
| On clicking the incorrect cup button, the number of incorrect guesses increments                       |        2 |
| On click, see the correct cup's image change, clearing out the previous correct guess style|2|

| Functions                                                              |             |
| :----------------------------------------------------------------------------------- | ----------: |
| IMPURE: `resetStyles()` | 2 |
| IMPURE: `getRandomItem(arr) : returns random item from given array` | 2 |
| IMPURE: `handleGuess(userGuess, correctSpot)` | 4 |