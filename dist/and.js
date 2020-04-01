"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_group_1 = require("./comparison-group");
function hasOrOperation(operation) {
    let insideBracket = false;
    for (const char of operation) {
        switch (char) {
            case '(':
                insideBracket = true;
                break;
            case ')':
                insideBracket = false;
                break;
            case comparison_group_1.GroupType.OR:
                if (!insideBracket) {
                    return true;
                }
                break;
        }
    }
    return false;
}
/**
 * Generate "and"-group of comparisons
 *
 * @param comparisons List of comparisons or strings (for comparision group)
 * @returns "and"-group string
 *
 * @example
 * import {and, comparison, eq, ge} from 'rsql-builder';
 *
 * const op = and(
 *   comparison('year', ge(1980)),
 *   comparision('director', eq('Quentin Tarantino'))
 * );  // 'year>=1980;director=="Quentin Tarantino"
 */
function and(...comparisons) {
    return comparisons
        .map((comparison) => typeof comparison === 'string' && hasOrOperation(comparison)
        ? `(${comparison})`
        : comparison)
        .join(comparison_group_1.GroupType.AND);
}
exports.default = and;
//# sourceMappingURL=and.js.map