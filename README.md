# Highspot Coding Exercise - *Elder Scrolls Legends Card Browser*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It requires Node to run.

# To view the app:
In the project directory run:
* `npm install` to install required dependencies.
* `npm run bild` to build a production-ready app.
* `serve -s build` to serve the new build.

Once this is done, visit the link copied to your clipboard (or one of the two shown in the terminal) to view the app.

Enjoy! :)

## Development considerations:
* Search is triggered on submission, not as the search term changes. There is no results preview.
  * Search hints are most useful when listing links to switch context, or additive search terms, neither of which are the case here.
  * Loading each card is an involved process, and the API is open-source, so requests should be kept to a minimum.
* Images come in various sizes, so layout centers them in the background to focus on the card image while minimizing visual differences. Multiple background layers balance text legibility and image visibility. 
* Cards are not the same height as one another in mobile view. The reasons are as follows:
  1. Minimizing unnecessary vertical space for easier scrolling.
  2. Cards look more attractive without excessive white space.
* Cards are the same height in all other views, and the information panels in each card line up. The reasons are as follows:
  1. When seen in a grid, parallel lines are more visually appealing.
  2. Negative space in this view aids comprehension, as several cards are shown at once.
* In grid views, the cards are aligned to show 'missing' cards, instead of being centered. 
  * This is a result of grid positioning and arguably more comprehensible in most views.
  * It also allows for infinite-scroll to add cards to end of row without last row moving around on the screen.
  * It makes the code easier to maintain by working with the grid, instead of against.
