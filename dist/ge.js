"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");
/**
 * Create greater-or-equal operation
 *
 * @param argument Operation argument
 * @returns Greater-or-equal operation
 *
 * @example
 * import {ge} from 'rsql-builder';
 *
 * const op1 = ge(300);  // '>=300'
 * const op2 = ge('Taran*');  // '>=Tarant*'
 * const op3 = ge('John Travolta');  // '>="John Travolta"'
 */
function ge(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.GREATER_OR_EQUAL);
}
exports.default = ge;
//# sourceMappingURL=ge.js.map