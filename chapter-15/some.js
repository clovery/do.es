/**
 *
 */
function ArraySome( callbackfn , thisArg ) {
  /* 1. Let O be the result of calling ToObject passing the this value as the argument. */
  var O = Object( this );

  /* 2. Let lenValue be the result of calling the [[Get]] internal method of O with the argument "length". */
  var lenValue = O.length;

  /* 3. Let len be ToUint32(lenValue). */
  var len = Number( lenValue );

  /* 4. If IsCallable(callbackfn) is false, throw a TypeError exception. */
  if ( typeof callbackfn !== 'function' ) {
    throw new TypeError( callbackfn, ' is not a function' );
  }

  /* 5. If thisArg was supplied, let T be thisArg; else let T be undefined. */
  if ( typeof thisArg !== 'undefined' ) {
    var T = thisArg;
  } else {
    var T = 'undefined';
  }

  /* 6. Let k be 0. */
  var k = 0;

  /* 7. Repeat, while k < len */
  while ( k < len ) {
    /* a. Let Pk be ToString(k). */
    var Pk = String( k );

    /* b. Let kPresent be the result of calling the [[HasProperty]] internal method of O with argument Pk. */
    var kPresent = O.hasOwnProperty( Pk );

    /* c. If kPresent is true, then */
    if ( kPresent === true ) {
      /* i. Let kValue be the result of calling the [[Get]] internal method of O with argument Pk. */
      var kValue = O[ Pk ];

      /* ii. Let testResult be the result of calling the [[Call]] internal method of callbackfn with T as the
this value and argument list containing kValue, k, and O. */
      var testResult = callbackfn.call( T, kValue, k , O );

      /* iii. If ToBoolean(testResult) is true, return true. */
      if ( Boolean( testResult ) === true ) {
        return true;
      }
    }
    /* d. Increase k by 1. */
    k++;
  }

  /* 8. Return false. */
  return false;
}
