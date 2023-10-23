# Cooper's Coffee Challenge Game

[Click here to play](https://toroloffredo.github.io/Cooper-coffee-challenge/)

## Table of Contents

- [Description](#description)
- [Design](#design)
- [Project Requirements](#mvp)
- [Version History](#version-history)
  - [Version 1.0.0](#version-100-mvp)
  - [Version 1.1.1](#version-111)
- [Future Improvements](#future-improvements)
- [Data Structure](#data-structure)
- [States and Transitions](#states-and-transitions)
- [Links](#links)

## Description

The purpose of this project is to create a browser-based game using HTML, CSS, vanilla JavaScript, DOM manipulation, and Object-Oriented Programming (OOP) for my first bootcamp project.

The game was developed based on the 90's TV hit Twin Peaks created by David Lynch and Mark Frost.

## Design  

In shaping the game's design, I drew from a retro pixel art aesthetic. I meticulously crafted all game characters, in the charming pixelated style. The backgrounds, sourced online, were also pixelated for visual coherence.  

Additionally, I created responsive, retro-styled buttons from scratch, providing intuitive hover and click interactions. This design combines the charm of retro pixel art with modern usability, enhancing the overall player experience.

## MVP

The Minimum Viable Product (MVP) requirements of the project, to be achieved within a week were as follow:

- Render a game in a browser.

- Have logic for winning and/or losing and show feedback to the player.

- Game must have logic that allows the player to win or lose.

- Game code must be organized in separate files for HTML, CSS, and JavaScript.

- Use plain JavaScript for DOM manipulation.

- Game entities and elements must be organized using classes and OOP.

- Have a repo on GitHub.

- Have at least one (1) commit per day that you worked on.

- Game deployed online using GitHub Pages so anyone can play it.

- Code should follow the principles of KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself).

## Version History

### Version 1.0.0 (MVP)

Full MVP requirements met, but many features remain in the backlog:

- High score - top 5.
- Speed increase over time.
- Music and sound.
- Two to tree different enemies spawned at random intervals.
- Mobile friendly version.

### Version 1.1.1

Several gameplay tweaks and bug fixes

- Fixed player movement speed to increase dificulty slightly.
- Fixed projectile being shot in rapid succession when the space bar was holded down.
- Added version number to splash screen.
- Added High Score to Game Over screen.
- Fixed issue were lives were not being deducted whenever the enemy reached the left edge of the game screen.
- Changed the size of the assets to fit game screen better.
- Removed/commented out several console logs.

### Future Improvements

- Add assets so several different iterations of enemies appear on the screen.
- Add sound effects for shooting, collision, game start and game over.
- Add music.
- Add top 5 highscores to game over screen with player initials.
- Mobile friendly version with touchcreen buttons instead of key presses.

## Data structure

Classes:
Game  
Player  
Projectiles  
Obstacle

Methods:  
Start  
Instructions  
gameLoop
shooter  
update  
move  
updateProjecties  
updatePosition  
didPlayerCollide  
destroy  
create  
didProjectileCollide

## States and Transitions

Start Screen
Instructions Screen
Game Screen
Game Over Screen

## Links

- [LinkedIn Profile](https://linkedin.com/in/jaime-toro-loffredo)
- [Github repository Link](https://github.com/toroloffredo/Cooper-coffee-challenge)
- [Deployment Link](https://toroloffredo.github.io/Cooper-coffee-challenge/)
- [Trello Link](https://trello.com/invite/b/Er37E60R/ATTI19e5c6130d8da426d8cc89b2a46a43e435169A66/ccc-board)
- [Slides Link](https://docs.google.com/presentation/d/1fD7KHiSTRlcmvFnGGGiVWKYrFFJM3DlRQ2RYGgaknLA/edit?usp=sharing)
