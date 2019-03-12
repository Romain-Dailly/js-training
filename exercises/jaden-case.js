'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str){
    let strWords = str.toLowerCase().split(" ");
    for (let i = 0; i < strWords.length; i++){
        strWords[i] = strWords[i].charAt(0).toUpperCase() + strWords[i].slice(1);
    }
    str = strWords.join(" ");
    return str;
    }

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.deepStrictEqual(jadenCase('abc'), 'Abc')
assert.deepStrictEqual(jadenCase('a1c'), 'A1c')
assert.deepStrictEqual(jadenCase('a1cdef acdef'), 'A1cdef Acdef')
assert.deepStrictEqual(jadenCase('WOL.lol lo,lol'),'Wol.lol Lo,lol')
// End of tests */
