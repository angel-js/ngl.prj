{{ name }}
====

{{ description }}

Setup
-----

    git clone <path/to/{{ name }}>
    cd {{ name }}
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
