"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");
/**
 * Create exists operation
 *
 * @param args Operation argument
 * @returns Exists operation
 *
 * @example
 * import {exists} from 'rsql-builder';
 *
 * const op = exists(
 *  true
 * );  // '=exists=true'
 */
function exists(value) {
    return new operation_1.Operation(value, operation_1.Operators.EXISTS);
}
exports.default = exists;
//# sourceMappingURL=exists.js.map