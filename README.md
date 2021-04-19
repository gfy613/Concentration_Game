### Concentration Game

## Running the application

Download or clone the the application from github. 

Open a terminal and run npm install and then npm start in application folder.

This will open a localhost:3000 in your default browser.

## Instructions

Player 1 starts the game and is allowed to select two cards if they are a match then Player 1 gets a point and another turn. Else it is Player 2's turn. Once all matches have been found the winner is acknowledge cases: Player 1 wins, Player 2 wins, or its a draw. If the players wish to play again they can click the Replay button.

## Technology
This application uses React as its platform and React Bootstrap for its CSS framework. 

## Components

1. App: Contains the entire application. Logic is used to determine if the Board component or Game Over component is used based on the gameOver state variable.
2. Board: Contains the Players, Score and Deck components that are used to play the game. As well as shows who turn it is based on player state variable.
3. Players: Contains the Player 1 and Player 2 names.
4. Score: Shows the score of each player based on the score state variable and index of each player.
5. Deck: Contains the SingleCard component and maps each individual card to that component.
6. SingleCard: Contains the logic for the playing of the game. Uses React bootstrap cards for each of the cards used in the Game. Uses logic to determine which image to use based on if the card has been flipped and if it has been matched. Uses a timeout function to allow the User time to see both cards before being flipped back over or is removed if a match is found. A wait state function is used to not allow players to select more than two cards. 
7. GameOver: Displays the winner of the game or a draw. Allows the user to select if they would like to play again.

## Logic and States

1. Cards: Contains the deck of cards used for the game. The cards are shuffled before each game.
2. Score: Keeps track of each players score and is displayed on the screen.
3. Player: Keeps track of which player's turn it is.
4. GameOver: Determines if the game is being played or if the game is over.
5. FlippedCount: Keeps track of if the card being flipped is the first card or second card.
6. Flip: Used to determine if the Card should show the college logo or not.
7. FirstCard: Contains the information for the first card that was selected. Used to not allow user to select the same card twice in a row and to see if the player's second choice is a match.
8. RemoveCard: Used to determine if a Card should appear on the screen or not. This is based on if a player has found a match.
9. Wait: Is used to ensure a player cannot select more than two cards at a time. 

## Challenges

1. Creating a wait function so that no more than 2 cards could be selected at one time. Solution: Moved the wait state from the single card component to the Deck component.
2. Using college logo pictures as the cards. Solution: After trail and error determined in order to style and use it was best to import each image into the App.js and use the object in the src of the array instead of trying to use the import function or image web link in the image src on the single card component. 

## Future Improvements

1. Allow players to select their names.
