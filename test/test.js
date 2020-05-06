const lsp = require( '../src/main.js' )

const path = require( 'path' )
const test = require( 'tape' )

test( 'compare similar local images', async function ( t ) {
  t.plan( 1 )

  const r = await lsp(
    path.join( __dirname, 'stage', 'AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s176-c-k-c0x00ffffff-no-rj-mo' ),
    path.join( __dirname, 'stage', 'AGF-l79FVckie4j9WT-4cEW6iu3gPd4GivQf_XNSWg=s176-c-k-c0x00ffffff-no-rj-mo' )
  )

  t.equal( r.equal, true, 'images similar OK' )
} )

test( 'compare similar internet images', async function ( t ) {
  t.plan( 1 )

  const r = await lsp(
    'https://yt3.ggpht.com/a/AGF-l79FVckie4j9WT-4cEW6iu3gPd4GivQf_XNSWg=s176-c-k-c0x00ffffff-no-rj-mo',
    'https://yt3.ggpht.com/a/AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s176-c-k-c0x00ffffff-no-rj-mo'
  )

  t.equal( r.equal, true, 'images similar OK' )
} )

test( 'compare dissimilar local images', async function ( t ) {
  t.plan( 1 )

  const r = await lsp(
    path.join( __dirname, 'stage', 'AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s176-c-k-c0x00ffffff-no-rj-mo' ),
    path.join( __dirname, 'stage', 'AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s88-c-k-c0x00ffffff-no-rj-mo' )
  )

  t.equal( r.equal, false, 'images dissimilar OK' )
} )

test( 'compare dissimilar internet images', async function ( t ) {
  t.plan( 1 )

  const r = await lsp(
    'https://yt3.ggpht.com/a/AGF-l79FVckie4j9WT-4cEW6iu3gPd4GivQf_XNSWg=s176-c-k-c0x00ffffff-no-rj-mo',
    'https://yt3.ggpht.com/a/AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s88-c-k-c0x00ffffff-no-rj-mo'
  )

  t.equal( r.equal, false, 'images dissimilar OK' )
} )

test( 'node callbacks: compare similar local images', function ( t ) {
  t.plan( 1 )

  lsp(
    path.join( __dirname, 'stage', 'AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s176-c-k-c0x00ffffff-no-rj-mo' ),
    path.join( __dirname, 'stage', 'AGF-l79FVckie4j9WT-4cEW6iu3gPd4GivQf_XNSWg=s176-c-k-c0x00ffffff-no-rj-mo' ),
    function ( err, r ) {
      t.equal( r.equal, true, 'images similar OK' )
    }
  )

} )

test( 'node callbacks: compare similar internet images', function ( t ) {
  t.plan( 1 )

  lsp(
    'https://yt3.ggpht.com/a/AGF-l79FVckie4j9WT-4cEW6iu3gPd4GivQf_XNSWg=s176-c-k-c0x00ffffff-no-rj-mo',
    'https://yt3.ggpht.com/a/AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s176-c-k-c0x00ffffff-no-rj-mo',
    function ( err, r ) {
      t.equal( r.equal, true, 'images similar OK' )
    }
  )
} )

test( 'node callbacks: compare dissimilar local images', function ( t ) {
  t.plan( 1 )

  lsp(
    path.join( __dirname, 'stage', 'AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s176-c-k-c0x00ffffff-no-rj-mo' ),
    path.join( __dirname, 'stage', 'AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s88-c-k-c0x00ffffff-no-rj-mo' ),
    function ( err, r ) {
      t.equal( r.equal, false, 'images dissimilar OK' )
    }
  )
} )

test( 'node callbacks: compare dissimilar internet images', function ( t ) {
  t.plan( 1 )

  lsp(
    'https://yt3.ggpht.com/a/AGF-l79FVckie4j9WT-4cEW6iu3gPd4GivQf_XNSWg=s176-c-k-c0x00ffffff-no-rj-mo',
    'https://yt3.ggpht.com/a/AATXAJzlZzr16izsGHBCHIkO3H7n-UiHyZPCJFEPiQ=s88-c-k-c0x00ffffff-no-rj-mo',
    function ( err, r ) {
      t.equal( r.equal, false, 'images dissimilar OK' )
    }
  )
} )
