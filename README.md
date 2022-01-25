## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Problem statement

WORDLE GAME

* There is a list of 5-letter words. When game started, we pick random word from the list and player should guess it
* Player has 6 attempts to guess the word
* After each guess, we have few cases to handle:
  - Word wasn't found in the list. Then we should show the message about it to user (alert will be enough)
  - User guessed the word. Show congratulation message
  - Word exists in the list, but it's not the one, player is looking for. Then we need to check every letter. If player guessed leter and it's position - color it with green, if player guessed only letter, but no position - color it with yellow. If word doesn't contain this letter - color it with grey 
