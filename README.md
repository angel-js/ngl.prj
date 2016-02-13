ngl.prj
=======

angel / angular 1.x project generator

**Featuring:**

  * `npm scripts`
  * `gulp`
  * `eslint`
  * `npm` modules

Setup
-----

### Install `scaffold`

    npm -g pfraces/scaffold
    mkdir ~/.scaffold

### Clone **ngl.prj** into `~/.scaffold`

    cd ~/.scaffold
    git clone https://github.com/angel-js/ngl.prj

Usage
-----

### Create a new project

    cd ~/dev
    scaffold ngl.prj myApp

**scaffold** will create the project skeleton at `/dev/myApp/` using the
default configuration

To override the defaults use `scaffold` passing your values through parameters

    scaffold <generator> <prj-name> [<parameters...>]

For example, the previous scaffold command can be replaced with:

    scaffold ngl.prj myApp --description 'Awesome app for making cool stuff'

**ngl.prj** uses the following parameters

  * **name** _(defaults to **<prj-name>**)_
  * **description** _(defaults to `"Project generated using [ngl.prj](https://github.com/angel-js/ngl.prj)"`)_
  * **version** _(defaults to `0.1.0`)_
  * **repository** _(defaults to `""`)_
  * **license** _(defaults to `""`)_

_You can see all the paramaters used and where they are by `grep`ing the `root`
directory of **ngl.prj**:_

    grep -Rin '{{ [^}].* }}' ~/.scaffold/ngl.prj/root/

### Setup the project

    cd myApp
    npm run setup

Tasks
-----

    npm run <task>

  * **setup:** install all required dependencies
  * **lint:** static analysis of JavaScript sources and unit tests
  * **test:** run available unit tests
  * **build:** generate a `dist/` directory with the compiled app
  * **server:** launch a server providing the app at `dist/`
  * **live:** `build` and `server`

### Tips about `npm scripts`

Use `--silent` flag for a cleaner log

    npm run --silent <task>

Create an alias using the flag by default

    alias ngl='npm run --silent'
    ngl live
