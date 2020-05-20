"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");
/**
 * Create less-than operation
 *
 * @param argument Operation argument
 * @returns Less-than operation
 *
 * @example
 * import {lt} from 'rsql-builder';
 *
 * const op1 = lt(300);  // '<300'
 * const op2 = lt('Taran*');  // '<Tarant*'
 * const op3 = lt('John Travolta');  // '<"John Travolta"'
 */
function lt(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.LESS_THAN);
}
exports.default = lt;
//# sourceMappingURL=lt.js.map