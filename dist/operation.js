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
/**
 * Operators signs
 */
var Operators;
(function (Operators) {
    Operators["EQUAL"] = "==";
    Operators["NOT_EQUAL"] = "!=";
    Operators["LESS_THAN"] = "<";
    Operators["LESS_OR_EQUAL"] = "<=";
    Operators["GREATER_THAN"] = ">";
    Operators["GREATER_OR_EQUAL"] = ">=";
    Operators["IN"] = "=in=";
    Operators["OUT"] = "=out=";
})(Operators = exports.Operators || (exports.Operators = {}));
class Operation {
    constructor(args, operator = Operators.EQUAL) {
        this.args = args;
        this.operator = operator;
    }
    toString() {
        return `${this.operator}${escape_value_1.default(this.args)}`;
    }
}
exports.Operation = Operation;
class ListOperation extends Operation {
    toString() {
        const escapedValue = new escape_value_1.EscapedValue(`(${this.args.map(escape_value_1.default)})`);
        return `${this.operator}${escapedValue}`;
    }
}
exports.ListOperation = ListOperation;
//# sourceMappingURL=operation.js.map