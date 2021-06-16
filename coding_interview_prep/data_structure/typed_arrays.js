// First create a buffer that is 64-bytes. Then create a Int32Array typed array with a view of it called i32View.

/*
Type	Each element size in bytes

Int8Array	         1
Uint8Array	         1
Uint8ClampedArray	   1
Int16Array	         2
Uint16Array	         2
Int32Array	         4
Uint32Array	         4
Float32Array	      4
Float64Array	      8
*/

var buffer = new ArrayBuffer(64);
var i32View = new Int32Array(16);
