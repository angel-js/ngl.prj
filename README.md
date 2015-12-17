ng.prj
======

AngularJS project starter

Usage
-----

Install `scaffold`

    npm -g pfraces/scaffold

Clone this repo in `~/.scaffold` directory

    mkdir ~/.scaffold
    cd ~/.scaffold
    git clone https://github.com/pfraces/ng.prj

Go to the parent directory where you want to create your new project and
initialize it

    cd ~/dev
    scaffold ng.prj myAngularApp
    cd myAngularApp
    npm install

The project comes with a build system and a default application as an example
of code organization

Tasks
-----

During development, the following tasks are available

  * **lint:** static analysis of JavaScript sources under `src/` and unit tests
    under `test/`
  * **test:** run available unit tests under `test/`
  * **build:** generate app files under `dist/`
  * **serve:** launch a server providing the app at `dist/`

Use `npm run <task>` to run the tasks

    npm run build && npm run serve

Use `--silent` flag for a cleaner log

    npm run --silent test

An alias comes handy here

    alias prj='npm run --silent'
    prj build && prj serve
