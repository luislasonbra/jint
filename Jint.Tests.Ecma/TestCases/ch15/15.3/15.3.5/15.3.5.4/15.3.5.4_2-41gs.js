/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.3/15.3.5/15.3.5.4/15.3.5.4_2-41gs.js
 * @description Strict mode - checking access to strict function caller from non-strict function (Anonymous FunctionExpression with a strict directive prologue defined within a FunctionDeclaration)
 * @noStrict
 * @negative TypeError
 */


function f1() {
    return (function () {
        "use strict";
        return gNonStrict();
    })();
}
f1();


function gNonStrict() {
    return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}

