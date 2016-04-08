[npm-badge]: https://img.shields.io/npm/v/sails-hook-bunyanlog.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sails-hook-bunyanlog
[travis-badge]: https://img.shields.io/travis/Dreamscapes/sails-hook-bunyanlog.svg?style=flat-square
[travis-url]: https://travis-ci.org/Dreamscapes/sails-hook-bunyanlog
[coveralls-badge]: https://img.shields.io/coveralls/Dreamscapes/sails-hook-bunyanlog.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/Dreamscapes/sails-hook-bunyanlog
[node-badge]: https://img.shields.io/node/v/sails-hook-bunyanlog.svg?style=flat-square
[make-badge]: https://img.shields.io/badge/built%20with-GNU%20Make-brightgreen.svg?style=flat-square
[es-badge]: https://img.shields.io/badge/ECMA-2015-f0db4f.svg?style=flat-square
[bunyan-url]: https://github.com/trentm/node-bunyan

# sails-hook-bunyanlog

[![NPM Version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coveralls-badge]][coveralls-url]
![Runs on Node][node-badge]
![Built with GNU Make][make-badge]
![Uses ECMAScript 2015][es-badge]

> Replace the built-in Sails.js logger with Bunyan

## Description

This hook allows you to use [Bunyan][bunyan-url] with your Sails.js project. It's a drop-in, API-compatible replacement for Sails' built-in Captain's Log, so you do not need to rewrite all your logging code in order to make use of Bunyan.

## Usage

`sails.log` in now an object which is obtained by calling `bunyan.createLogger()`. Your *log.js* config file now becomes a bunyan-compatible config file that is passed as-is to the above method. This is the only thing you might have to update after installing this hook (because bunyan has different log levels than Captain's Log).

Also, if you need it, you can access the original `bunyan` module at `sails.hooks.logger.bunyan`.

## Installation

Just add this npm module into your Sails' *package.json*:

`$ npm install --save sails-hook-bunyanlog`

## License

This software is licensed under the **BSD-3-Clause License**. See the [LICENSE](LICENSE) file for more information.
