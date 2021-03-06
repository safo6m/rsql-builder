import { Operation, Operators } from './operation';

/**
 * Create greater-or-equal operation
 *
 * @param argument Operation argument
 * @returns Greater-or-equal operation
 *
 * @example
 * import {ge} from 'rsql-builder';
 *
 * const op1 = ge(300);  // '>=300'
 * const op2 = ge('Taran*');  // '>=Tarant*'
 * const op3 = ge('John Travolta');  // '>="John Travolta"'
 */
export default function ge(argument: any): Operation {
  return new Operation(argument, Operators.GREATER_OR_EQUAL);
}
