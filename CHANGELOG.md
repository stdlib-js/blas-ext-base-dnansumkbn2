# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-12-15)

<section class="features">

### Features

-   [`b7ebe14`](https://github.com/stdlib-js/stdlib/commit/b7ebe14a38ddc3ccce67834db16835f420431494) - add `blas/ext/base/wasm/dnansumkbn2` [(#5735)](https://github.com/stdlib-js/stdlib/pull/5735)
-   [`dc4b7b1`](https://github.com/stdlib-js/stdlib/commit/dc4b7b138a07ebbc5250fd7580ca758db7803875) - add C `ndarray` API and refactor `blas/ext/base/dnansumkbn2` [(#3000)](https://github.com/stdlib-js/stdlib/pull/3000)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`38a7900`](https://github.com/stdlib-js/stdlib/commit/38a7900a08f364a782e3cc6d0f712dba101983d7) - use correct return value
-   [`bf4258f`](https://github.com/stdlib-js/stdlib/commit/bf4258f3cff7b37d00386b15df156305553631ab) - update implementation to preserve signed zeros

</section>

<!-- /.bug-fixes -->

<section class="issues">

### Closed Issues

A total of 3 issues were closed in this release:

[#3074](https://github.com/stdlib-js/stdlib/issues/3074), [#5732](https://github.com/stdlib-js/stdlib/issues/5732), [#7645](https://github.com/stdlib-js/stdlib/issues/7645)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`b4642cd`](https://github.com/stdlib-js/stdlib/commit/b4642cd82a1263bef638e317f251008053a10308) - **bench:** refactor to use dynamic memory allocation in `blas/ext/base/dnansumkbn2` [(#8935)](https://github.com/stdlib-js/stdlib/pull/8935) _(by Krishna Awasthi)_
-   [`3192ef5`](https://github.com/stdlib-js/stdlib/commit/3192ef5e908c2ac107edf9ac4a4c92bd2997aa67) - **chore:** fix C lint errors [(#7646)](https://github.com/stdlib-js/stdlib/pull/7646) _(by Geo Daoyu)_
-   [`b7ebe14`](https://github.com/stdlib-js/stdlib/commit/b7ebe14a38ddc3ccce67834db16835f420431494) - **feat:** add `blas/ext/base/wasm/dnansumkbn2` [(#5735)](https://github.com/stdlib-js/stdlib/pull/5735) _(by Shabareesh Shetty, Athan Reines, JoyBoy, stdlib-bot)_
-   [`38a7900`](https://github.com/stdlib-js/stdlib/commit/38a7900a08f364a782e3cc6d0f712dba101983d7) - **fix:** use correct return value _(by Athan Reines)_
-   [`bf4258f`](https://github.com/stdlib-js/stdlib/commit/bf4258f3cff7b37d00386b15df156305553631ab) - **fix:** update implementation to preserve signed zeros _(by Athan Reines)_
-   [`9f85b5d`](https://github.com/stdlib-js/stdlib/commit/9f85b5d90cb6fcaf052116cd06aa4a693757f0ec) - **test:** fix description _(by Philipp Burckhardt)_
-   [`81aeefe`](https://github.com/stdlib-js/stdlib/commit/81aeefed3885d8b238875a1d656401b7d3149d10) - **test:** add zeros tests _(by Athan Reines)_
-   [`62364f6`](https://github.com/stdlib-js/stdlib/commit/62364f62ea823a3b52c2ad25660ecd80c71f8f36) - **style:** fix C comment alignment _(by Philipp Burckhardt)_
-   [`fca01a0`](https://github.com/stdlib-js/stdlib/commit/fca01a0a8a63b87834a8beb6a4a698b8c6f7699e) - **test:** achieve 100% test coverage for `blas/ext/base/dnansumkbn2` [(#3105)](https://github.com/stdlib-js/stdlib/pull/3105) _(by Neeraj Pathak)_
-   [`dc4b7b1`](https://github.com/stdlib-js/stdlib/commit/dc4b7b138a07ebbc5250fd7580ca758db7803875) - **feat:** add C `ndarray` API and refactor `blas/ext/base/dnansumkbn2` [(#3000)](https://github.com/stdlib-js/stdlib/pull/3000) _(by Muhammad Haris, Athan Reines, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 8 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Geo Daoyu
-   Krishna Awasthi
-   Muhammad Haris
-   Neeraj Pathak
-   Philipp Burckhardt
-   Prashant Kumar Yadav
-   Shabareesh Shetty

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="commits">

### Commits

<details>

-   [`272ae7a`](https://github.com/stdlib-js/stdlib/commit/272ae7ac5c576c68cfab1b6e304c86407faa20cd) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`659f752`](https://github.com/stdlib-js/stdlib/commit/659f752db18317bf5fc237fdbcad0d74b61e1ed9) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`ceb4943`](https://github.com/stdlib-js/stdlib/commit/ceb494351d42c2505e559a2c8aad9a120c76d0db) - **docs:** remove comments _(by Athan Reines)_
-   [`3080f03`](https://github.com/stdlib-js/stdlib/commit/3080f032a477cbd046b4201d7ffdd407c9d93816) - **chore:** fix by filling arrays with NaNs again _(by Philipp Burckhardt)_
-   [`6246c5d`](https://github.com/stdlib-js/stdlib/commit/6246c5dcbe7163afe809a80ce221a712ea56772d) - **refactor:** update `blas/ext/base/dnansumkbn2` to follow current project conventions _(by Suraj Kumar, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Suraj Kumar

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`df3c9b3`](https://github.com/stdlib-js/stdlib/commit/df3c9b368d8a3dd7dd38f8768deb53c2a780c055) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`cca37d0`](https://github.com/stdlib-js/stdlib/commit/cca37d051d8c0209970fc681353fdb4e4d257a8a) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`42c921a`](https://github.com/stdlib-js/stdlib/commit/42c921ab62b8cdf789a9e76b06b18074e850af5e) - **docs:** resolve C lint errors _(by Athan Reines)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2022-08-29)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2022-07-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2022-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

