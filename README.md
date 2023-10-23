# To-Do-list   

The project represents a To-Do List application, a simplistic yet robust tool to help users manage their tasks. The interface enables users to add tasks to their list and offers visual feedback once they complete them, with the ability to delete any task as needed.

<em><b>HTML Overview:</b></em>

DOCTYPE: Specifies that the HTML document adheres to the latest web standards.

meta tags: Establishes character encoding and ensures the site is mobile-friendly by setting viewport properties.

link: Incorporates external resources: The Font Awesome library for icons and the project's CSS file.

div: Organizes content into blocks; used here to structure the To-Do list items and input container.

input: Provides an interactive element where users can type in their tasks.

button: A clickable element, triggering the function to add the typed task to the list.

script: Incorporates external JavaScript, which offers the interactive functionality of the To-Do list.


<em><b>CSS Overview:</b></em>

@import: Fetches and incorporates Google Fonts and other external styles.

Universal Selector (*): Resets default styles of all HTML elements for consistency.

body: Sets global font, background gradient, and text color for the entire document.

container, nav: Define layout and styling for the main container and the navigation section of the app.

user-input: Controls the visual appearance and alignment of the user's input section.

input, button: Dictates the aesthetics of the input box and the submit button.

to-do-items, item: Styles the main task display area and individual task items.

i (icon tags): Provides styles to icons (tick and trash) which are added dynamically.

Media Queries: Customizes the design according to varying device sizes, ensuring the app looks crisp and usable on desktops, tablets, and mobiles.


<em><b>JavaScript Overview:</b></em>

Document Methods: The use of getElementsByClassName and getElementById methods allow for DOM manipulation by targeting specific elements.

addEventListener: A pivotal method that listens to specific events, like key presses or clicks, and triggers associated functions.

addItem function: The primary function that dynamically creates and appends new task items to the list.

createElement: Generates new HTML elements, which are used here for the to-do list items and associated icons.

className: Assigns a specific CSS class to a newly created element, ensuring it inherits the associated styles.

innerHTML: Injects content into an HTML element, used here to place the task text into its container.

Event Handling: Various functions respond to events, such as marking a task as complete or deleting a task.

In essence, this To-Do List project showcases a harmonious blend of structural HTML, stylish CSS, and dynamic JavaScript to deliver a seamless user experience. Users can easily input tasks, visually mark them complete, and manage their list effectively, all wrapped in a beautifully gradient-themed interface.
