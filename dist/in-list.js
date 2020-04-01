"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const escape_value_1 = __importStar(require("./escape-value"));
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
    return new operation_1.Operation(new escape_value_1.EscapedValue(`(${args.map(escape_value_1.default)})`), operation_1.Operators.IN);
}
exports.default = inList;
//# sourceMappingURL=in-list.js.map