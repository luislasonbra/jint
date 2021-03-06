/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-125.js
 * @description Object.defineProperty - 'O' is an Array, 'name' is the length property of 'O', test that RangeError exception is thrown when  [[Value]] field of 'desc' is undefined (15.4.5.1 step 3.c)
 */


function testcase() {

        var arrObj = [];

        try {
            Object.defineProperty(arrObj, "length", {
                value: undefined
            });
            return false;
        } catch (e) {
            return e instanceof RangeError;
        }
    }
runTestCase(testcase);
