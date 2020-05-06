const fs = require( 'fs' )

const tempfile = require( 'tempfile' ) // store downloaded/converted images
const jimp = require( 'jimp' ) // convert jpg -> png
const looksSame = require( 'looks-same' ) // compare png images

module.exports = async function looksSamePlus ( img1, img2, opts, callback ) {
  return new Promise( async function ( resolve, reject ) {
    if ( typeof opts !== 'object' ) {
      callback = opts
      opts = undefined
    }

    const t1 = await getImage( img1 )
    const t2 = await getImage( img2 )

    if ( opts ) {
      looksSame( t1, t2, opts, done )
    } else {
      looksSame( t1, t2, done )
    }

    function done ( err, r ) {
      if ( callback ) return callback( err, r )
      if ( err ) return reject( err )
      resolve( r )
    }
  } )
}

async function getImage ( pathname ) {
  return new Promise( function ( resolve, reject ) {
    jimp.read( pathname ) // accepts local path or url
    .then( function ( img ) {
      // save as/convert to temp png file (even if it already is..)
      const dest = tempfile( '.png' )
      img.write( dest, function ( err ) {
        if ( err ) return reject( err )
        resolve( dest )
      } )
    } )
    .catch( function ( err ) {
      reject( err )
    } )
  } )
}
