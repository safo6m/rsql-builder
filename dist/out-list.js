"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");
/**
 * Create out-list operation
 *
 * @param args Operation argument
 * @returns out-list operation
 *
 * @example
 * import {outList} from 'rsql-builder';
 *
 * const op = outList(
 *  300,
 *  'Taran*',
 *  'John Travolta'
 * );  // '=out=(300,Taran*,"John Travolta")'
 */
function outList(...args) {
    return new operation_1.ListOperation(args, operation_1.Operators.OUT);
}
exports.default = outList;
//# sourceMappingURL=out-list.js.map