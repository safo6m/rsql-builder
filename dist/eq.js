"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");
/**
 * Create equal operation
 *
 * @param argument Operation argument
 * @returns Equal operation
 *
 * @example
 * import {eq} from 'rsql-builder';
 *
 * const op1 = eq(300);  // '==300'
 * const op2 = eq('Taran*');  // '==Tarant*'
 * const op3 = eq('John Travolta');  // '=="John Travolta"'
 */
function eq(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.EQUAL);
}
exports.default = eq;
//# sourceMappingURL=eq.js.map