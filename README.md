Lessons learnt from making website:

1. To create a custom icon for the content of a ::before or ::after, use url() for a downloaded image of the icon or use the unicode of the icon form websites like Font Awesome, but put a \ before the unicode and inside everything "".

2. Margin: auto; only works on elements with a display value of block.

3. Use "submit" as the event value of an event listener instead of "click", since you can press enter to submit the form. Use the event listener on the form element, not the submit button.

4. Use autocomplete="of" attribute for inputs to disable them from showing popups when clicked to autocomplete the input.

5. Use parentNode.prepend(childNode) to append an element as the first child to a parent element.

6. Use Array.from() when using .forEach() to loop through a node list and add event listeners.