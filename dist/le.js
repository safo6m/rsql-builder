"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");
/**
 * Create less-or-equal operation
 *
 * @param argument Operation argument
 * @returns Less-or-equal operation
 *
 * @example
 * import {le} from 'rsql-builder';
 *
 * const op1 = le(300);  // '<=300'
 * const op2 = le('Taran*');  // '<=Tarant*'
 * const op3 = le('John Travolta');  // '<="John Travolta"'
 */
function le(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.LESS_OR_EQUAL);
}
exports.default = le;
//# sourceMappingURL=le.js.map