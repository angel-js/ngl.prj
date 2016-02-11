ngl.prj
=======

angel / angular 1.x project starter

Usage
-----

Install `scaffold`

    npm -g pfraces/scaffold

Clone this repo in `~/.scaffold` directory

    mkdir ~/.scaffold
    cd ~/.scaffold
    git clone https://github.com/angel-js/ngl.prj

Go to the parent directory where you want to create your new project and
initialize it

    cd ~/dev
    scaffold ngl.prj myApp
    cd myApp
    npm install

The project comes with a build system and a default application as an example
of code organization

Tasks
-----

  * **setup:** install all required dependencies
  * **lint:** static analysis of JavaScript sources and unit tests
  * **test:** run available unit tests
  * **build:** generate a `dist/` directory with the compiled app
  * **server:** launch a server providing the app at `dist/`
  * **live:** `build` and `server`

Use `npm run <task>` to run the tasks

    npm run build

Use `--silent` flag for a cleaner log

    npm run --silent test

An alias comes handy here

    alias ngl='npm run --silent'
    ngl live
