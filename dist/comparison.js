"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comparison {
    constructor(selector, operation) {
        this._selector = selector;
        this._operation = operation;
    }
    toString() {
        return `${this._selector}${this._operation}`;
    }
}
exports.Comparison = Comparison;
/**
 * Create comparison object
 *
 * @param selector Field name
 * @param operation Operation-instance
 * @returns Instance of Comparison
 *
 * @example
 * import {comparison, eq} from 'rsql-builder';
 *
 * const comp = comparison('field1', eq(200));  // 'field1==200'
 */
function comparison(selector, operation) {
    return new Comparison(selector, operation);
}
exports.default = comparison;
//# sourceMappingURL=comparison.js.map