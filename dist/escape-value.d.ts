export declare class EscapedValue {
  private val;
  constructor(val: string);
  toString(): string;
}
/**
 * Escape string value
 *
 * @param value Value to escape
 * @returns EscapedValue instance
 */
export default function escapeValue(value: any): EscapedValue;
