"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");
/**
 * Create like operation
 *
 * @param argument Operation argument
 * @returns Like operation
 *
 * @example
 * import {like} from 'rsql-builder';
 *
 * const op1 = like(300);  // '=like=300'
 * const op2 = like('Taran*');  // '=like=Tarant*'
 * const op3 = like('John Travolta');  // '=like="John Travolta"'
 */
function like(argument) {
    return new operation_1.Operation(argument, operation_1.Operators.LIKE);
}
exports.default = like;
//# sourceMappingURL=like.js.map