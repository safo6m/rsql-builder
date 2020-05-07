"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CHARS_TO_ESCAPE = /["'();,=!~<>\s]/;
class EscapedValue {
    constructor(val) {
        this.val = val;
    }
    toString() {
        return this.val;
    }
}
exports.EscapedValue = EscapedValue;
/**
 * Escape string value
 *
 * @param value Value to escape
 * @returns EscapedValue instance
 */
function escapeValue(value) {
    if (value instanceof EscapedValue) {
        return value;
    }
    let val;
    if (value === true || value === false) {
        val = `${value}`;
    }
    else if (typeof value !== 'string') {
        val = value.toString();
    }
    else {
        val = value;
    }
    if (CHARS_TO_ESCAPE.test(val) || val.length === 0) {
        return new EscapedValue(`"${val.replace(/"/g, '\\"')}"`);
    }
    else {
        return new EscapedValue(val);
    }
}
exports.default = escapeValue;
//# sourceMappingURL=escape-value.js.map