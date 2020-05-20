"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparison_group_1 = require("./comparison-group");
/**
 * Create "or"-group operation
 *
 * @param argument Operation argument
 * @returns Less-or-equal operation
 *
 * @example
 * import {comparison, eq, ge, or} from 'rsql-builder';
 *
 * const op = or(
 *   comparison('year', ge(1980)),
 *   comparision('director', eq('*Nolan'))
 * );  // 'year>=1980,director==*Nolan
 */
function or(...comparisons) {
    return comparisons.join(comparison_group_1.GroupType.OR);
}
exports.default = or;
//# sourceMappingURL=or.js.map