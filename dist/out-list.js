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
    return new operation_1.Operation(new escape_value_1.EscapedValue(`(${args.map(escape_value_1.default)})`), operation_1.Operators.OUT);
}
exports.default = outList;
//# sourceMappingURL=out-list.js.map