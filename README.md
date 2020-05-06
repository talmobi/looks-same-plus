[![npm](https://img.shields.io/npm/v/looks-same-plus.svg?maxAge=3600&style=flat-square)](https://www.npmjs.com/package/looks-same-plus)
[![npm](https://img.shields.io/npm/l/looks-same-plus.svg?maxAge=3600&style=flat-square)](https://github.com/talmobi/looks-same-plus/blob/master/LICENSE)

#  looks-same-plus
[looks-same](https://github.com/gemini-testing/looks-same) with automatic url downloading, jpg->png conversion and promises

## Easy to use

#### Module usage
```javascript
  const lsp = require( 'looks-same-plus' )
  const opts = undefined // e.g. { threshold: 5 }, see [looks-same](https://github.com/gemini-testing/looks-same) docs.
  const callback = undefined // node style callback support

  const r = await lsp(
    'https://yt3.ggpht.com/a/AGF-l79FVckie4j9WT-4cEW6iu3gPd4GivQf_XNSWg=s176-c-k-c0x00ffffff-no-rj-mo',
    'https://yt3.ggpht.com/a/AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s176-c-k-c0x00ffffff-no-rj-mo',
    opts,
    callback
  )

  // see [looks-same](https://github.com/gemini-testing/looks-same) docs for return value information
  r.equal && console.log( 'they are similar' ) || console.log( 'not similar' )
```

## About
Tiny wrapper around looks-same to for a simple common use-case.

## Why
With plain looks-same we have to convert JPG to PNG and download
url's to local disk before we can compare them. This module
handles those steps for you. +Promise support

## For who?
-

## How
Using jimp we download and/or convert images to PNG so that
looks-same can process and compare them for us.

## Similar
[looks-same](https://github.com/gemini-testing/looks-same)

[pixelmatch](https://github.com/mapbox/pixelmatch)

## Test
tests against internet and local images with and without
promises ( node style callbacks ).

```
npm test
```

