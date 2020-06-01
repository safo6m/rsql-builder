"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const operation_1 = require("./operation");
/**
 * Create in-list operation
 *
 * @param args Operation argument
 * @returns In-list operation
 *
 * @example
 * import {inList} from 'rsql-builder';
 *
 * const op = inList(
 *  300,
 *  'Taran*',
 *  'John Travolta'
 * );  // '=in=(300,Taran*,"John Travolta")'
 */
function inList(...args) {
    return new operation_1.ListOperation(args, operation_1.Operators.IN);
}
exports.default = inList;
//# sourceMappingURL=in-list.js.map