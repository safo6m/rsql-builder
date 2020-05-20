"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");
/**
 * Create not-equal operation
 *
 * @param argument Operation argument
 * @returns Not-equal operation
 *
 * @example
 * import {ne} from 'rsql-builder';
 *
 * const op1 = ne(300);  // '!=300'
 * const op2 = ne('Taran*');  // '!=Tarant*'
 * const op3 = ne('John Travolta');  // '!="John Travolta"'
 */
function ne(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.NOT_EQUAL);
}
exports.default = ne;
//# sourceMappingURL=ne.js.map