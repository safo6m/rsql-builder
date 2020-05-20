"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const escape_value_1 = __importDefault(require("./escape-value"));
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
        this._args = args;
        this._operator = operator;
    }
    toString() {
        return `${this._operator}${escape_value_1.default(this._args)}`;
    }
}
exports.Operation = Operation;
//# sourceMappingURL=operation.js.map