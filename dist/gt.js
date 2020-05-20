"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");
/**
 * Create greater-than operation
 *
 * @param argument Operation argument
 * @returns Greater-than operation
 *
 * @example
 * import {gt} from 'rsql-builder';
 *
 * const op1 = gt(300);  // '>300'
 * const op2 = gt('Taran*');  // '>Tarant*'
 * const op3 = gt('John Travolta');  // '>"John Travolta"'
 */
function gt(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.GREATER_THAN);
}
exports.default = gt;
//# sourceMappingURL=gt.js.map