# Project Chameleon

Common UI, and Graphic components for Firefox Desktop, Android and More. 

## WORK IN PROGRESS

All components of Chameleon are currently WIP. This includes the overall site build process. The following instructions are correct as of 5/9/14


## DEPENDENCIES

Node, Bower, Grunt

## Installation

Clone or Download the repo to get started


### Installation

- `cd` into the Project-DFA repo
- `npm install`
- `bower install`
- `grunt build`
- `grunt watch`
- open the `dist/index.html` in your favorite browser that is also Firefox 29.
- Files in the src folder are editable. Editing Sass and Jade (HTML templates) in src will automatically update the `dist` folder.
- If you want to add new image assets, place them in `src/images` then `grunt build` again to move them (i need to work on the gruntfile)