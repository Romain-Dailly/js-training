'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(str){
    return str.toLowerCase();
}

//* Begin of tests
const assert = require('assert')
assert.deepStrictEqual(whisper('A B C'), 'a b c')
assert.deepStrictEqual(whisper('A 1 C'), 'a 1 c')
assert.deepStrictEqual(whisper('A 1 C D E F'), 'a 1 c d e f')
assert.deepStrictEqual(whisper('WOL.LOL LO,LOL'),'wol.lol lo,lol')
// End of tests */
