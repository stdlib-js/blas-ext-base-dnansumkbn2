/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var Float64Array = require( '@stdlib/array-float64' );
var addon = require( './dnansumkbn2.native.js' );


// MAIN //

/**
* Computes the sum of double-precision floating-point strided array elements, ignoring `NaN` values and using a second-order iterative Kahan–Babuška algorithm.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} stride - stride length
* @param {NonNegativeInteger} offset - starting index
* @returns {number} sum
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var floor = require( '@stdlib/math-base-special-floor' );
*
* var x = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0, NaN, NaN ] );
* var N = floor( x.length / 2 );
*
* var v = dnansumkbn2( N, x, 2, 1 );
* // returns 5.0
*/
function dnansumkbn2( N, x, stride, offset ) {
	var view;
	if ( stride < 0 ) {
		offset += (N-1) * stride;
	}
	view = new Float64Array( x.buffer, x.byteOffset+(x.BYTES_PER_ELEMENT*offset), x.length-offset ); // eslint-disable-line max-len
	return addon( N, view, stride );
}


// EXPORTS //

module.exports = dnansumkbn2;