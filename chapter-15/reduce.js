function ArrayReduce( callbackfn, initialValue ) {
  // step 1
  var O = Object( this );

  // step 2
  var lenValue = O.length;

  // step 3
  var len = Number( lenValue );

  // step 4
  if ( typeof callbackfn !== 'function' ) {
    throw new TypeError( callbackfn + ' is not a function' );
  }

  /**
   * step 5
   * If len is 0 and initialValue is not present, throw a TypeError exception.
   */
  if ( len === 0 && !initialValue ) {
    throw new TypeError( this + ' must have items' );
  }

  /**
   * step 6
   * Let k be 0
   */
  var k = 0;

  /**
   * step 7
   *  If initialValue is present, then
   *    a. Set accumulator to initialValue.
   */
  if ( typeof initialValue !== 'undefined' ) {
    var accumulator = initialValue;

  /* 8. Else, initialV alue is not present */
  } else {

    /* a. Let kPresent be false. */
    var kPresent = false;

    /* b. Repeat, while kPresent is false and k < len */
    while ( kPresent === false && k < len ) {
      /* i. Let Pk be ToString(k). */
      var Pk = String( k );

      /* ii. Let kPresent be the result of calling the [[HasProperty]] internal method of O with argument Pk. */

      var kPresent = O.hasOwnProperty( Pk );

      /* iii. If kPresent is true, then */
      if ( kPresent === true ) {
        /* 1. Let accumulator be the result of calling the [[Get]] internal method of O with argument Pk. */
        accumulator = O[ Pk ];
      }

      /* iv. Increase k by 1. */
      k += 1;
    }

    /* c. If kPresent is false, throw a TypeError exception. */
    if ( kPresent === false ) {
      throw new TypeError('kPresent is false');
    }
  }

  /* 9. Repeat, while k < len */
  while ( k < len ) {
    // a. Let Pk be ToString(k).
    var Pk = String( k );

    // b. Let kPresent be the result of calling the [[HasProperty]] internal method of O with argument Pk.
    var kPresent = O.hasOwnProperty( Pk );

    /* c. If kPresent is true, then */
    if ( kPresent === true ) {
      /* i. Let kValue be the result of calling the [[Get]] internal method of O with argument Pk. */
      kValue = O[ Pk ];

      /* ii. Let accumulator be the result of calling the [[Call]] internal method of callbackfn with
      undefined as the this value and argument list containing accumulator, kValue, k, and O. */
      accumulator = callbackfn.call( undefined, accumulator, kValue, k, O)
    }

    // d. Increase k by 1.
    k++;
  }

  /* 10. Return accumulator. */
  return accumulator;
}
