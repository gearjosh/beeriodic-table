# Bunsenbrewer Beeriodic Table

#### A program to help track kegs for my friend's bar, November 16, 2018

#### By Josh Gearheart

## Description

This is a rebuild of a previous site I made in Angular.  This time, however, I'm designing it to fit more closely with how his actual bar works.  Some of the previous  elements have been changed (ABV became Price per Growler, for instance), but the spirit is the same as the original.

At this point, you can add a new keg and remove a keg.  Soon you will also be able to edit kegs.

It looks like this:

![beeriodic table app](https://raw.githubusercontent.com/gearjosh/beeriodic-table/master/src/img/beeriodic-table-6-16.png)

This is the actual menu from [the actual bar](http://www.bunsenbrewer.com/) the app is based on:

![beeriodic table chalkboard menu](https://raw.githubusercontent.com/gearjosh/beeriodic-table/master/src/img/real-beeriodic-table.jpg)

Designing in React feels a lot more elegant than design in Angular.  I feel like I'm only building the components I absolutely need, and they're not bloated with _any_ extra code.  I love it.  It feels more free, and spinning up new components is a breeze.  Routing feels more elegant as well, with fewer pieces needed to link about.

## Planning

Below is the most up-to-date documentation of my planned components.  This is a slight change from my original idea,  in which BeeriodicTable was nested inside each route.  In this updated version, it lives directly in App, and the router only routes to admin options such as adding or editing kegs.

I also ended up removing a couple of inputs that asked for a keg number.  It turned out it was more elegant to just make that happen as the result of a click function.

![component structure drawing 2](https://raw.githubusercontent.com/gearjosh/beeriodic-table/master/src/img/component-map-2.jpg)

Here was my original plan for structuring my components:

![component structure drawing](https://raw.githubusercontent.com/gearjosh/beeriodic-table/master/src/img/component-structure.jpg)

### Specs

## Setup/Installation Requirements

### Pre-Install

You must have Node.js an installed on your machine. If not, follow these pre-instructions:

****

#### **Node.js Install**

##### _For OSX_

- First, install Homebrew if it is not installed on your computer already.
  - To install Homebrew, enter the following in order in terminal:
  - `$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  - `$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile`

##### _For other operating systems_

Head on over to the [Node website](https://nodejs.org/en/download/) to download and install the appropriate installer for your computer.

##### _Install Node.js_

Now install Node.js like this in terminal: `$ brew install node`.

****

#### **Windows Users**

If you have a windows machine, you may also need a terminal program.  If so, download and install Git BASH at msysgit.github.io, and open it before continuing.

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
- No known bugs. But... it's still a work in progress, so it doesn't yet have full CRUD functionality yet, only the CR_D.  I still need to build out the edit functionality.

## Support and contact details
- For questions or support open an issue right here in this repo!

## Technologies Used
- This uses React, Webpack, Javascript, npm, and more!

### License
This software is licensed under GNU GPLv3.
