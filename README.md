angel.prj
=========

angel / angular 1.x project starter

Usage
-----

Install `scaffold`

    npm -g pfraces/scaffold

Clone this repo in `~/.scaffold` directory

    mkdir ~/.scaffold
    cd ~/.scaffold
    git clone https://github.com/angel/angel.prj

Go to the parent directory where you want to create your new project and
initialize it

    cd ~/dev
    scaffold angel.prj myApp
    cd myApp
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
  * **dev:** `build && serve`

Use `npm run <task>` to run the tasks

    npm run build

Use `--silent` flag for a cleaner log

    npm run --silent test

An alias comes handy here

    alias task='npm run --silent'
    task dev
