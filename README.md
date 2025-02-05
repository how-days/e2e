# Tests End to End front-intranet with Playwirght

![Test](https://github.com/vitalets/playwright-bdd/workflows/test/badge.svg)

A starter repo for writing E2E tests based on Playwright using Typescript.

This repository is based on the [Playwirght-BDD](https://vitalets.github.io/playwright-bdd/).

## To run your tests

Copy .env.dist to .env and modify the values to match your environment

`yarn test` runs all tests if PLAYWRIGHT_TAGS value in .env file is empty

If you want to run a single feature, modify PLAYWRIGHT_TAGS value in .env file

Example : `PLAYWRIGHT_TAGS=@connexion` then run `yarn test`

`yarn debug` is the same as `yarn test` but with a headed brower

## Run with docker

`xhost +si:localuser:root` to allow root to connect to your X server

`yarn xdocker` to run the tests in a docker container with a headed browser streaming to your X server

`yarn test` and `yarn debug` should work fine on a linux machine