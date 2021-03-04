# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2021-02-21

### Removed

-   Removed Angular compiler options from `tsconfig.json`
-   Don't run `ngcc`.

## [2.1.2] - 2021-02-20

### Fixed

-   Added missing args to `runNgc` function.

## [2.1.1] - 2021-02-20

### Fixed

-   Run `ngc` once befor watching in dev mode.

## [2.1.0] - 2021-02-20

### Added

-   Run `ngcc` before running `ngc`

## [2.0.1] - 2021-02-20

### Fixed

-   Changed variable name in `transform` section.

## [2.0.0] - 2021-02-20

### Added

-   Added code optimizations with `@angular-devkit/build-optimizer`.

### Changed

-   `@angular-devkit/build-optimizer` is a peer dependency.

## [1.3.0] - 2021-02-15

### Added

-   Added base `mount` option to `snowpack.config.js`
-   Added `snowpack` as a peer dependency to `package.json`

## [1.1.0] - 2021-01-15

### Added

-   Added base `tsconfig.json`
-   Added base `snowpack.config.js`

## [1.0.0] - 2020-12-4

### Changed

-   The user is now responsible for running `ngcc` before running `snowpack dev`.
-   `ngc` arguments are now passed through the `args` property.

## [0.0.8] - 2020-12-2

### Changed

-   Fixed `web_modules` install process.

## [0.0.5] - 2020-12-2

### Changed

-   Added missing `fs-extra` to dependencies.

## [0.0.4] - 2020-12-2

### Added

-   Move installed `web_modules` to `.cache` folder.

## [0.0.3] - 2020-12-2

### Added

-   Run `snowpack install` after running `ngcc` to update `web_modules`.

## [0.0.2] - 2020-11-30

### Changed

-   Made `ngc` run once before going to watch mode.

## [0.0.1] - 2020-11-30

### Added

-   Basic Angular support for Snowpack.
