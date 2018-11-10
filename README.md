# Bunsenbrewer Beeriodic Table

#### A program to help track kegs for my friend's bar, November 9, 2018

#### By Josh Gearheart

## Description

This is a rebuild of a previous site I made in Angular.  This time, however, I'm designing it to fit more closely with how his actual bar works.  Some of the previous  elements have been changed (ABV became Price per Growler, for instance), but the spirit is the same as the original.

Designing in React feels a lot more elegant than design in Angular.  I feel like I'm only building the components I absolutely need, and they're not bloated with _any_ extra code.  I love it.  It feels more free, and spinning up new components is a breeze.  Routing feels more elegant as well, with fewer pieces needed to link about.

## Planning

Here was my plan for structuring my components:

![component structure drawing](https://raw.githubusercontent.com/gearjosh/beeriodic-table/master/src/img/component-structure.jpg)

### Specs

## Setup/Installation Requirements

### Pre-Install

You must have Node.js installed on your machine. If not, follow these pre-instructions:

#### _For OSX_

- First, install Homebrew if it is not installed on your computer already.
  - To install Homebrew, enter the following in order in terminal:
  - `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - `$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`

#### _For other operating systems_

Head on over to the [Node website](https://nodejs.org/en/download/) to download and install the appropriate installer for your computer.

#### _Install Node.js_

Now install Node.js like this in terminal: `$ brew install node`.

****

### Install

- Open terminal and enter `$ cd Desktop` (or your preferred destination).
- Then enter `$ git clone https://github.com/gearjosh/beeriodic-table.git`.
- Enter `$ cd beeriodic-table`.
- Enter `$ npm install`
- Finally, enter `$ npm run start`.

## Notes
- It's hard to tell how to form the components in my beeriodic cells.  Because the grid will take in the master keg list, it could just populate the entire grid within a single component.  And since the grid will show on every screen, it's not like I'll be reusing that code outside the component itself...

## Known Bugs
- No known bugs.

## Support and contact details
- For questions or support open an issue right here in this repo!

## Technologies Used
- This uses React, Webpack, Javascript, npm, and more!

### License
This software is licensed under GNU GPLv3.
